var express = require('express');
var router = express.Router();

const upload = require('../utils/upload');
const brandController = require('../components/brands/controller');
const categoriesController = require('../components/categories/controller');
const productController = require('../components/products/controller');

var multipleUpload = upload.fields([{name : 'file' , maxCount : 5}]);


/* GET EMPLOYEE. */
router.get("/login", function (req, res, next) {
  res.render("login");
});

/* GET PRODUCT. */
router.get("/home", function (req, res, next) {
  res.render("home");
});


router.get("/products",async function (req, res, next) {
  const name = req.query.name;
  if (name) {
    productModel
      .find({ name: { $regex: new RegExp(name), $options: 'i' } })
      .then((data) => {
        res.render("products", { products: data });
      });
  } else {
    const data = await productController.getProducts();
    console.log('data',data);
    res.render("products", { products: data });
  }
});

router.get("/product_insert", async function (req, res, next) {
  const categories = await categoriesController.getCategories();
  const brands = await brandController.getBrands();
  res.render("product_insert", { categories: categories, brands: brands });
});

router.post("/", [upload.single('image')], async function (req, res, next) {
  let { body, file } = req;
  let image = '';
  if (file) {
    image = `http://192.168.1.8:3000/images/${file.filename}`
    body = { ...body, image }
  }
  await productController.insert(body);
  res.redirect("/products");
});

router.delete("/:id/delete", async function (req, res, next) {
  const { id } = req.params;
  await productController.delete(id);
  res.json({ result: true });
});

router.get("/:id/product_update", async function (req, res, next) {
  const { id } = req.params;
  const product = await productController.getProductById(id);
  const categories = await categoriesController.getCategoriesSelected(product.categoryId._id);
  const brands = await brandController.getBrandsSelected(product.brandId._id);
  res.render("product_update", { product: product, categories: categories, brands: brands });
});

router.post("/:id/product_update", [upload.single('image')], async function (req, res, next) {

  let { body, file, params } = req;
  delete body.image;
  if (file) {
    let image = `http://10.82.136.252:3000/images/${file.filename}`
    body = { ...body, image }
  }
  await productController.update(params.id, body);
  res.redirect('/home');
});

module.exports = router;

