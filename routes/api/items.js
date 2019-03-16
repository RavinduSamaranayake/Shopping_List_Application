const express = require('express');
const router = express.Router();


//Item model
const Item = require('../../models/Item') // the "../" mean back to the one directory

//@route GET api/items
//@desc Get All items
//@access public

router.get('/',(req,res) => {
  Item.find()
    .sort({date:-1})
    .then(items => res.json(items))
});

//@route post api/items
//@desc create a post
//@access public

router.post('/',(req,res) => {
   const newItem = new Item({
       name:req.body.name
     });
     newItem.save().then(item => res.json(item));
});

module.exports = router;


