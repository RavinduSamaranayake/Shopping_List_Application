import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {connect} from 'react-redux';
import {getItems,deleteItem} from '../actions/itemActions';
import PropTypes from 'prop-types';


class ShoppingList extends Component {


  componentDidMount(){  //this one runs when the component mounts. that's usually when you want to if you are 
                        //making any api request or if you are calling an action this is where you want to do.
    this.props.getItems();
  }

  onDeleteClick = id => {
    this.props.deleteItem(id);
  }
   

  render() {

   // this.props.item.items   => the item represent the entire state object items , the items is the array inside the state 
    //const { items } = this.state; //destructuring and get the all item object instead of this.state.items
    const { items } = this.props.item;
    return (
      <Container> 
        {/* <Button
          color="dark"
          style={{ marginBottom: '2rem' }}
          onClick={() => {
            const name = prompt('Enter Item');
            if (name) {
              this.setState(state => ({
                items: [...state.items, { id: uuid(), name }] //... spread operator to basically say take the state items so we have the state items but we also add on to it id and name.
              }));
            }
          }}
        >
          Add Item
        </Button> */}

        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ _id, name }) => (    //_id is a mongo db item id.
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this,_id)} //we use 'bind' for pass the value for function
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({   //this allows us to take our items state in this case this is our state and
                                        //we want to basically turn this or map this into component property so we can use it shopping lists
    item: state.item                   //so we want to be able to use it as this.props.items
                                        
                                      
});

export default connect(mapStateToProps, {getItems,deleteItem})(ShoppingList);