import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";

const List = (props) => {
  const { navigation } = props;
  const renderItem = ({ item }) => {
    const { _id, image, name, price } = item;
    return (
      <Pressable style={styles.containerView} onPress={() => navigation.navigate('Detail')}>
        <View style={styles.ContainerItem}>
          <View style={styles.Product}>
            <View style={styles.ContainerImageItem}>
              <Image
                style={styles.imageItem}
                resizeMode="cover"
                source={image}
              ></Image>
            </View>
            <View style={styles.textItem}>
              <Text style={styles.descriptionProduct}>{name}</Text>
              <Text style={styles.priceproduct}>{price} $</Text>
            </View>
          </View>
        </View>
      </Pressable>
    );
  };
  return (
    <View style={styles.Conatiner}>
      <View style={styles.TitleView}>
        <View style={styles.Title}>
          <Image source={require("../../../assets/images/back.png")}></Image>
          <Text style={styles.TitleText}>Products</Text>
          <Image source={require("../../../assets/images/bacham.png")}></Image>
        </View>
        <View style={styles.Search}>
          <Image
            style={styles.ImageSeach}
            source={require("../../../assets/images/search.png")}
          ></Image>
          <TextInput
            style={styles.TextSearch}
            placeholderTextColor={"#9098B1"}
            placeholder="Search for products..."
          ></TextInput>
        </View>
      </View>
      <FlatList
        style={styles.flatList}
        data={data}
        numColumns={2}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => Math.random()}
      ></FlatList>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  priceproduct: {
    color: "red",
    fontWeight: "600",
  },
  descriptionProduct: {
    fontSize: 14,
    fontWeight: "400",
  },
  flatList: {
    paddingHorizontal: 16,
  },
  textItem: {
    paddingHorizontal: 8,
    width: "100%",
    marginBottom: 8,
  },
  imageItem: {
    width: "100%",
    height: "80%",
    borderRadius: 16,
  },
  ContainerImageItem: {
    marginTop: 8,
    width: "100%",
    height: 160,
    alignItems: "center",
  },
  Product: {
    width: "100%",
    marginTop: 8,
    backgroundColor: "white",
    borderRadius: 16,
  },
  ContainerItem: {
    width: "96%",
  },
  containerView: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  TextSearch: {
    width: "100%",
    paddingHorizontal: 16,
    fontSize: 16,
    fontWeight: "400",
  },
  Search: {
    flexDirection: "row",
    paddingHorizontal: 16,
    backgroundColor: "white",
    width: "100%",
    height: 56,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 16,
  },
  TitleText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
  Title: {
    marginTop: 60,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  TitleView: {
    height: 180,
    backgroundColor: "#FE5045",
    width: "100%",
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    paddingHorizontal: 16,
  },
  Conatiner: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});


var data = [
  {
    _id: "1",
    image: require("../../../assets/images/maydell.jpg"),
    name: "Nike Air Zoom Pegasus 36 Miami",
    price: 534.33,
  },
  {
    _id: "2",
    image: require("../../../assets/images/maydell.jpg"),
    name: "Nike Air Zoom Pegasus 36 Miami",
    price: 534.33,
  },
  {
    _id: "3",
    image: require("../../../assets/images/maydell.jpg"),
    name: "Nike Air Zoom Pegasus 36 Miami",
    price: 534.33,
  },
  {
    _id: "4",
    image: require("../../../assets/images/maydell.jpg"),
    name: "Nike Air Zoom Pegasus 36 Miami",
    price: 534.33,
  },
  {
    _id: "5",
    image: require("../../../assets/images/maydell.jpg"),
    name: "Nike Air Zoom Pegasus 36 Miami",
    price: 534.33,
  },
];