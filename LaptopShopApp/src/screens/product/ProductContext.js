
import React , {useState , createContext} from 'react'
import { getProducts, getProductById } from './ProductService';

export const ProductContext = createContext();

export const ProductContextProvider = (props) => {
  const { children } = props;
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);

  const onGetProducts = async (sort) =>{
    try {
        const result = await getProducts(sort);
        setProducts(result);
 
    } catch (error) {
      console.log('dang nhap that bai', error);
    }
  }

  const updateCart = (product, quantity, price) => {
    let temp = cart;
    if (cart == 0) {
      temp.push({ product: product, quantity: quantity, price: price })
    } else {
      const check = cart.filter(item => item.product._id == product._id);
      // khong co san pham
      if (check.length == 0) {

        temp.push({ product: product, quantity: quantity, price: price })
      } else {
        if (quantity <= 0) {
          temp = temp.filter(item => item.product._id != product._id)
        } else {
          temp = temp.map(item => {
            if (item.product._id == product._id) {
              
              item.quantity = quantity>=3 ? 3 : quantity;
            }
            return item;
          }
          )
        }
      }
    }
    setCart([...temp]);
  }
  const onGetProductById = async (id) =>{
    try {
        const result = await getProductById(id);
        setProduct(result);
    } catch (error) {
      console.log('that bai', error);
    }
  }
  return (
    <ProductContext.Provider
      value={{
        onGetProducts, onGetProductById, updateCart , product , products, cart, setCart
      }}
    >
       {children}
    </ProductContext.Provider>
  )
}


export default ProductContextProvider
