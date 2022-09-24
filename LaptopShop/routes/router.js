var express = require('express');
var router = express.Router();

const upload = require('../utils/upload');
const brandController = require('../components/brands/controller');
const categoriesController = require('../components/categories/controller');
const productController = require('../components/products/controller');
const customerController = require('../components/customers/controller');
const employeeController = require('../components/employee/controller');
const productModel = require('../components/products/model');
const customerModel = require('../components/customers/model');
const employeeModel = require('../components/employee/model');
/* EMPLOYEE. */
router.get("/login", function (req, res, next) {
  res.render("login");
});

router.get("/logout", async function (req, res, next) {
  req.session.destroy(function (err) {
    res.redirect('/login');
  })
});

/* PRODUCT. */
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
router.post('/login', async function (req, res, next) {
  const { username, password } = req.body;
  // tiến hành đăng nhập
  const user= await employeeController.login(username,password);
  // if(user){
  //   const token=jwt.sign({id:user._id,username:user.username},'mykey');
  //   req.session.token=token;
  //   res.redirect('/san-pham');
  // }else{
  //   res.redirect('/dang-nhap');
  // }
  // nếu thành công thì chuyển qua sản phẩm
  
  res.redirect('/home')

  // nếu không thành công
  // res.redirect('/dang-nhap');
});
router.post("/", [upload.single('image')], async function (req, res, next) {
  let { body, file } = req;
  let image = '';
  if (file) {
    image = `http://192.168.1.7:3000/images/${file.filename}`
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
console.log('product',product)
  const categories = await categoriesController.getCategoriesSelected(product.categoryId._id);
  const brands = await brandController.getBrandsSelected(product.brandId._id);
  res.render("product_update", { product: product, categories: categories, brands: brands });
});

router.post("/:id/product_update", [upload.single('image')], async function (req, res, next) {

  let { body, file, params } = req;
  delete body.image;
  if (file) {
    let image = `http://10.22.208.225:3000/images/${file.filename}`
    body = { ...body, image }
  }
  await productController.update(params.id, body);
  res.redirect('/products');
});

/* CUSTOMER. */

router.get("/customers",async function (req, res, next) {
  const name = req.query.name;
  if (name) {
    customerModel
      .find({ name: { $regex: new RegExp(name), $options: 'i' } })
      .then((data) => {
        res.render("customers", { customers: data });
      });
  } else {
    const data = await customerController.getCustomers();
    console.log('data',data);
    res.render("customers", { customers: data });
  }
});

router.delete("/:id/deleteCustomer", async function (req, res, next) {
  const { id } = req.params;
  await customerController.delete(id);
  res.json({ result: true });
});

module.exports = router;

