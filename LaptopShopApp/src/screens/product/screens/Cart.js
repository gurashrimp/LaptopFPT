import { StyleSheet, Text, View, Image, Pressable, FlatList, Dimensions, Modal, ToastAndroid } from 'react-native';
import React, { useState, useEffect,useContext } from 'react';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { ProductContext } from '../ProductContext';

const CheckOutModal = (props) => {
  const { isShowModal, setIsShowModal } = props;
  const {onSaveCart}=useContext(ProductContext);
  const checkOut=()=>{
    onSaveCart();
    ToastAndroid.show('Thanh toán thành công',ToastAndroid.BOTTOM);
    setIsShowModal(false);
  }
  return (
    <Modal animationType='slide'
      transparent={true}
      visible={isShowModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <Text>Xác nhận thanh toán</Text>
          <Pressable style={styles.checkoutButton} onPress={checkOut} >
            <Text style={styles.checkoutText}>Đồng ý</Text>
          </Pressable>
          <Text onPress={() => setIsShowModal(false)} style={styles.cancel}>Hủy bỏ</Text>
        </View>
      </View>

    </Modal>
  )
}
const DeleteModal = (props) => {
  const { isShowDeleteModal, setIsShowDeleteModal } = props;
  console.log(props);
  return (
    <Modal animationType='slide'
      transparent={true}
      visible={isShowDeleteModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <Text>Xác nhận xóa món hàng</Text>
          <Pressable style={styles.deleteButton}>
            <Text style={styles.deleteText}>Đồng ý</Text>
          </Pressable>
          <Text onPress={() => setIsShowDeleteModal (false)} style={styles.cancel}>Hủy bỏ</Text>
        </View>
      </View>

    </Modal>
  )
}
// const CartItem = (props) => {
//   const { navigation, route: { params: { cart } } } = props;

// //   const { state, setParams, navigate } = props.navigation;
// // const params = state.params || {};

// // console.log(params.cart);

//   const {product, onGetProductById} = useContext(ProductContext);
//   useEffect(async () => {
//     await onGetProductById(_id);
//    // setproduct(res);
//    return () => {
//      //res;
//    }
//  }, []);
//   const [refresh, setRefresh] = useState(false);
//   const {updateCart}=useContext(ProductContext);
//   const { name, image, price, size, madein, quantity } = cart;
//   const renderItem = ({ item }) => {
//     // const { product, quantity, price, checked } = item;
//     return (

//       <View style={styles.itemContainer}>
//         <View style={styles.checkedContainer}>
//           {
//             checked == true ?
//               <FontAwesome name="check-square" size={24} color="black" /> :
//               <FontAwesome name="square-o" size={24} color="black" />
//           }

//         </View>
//         <View style={styles.imagesContainer}>
//           <Image style={styles.images} resizeMode='cover' source={{ uri: image }} />
//         </View>
//         <View style={styles.infoContainer}>
//           <View>
//             <Text>{name}</Text>
//           </View>
//           <View>
//           <Text style={styles.price}>{price}đ</Text> 
//         </View>
//         <View style={styles.quantityAction}>
//           <Text onPress={() => updateCart(product, quantity - 1, price, true)} style={styles.removeAction}>-</Text>
//           <Text style={styles.quantity}>{quantity}</Text>
//           <Text onPress={() => updateCart(product, quantity + 1, price, true)} style={styles.addAction}>+</Text>
//           <Text style={styles.delete}>Xóa</Text>
          
//         </View>
//         </View>
        
//       </View>)
//   }
//   const reloadData=()=>{
//     setRefresh=true;

//     setRefresh=false;
//   }
//   return (
//     <FlatList
//       data={cart}
//       renderItem={renderItem}
//       keyExtractor={item => Math.random()
//       }
//       style={styles.flatlistContainer}
//       showsVerticalScrollIndicator={false}
//       refreshing={refresh}
//       onRefresh={reloadData}
//     />
//   )
// }
const CartItem = (props) => {
  const [refresh, setRefresh] = useState(false);
  const {cart}=props;
  const {updateCart}=useContext(ProductContext);
  const renderItem = ({ item }) => {
    const { product, quantity, price, checked } = item;
    return (

      <View style={styles.itemContainer}>
        <View style={styles.checkedContainer}>
          {
            checked == true ?
              <FontAwesome name="check-square" size={24} color="black" /> :
              <FontAwesome name="square-o" size={24} color="black" />
          }

        </View>
        <View style={styles.imagesContainer}>
          <Image style={styles.images} resizeMode='cover' source={{ uri: product.image }} />
        </View>
        <View style={styles.infoContainer}>
          <View>
            <Text>{product.name}</Text>
          </View>
          <View>
          <Text style={styles.price}>{product.price*quantity}đ</Text>
        </View>
        <View style={styles.quantityAction}>
          <Text onPress={() => updateCart(product, quantity - 1, price, true)} style={styles.removeAction}>-</Text>
          <Text style={styles.quantity}>{quantity}</Text>
          <Text onPress={() => updateCart(product, quantity + 1, price, true)} style={styles.addAction}>+</Text>
          <Text style={styles.delete}>Xóa</Text>
          
        </View>
        </View>
        
      </View>)
  }
  const reloadData=()=>{
    setRefresh=true;

    setRefresh=false;
  }
  return (
    <FlatList
      data={cart}
      renderItem={renderItem}
      keyExtractor={item => Math.random()
      }
      style={styles.flatlistContainer}
      showsVerticalScrollIndicator={false}
      refreshing={refresh}
      onRefresh={reloadData}
    />
  )
}


const Cart = (props) => {
  const [ isShowModal, setIsShowModal ] = useState(false);
  const [ isShowDeleteModal, setIsShowDeleteModal ] = useState(false);
  const {cart, setCart}=useContext(ProductContext);
  console.log('cart',cart);
  const isShowCheckout = () => {
    const items = cart.filter(item => item.checked == true) || [];
    let total = 0;
    for (let index = 0; index < items.length; index++) {
      const element = items[index];
      total += element.quantity * element.price;
    }
    return { isShown: items.length > 0, total: total };
  }
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Giỏ hàng</Text>
        <FontAwesome onPress={() => setIsShowDeleteModal(true)} style={styles.trash} name="trash-o" size={24} color="black" />
      </View>
      <View>
        {
          cart.length == 0 ?
            <View style={styles.emtyContainer}>
              <Text style={styles.emty}>Giỏ hàng của bạn đang trống</Text>
            </View> :
            <CartItem cart={cart}/>
        }
      </View>
      <View style={styles.checkoutContainer}>
        {
          isShowCheckout().isShown == true ?
            <>
              <View style={styles.totalContainer}>
                <Text style={styles.totalText}>Tạm tính</Text>
                <Text style={styles.totalText}>{isShowCheckout().total}vnd</Text>
              </View>
              <View>
                <Pressable onPress={() => setIsShowModal(true)} style={styles.buttonContainer} >
                  <Text style={styles.buttonText}>Tiến hành thanh toán</Text>
                  <MaterialIcons style={styles.buttonText} name="keyboard-arrow-right" size={24} color="black" />
                </Pressable>
              </View>
            </> : <></>
        }

      </View>
      <CheckOutModal isShowModal={isShowModal} setIsShowModal={setIsShowModal}/>
      <DeleteModal isShowDeleteModal={isShowDeleteModal} setIsShowDeleteModal={setIsShowDeleteModal}/>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  modalContainer: {
    flex:1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor:'rgba(0, 0, 0,0.5)'
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    padding:35,
    shadowColor:'#000',
    shadowOffset:{
      width:0,
      height:2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation:5,
    alignItems: 'center',
    width:'90%',
    height:200,
  },
  checkoutButton: {
    backgroundColor: '#FE5045',
    margin: 10,
    height:50,
    borderRadius:4,
    width:'100%',
    alignItems:'center',
    justifyContent:'center'
  },
  checkoutText: {
    color: 'white',
    fontSize:16,
  },
  deleteButton: {
    backgroundColor: '#007537',
    margin: 10,
    height:50,
    borderRadius:4,
    width:'100%',
    alignItems:'center',
    justifyContent:'center'
  },
  deleteText: {
    color: 'white',
    fontSize: 16
  },
  cancel: {
    color: 'black',
    borderBottomColor:'black',
    borderBottomWidth:1,
    fontSize:16
  },
  flatlistContainer: {
    maxHeight: Dimensions.get('window').height - 200
  },
  buttonText: {
    color: 'white',
  },
  checkoutContainer: {
    paddingHorizontal: 28,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  totalText: {
    opacity: 0.6
  },
  buttonContainer: {
    height: 50,
    backgroundColor: '#FE5045',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    marginTop: 16,
    width: '100%',
  },
  trash: {
    position: 'absolute',
    right: 24,
  },
  delete: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  addAction: {
    borderRadius: 5,
    borderWidth: 0.5,
    width: 27.5,
    height: 27.5,
    textAlign: 'center',
    lineHeight: 20.5,
    color: 'black',
    marginHorizontal:3,
  },
  quantity: {
    marginHorizontal:3,
  },
  removeAction: {
    borderRadius: 5,
    borderWidth: 0.5,
    width: 27.5,
    height: 27.5,
    textAlign: 'center',
    lineHeight: 20.5,
    color: 'black',
    marginHorizontal:3,
  },
  quantityAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginRight:50
  },
  price: {
    fontSize: 16,
    color: '#007537'
  },
  itemContainer: {
    flexDirection: 'row',
    marginVertical: 24,
    paddingHorizontal: 24,
  },
  checkedContainer: {
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',

  },
  imagesContainer: {
    height: 77,
    width: 77,
    borderRadius: 8,

  },
  images: {
    width: '80%',
    height: '80%',

  },
  infoContainer: {
    marginLeft: 15,
  },
  emtyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    textTransform: 'uppercase'
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 32,
  }
});
// var cart = [
//   {
//     product: {
//       "_id": "61d12f0c555401c8610fb8d1",
//       "name": "Ambrosia ambrosioides (Cav.) Payne",
//       "price": 1,
//       "madein": "Indonesia",
//       "quantity": 1547072377,
//       "category": "61d11c4b86511f0016f490ed",
//       "images": [
//         "https://2.pik.vn/20220d042675-dd62-42f8-8c56-e2e2fd51a531.jpg",
//         "https://2.pik.vn/202223f29113-5f90-43a2-924f-7cdab16878e3.jpg"
//       ],
//       "sold": 98,
//       "size": "XS",
//       "createdAt": "2021-05-20T00:40:04.000Z",
//       "updatedAt": "2021-02-15T15:54:50.000Z"
//     },
//     quantity: 5,
//     price: 3,
//     checked: true,
//   },
//   {
//     product: {
//       "_id": "61d12f0c555401c8610fb8d1",
//       "name": "Ambrosia ambrosioides (Cav.) Payne",
//       "price": 1,
//       "madein": "Indonesia",
//       "quantity": 1547072377,
//       "category": "61d11c4b86511f0016f490ed",
//       "images": [
//         "https://2.pik.vn/20220d042675-dd62-42f8-8c56-e2e2fd51a531.jpg",
//         "https://2.pik.vn/202223f29113-5f90-43a2-924f-7cdab16878e3.jpg"
//       ],
//       "sold": 98,
//       "size": "XS",
//       "createdAt": "2021-05-20T00:40:04.000Z",
//       "updatedAt": "2021-02-15T15:54:50.000Z"
//     },
//     quantity: 5,
//     price: 3,
//     checked: false,
//   },
//   {
//     product: {
//       "_id": "61d12f0c555401c8610fb8d1",
//       "name": "Ambrosia ambrosioides (Cav.) Payne",
//       "price": 1,
//       "madein": "Indonesia",
//       "quantity": 1547072377,
//       "category": "61d11c4b86511f0016f490ed",
//       "images": [
//         "https://2.pik.vn/20220d042675-dd62-42f8-8c56-e2e2fd51a531.jpg",
//         "https://2.pik.vn/202223f29113-5f90-43a2-924f-7cdab16878e3.jpg"
//       ],
//       "sold": 98,
//       "size": "XS",
//       "createdAt": "2021-05-20T00:40:04.000Z",
//       "updatedAt": "2021-02-15T15:54:50.000Z"
//     },
//     quantity: 5,
//     price: 3,
//     checked: false,
//   },
// ]