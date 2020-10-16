var express = require('express');
var router = express.Router();

/* GET users listings. */
router.get('/', function (req, res, next) {
    let listingsData = {
        users: [
        {
        'id': 1, 
        'heading': 'Listing Header #1',
        'description': 'This is a listing description. This is possibly a long string with manny paragraphs.',
        'seller_id': 1234567890,
        'price': 49.99,
        'images': [
            { 
             original: 'https://colorlib.com/preview/theme/shoppers/images/shoe_1.jpg', 
             thumbnail: 'https://colorlib.com/preview/theme/shoppers/images/shoe_1.jpg' 
            },
            { 
             original: 'https://colorlib.com/preview/theme/shoppers/images/men.jpg', 
             thumbnail: 'https://colorlib.com/preview/theme/shoppers/images/men.jpg' 
           },
            { 
             original: 'https://colorlib.com/preview/theme/shoppers/images/person_1.jpg', 
             thumbnail: 'https://colorlib.com/preview/theme/shoppers/images/person_1.jpg' 
           },
           ],
        },
        {
        'id': 2, 
        'heading': '#2 Header',
        'description': 'This is a listing description. This is possibly a long string with manny paragraphs.',
        'seller_id': 0987654321,
        'price': 99.49,
        'images': [
            { 
             original: 'https://colorlib.com/preview/theme/shoppers/images/cloth_1.jpg', 
             thumbnail: 'https://colorlib.com/preview/theme/shoppers/images/cloth_1.jpg' 
            },
            { 
             original: 'https://colorlib.com/preview/theme/shoppers/images/cloth_2.jpg', 
             thumbnail: 'https://colorlib.com/preview/theme/shoppers/images/cloth_2.jpg' 
           },
            { 
             original: 'https://colorlib.com/preview/theme/shoppers/images/cloth_3.jpg', 
             thumbnail: 'https://colorlib.com/preview/theme/shoppers/images/cloth_3.jpg' 
           },
           ],
        }
    ]
};
  res.json(listingsData);
});

module.exports = router;