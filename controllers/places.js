const router = require('express').Router()

router.get('/', (req, res) => {
  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: './restaurant.jpg'
  }, {
      name: 'Coding Cat Cafe',
      city: 'Phoenix',
      state: 'AZ',
      cuisines: 'Coffee, Bakery',
      pic: './yummy1.jpg'
  }]
  
      
    res.render('places/index', {places})
})

router.get('/new', (req, res) => {
  res.render('places/new')
})


module.exports = router
