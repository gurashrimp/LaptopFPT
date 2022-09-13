
import React , {useState , createContext} from 'react'
import { getProducts, getProductById } from './ProductService';

export const ProductContext = createContext();

export const ProductContextProvider = (props) => {
  const { children } = props;
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});


  const onGetProducts = async () =>{
    try {
        const result = await getProducts();
        setProducts(result);
 
    } catch (error) {
      console.log('dang nhap that bai', error);
    }
  }

  const onGetProductById = async (id) =>{
    try {
        const result = await getProductById(id);
        setProduct(result);
    } catch (error) {
      console.log('dang ky that bai', error);
    }
  }
  return (
    <ProductContext.Provider
      value={{
        onGetProducts, onGetProductById , product , products
      }}
    >
       {children}
    </ProductContext.Provider>
  )
}


export default ProductContextProvider
