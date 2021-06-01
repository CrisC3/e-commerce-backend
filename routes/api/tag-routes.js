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

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    
    // Assigns the req.params.id to a constant variable
    const getId = req.params.id;

    // Runs a find by primary key of Tag, and the joined Product table
    const tagsProdIdData = await Tag.findByPk(getId, {
      include: [{model: Product}]
    });

    // Returns the result, with code 200
    res.status(200).json(tagsProdIdData);

  } catch (error) {

    // Returns with an error, with code 500
    res.status(500).json(error);
    
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {

    // Runs a create new tag and saves to variable
    const newTag = await Tag.create({
      tag_name: req.body.tag_name
    });

    // Returns the result, with code 200
    res.status(200).json(newTag);
    
  } catch (error) {

    // Returns with an error, with code 500
    res.status(500).json(error);
    
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {

    // Assigns the req.params.id to a constant variable
    const putId = req.params.id;

    // Runs an update by primary key of Category
    const tagIdData = await Tag.update(req.body, {
      where: {
        id: putId
      }
    });

    // Returns the result, with code 200
    res.status(200).json(tagIdData);
    
  } catch (error) {

    // Returns with an error, with code 500
    res.status(500).json(error);
    
  }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
