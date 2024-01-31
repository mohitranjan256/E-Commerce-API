const Product = require('../model/productmodel');


exports.createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find({}, { variants: 0 });
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
};


exports.getProductById = async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(product);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
};


exports.updateProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const updates = req.body;
        const options = { new: true }; 
        const updatedProduct = await Product.findByIdAndUpdate(productId, updates, options);
        if (!updatedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(updatedProduct);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


exports.deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;
        const deletedProduct = await Product.findByIdAndDelete(productId);
        if (!deletedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json({ message: 'Product deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.searchProducts = async (req, res) => {
    try {
        const query = req.query.q.toLowerCase();
        const results = await Product.find({
          $or: [
            { 'name': { $regex: query, $options: 'i' } },
            { 'description': { $regex: query, $options: 'i' } },
            { 'variants.name': { $regex: query, $options: 'i' } },
          ],
        });
        res.json(results);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
};
// exports.searchProducts=async (req,res)=>{
//     try{
//         const query = req.query.q || '';
//         const results = Product.filter((product) => {
//             return (
//             product.name.toLowerCase().includes(query.toLowerCase()) ||
//             product.description.toLowerCase().includes(query.toLowerCase()) ||
//             product.variants.some(
//                 (variant) => variant.name.toLowerCase().includes(query.toLowerCase())
//             )
//             );
//         });

//   res.json({ results });

//     }catch(error){
//         console.log(error);
//         res.status(500).json({success:false,msg:"Internal server error"});
//     }
// }
