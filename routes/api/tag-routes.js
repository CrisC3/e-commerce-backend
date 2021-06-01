const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {

    // Runs a find all from Tag, with Product_Tag and Product tables
    const tagsProdData = await Tag.findAll({
      include: [{model: Product}]
    });

    // Returns the result, with code 200
    res.status(200).json(tagsProdData);
    
  } catch (error) {

    // Returns with an error, with code 500
    res.status(500).json(error);
    
  }
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
