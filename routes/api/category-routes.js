const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    
    const catProdData = await Category.findAll({
      include: [{model: Product}]
    });

    res.status(200).json(catProdData);

  } catch (error) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {

    const id = req.params.id;
    const catProdIdData = await Category.findByPk(id, {
      include: [{model: Product}]
    });

    res.status(200).json(catProdIdData);
    
  } catch (error) {
    
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
