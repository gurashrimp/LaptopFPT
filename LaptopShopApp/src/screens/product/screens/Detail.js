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

const Detail = () => {
  return (
    <View style={styles.Conatiner}>
      <View style={styles.TitleView}>
        <View style={styles.Title}>
          <Image source={require("../../../assets/images/back.png")}></Image>
          <Text style={styles.TitleText}>Product Information</Text>
          <Image source={require("../../../assets/images/bacham.png")}></Image>
        </View>
      </View>
      <View style={styles.ConatinerImageProduct}>
        <View style={styles.ImageProduct}>
          <Image
            style={styles.Image}
            source={require("../../../assets/images/maydell.jpg")}
          ></Image>
        </View>
      </View>
      <View style={styles.ContainerInformations}>
        <View style={styles.TextNameProductView}>
          <Text style={styles.TextNameProduct}>DELL XPS 13 9310-70234076</Text>
          <Image style={styles.Star} source={require("../../../assets/images/Star.png")}></Image>
        </View>
        <View>
          <Text style={styles.TextPriceProduct}>19.888.888đ</Text>
        </View>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  TextPriceProduct: {
    fontSize: 20,
    fontWeight: "600",
    color: "#FE5045",
    right: 0,
    position: "absolute",
  },
  Star:{
    width: 20,
    height: 20,
    right: 0,
    position: "absolute",
  },
  TextNameProduct: {
    fontSize: 20,
    fontWeight: "600",
  },
  TextNameProductView:{
    flexDirection: "row",
  },
  ContainerInformations: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  Image: {
    width: "100%",
    height: "100%",
  },
  ImageProduct: {
    width: "70%",
    height: "70%",
  },
  ConatinerImageProduct: {
    width: "100%",
    height: 320,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
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
    height: 150,
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
