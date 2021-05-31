const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    
    // Runs a find all from the tables Category and Product
    const catProdData = await Category.findAll({
      include: [{model: Product}]
    });

    // Returns the result, with code 200
    res.status(200).json(catProdData);

  } catch (error) {

    // Returns with an error, with code 500
    res.status(500).json(error);

  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {

    // Assigns the req.params.id to a constant variable
    const id = req.params.id;

    // Runs a find by primary of Category, and the joined Product table
    const catProdIdData = await Category.findByPk(id, {
      include: [{model: Product}]
    });

    // Returns the result, with code 200
    res.status(200).json(catProdIdData);
    
  } catch (error) {

    // Returns with an error, with code 500
    res.status(500).json(error);
    
  }
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
