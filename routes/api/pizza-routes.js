const router = require('express').Router();

// adding already written methods from controllers in the routes, this way is more organized 
const { getAllPizza, getPizzaById, createPizza, updatePizza, deletePizza } = require('../../controllers/pizza-controllers');




// Set up GET all and POST at /api/pizzas
// same as router.get() and router.post() but combining together with the same api, looks cleaner 
router
    .route('/')
    .get(getAllPizza)
    .post(createPizza);

// Set up GET one, PUT, and DELETE at /api/pizzas/:id
router
    .route('/:id')
    .get(getPizzaById)
    .put(updatePizza)
    .delete(deletePizza);

module.exports = router;