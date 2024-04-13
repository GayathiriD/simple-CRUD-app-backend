
const Product = require('../models/product.model');
const getProduct = async (req, res) => {
    try{
        const products = await Product.find();
        res.json({products});
    }
    catch (error)
    {
        res.status(500).json({message: error.message})
    }
  }

  const CreateProduct = async (req, res) => {
    try{
        const product = await Product.create(req.body);
        res.status(201).json({product});
    }
    catch (error)
    {
        res.status(500).json({message: error.message})
    }
  }

  

  const getProductById = async (req, res) => {
    try{
        const {id} = req.params;
        const product = await Product.findById(id);
        res.json({product});
    }
    catch (error)
    {
        res.status(500).json({message: error.message})
    }
}
const updateProduct = async (req, res) => {
     try{
       const {id} = req.params;
       const product = await Product.findByIdAndUpdate(id, req.body);
       if(!product){
         res.status(404).json({message: 'Product not found'});
       }
       const updatedProduct = await Product.findById(id);
       res.json({updatedProduct});
     }
     catch (error)
     {
         res.status(500).json({message: error.message});
     }
}

const deleteProduct = async (req, res) => {
    try{
      const {id} = req.params;
      const product = await Product.findByIdAndDelete(id);
      if(!product){
        res.status(404).json({message: 'Product not found'});
      }
      res.json({message: 'Product deleted successfully'});
    }
    catch (error)
    {
        res.status(500).json({message: error.message});
    }
}

module.exports = { getProduct,CreateProduct, getProductById, updateProduct, deleteProduct};
        