var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:listingId', function(req, res, next) {
  let listingData = {
    'heading': 'This is a Listing Header',
    'description': 'This is a listing description. This is possibly a long string with manny paragraphs.',
    'seller_id': 1234567890,
    'price': 199.99
  };
  res.json(listingData);
});

module.exports = router;
