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
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";

const Detail = () => {
  const [show, setShow] = useState(false);
  return (
    <SafeAreaView style={styles.Conatiner}>
      <ScrollView>
        <View style={styles.TitleView}>
          <View style={styles.Title}>
            <Image source={require("../../../assets/images/back.png")}></Image>
            <Text style={styles.TitleText}>Product Information</Text>
            <Image
              source={require("../../../assets/images/bacham.png")}
            ></Image>
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
            <Text style={styles.TextNameProduct}>
              DELL XPS 13 9310-70234076
            </Text>
            <Image
              style={styles.Star}
              source={require("../../../assets/images/Star.png")}
            ></Image>
          </View>
          <View style={styles.PriceQuantityView}>
            <Text style={styles.TextPriceProduct}>19.888.888đ</Text>
            <Text style={styles.TextQuantityProduct}>Số lượng: 20</Text>
          </View>
          <View style={styles.line}></View>
          <View>
            <Pressable
              onPress={() => setShow(!show)}
              style={styles.DescriptionProductView}
            >
              <Text style={styles.TextDescriptionProduct}>
                Thông tin sản phẩm
              </Text>
              <Image
                style={styles.ImageNext}
                source={require("../../../assets/images/next.png")}
              ></Image>
            </Pressable>
            {show ? (
              <View style={styles.Description}>
                <Text>Máy Dell siêu bền</Text>
                <Text>rất chất lượng</Text>
              </View>
            ) : null}
          </View>
          <View style={styles.line}></View>
          <View>
            <View style={styles.DescriptionProductView}>
              <Text style={styles.TextDescriptionProduct}>
                Mô tả chi tiết
              </Text>
              <Image
                style={styles.ImageNext}
                source={require("../../../assets/images/next.png")}
              ></Image>
            </View>
          </View>
          <View style={styles.line}></View>
          <TouchableOpacity style={styles.ButtonAddCart}>
            <Text style={{fontSize: 18 , fontWeight: "bold"}}>Thêm vào giỏ hàng</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  ButtonAddCart: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    width: "100%",
    height: 50,
    backgroundColor: "#FE5045",
    marginVertical: 16,
  },
  Description: {
    width: "100%",
  },
  ImageNext: {
    right: 0,
    position: "absolute",
  },
  TextDescriptionProduct: {
    fontSize: 16,
    fontWeight: "700",
  },
  DescriptionProductView: {
    alignItems: "center",
    flexDirection: "row",
  },
  line: {
    marginVertical: 16,
    width: "100%",
    height: 0.4,
    borderWidth: 0.4,
    borderColor: "#9B9B9B",
  },
  TextQuantityProduct: {
    right: 0,
    position: "absolute",
  },
  TextPriceProduct: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FE5045",
  },
  PriceQuantityView: {
    marginVertical: 4,
    flexDirection: "row",
  },
  Star: {
    width: 20,
    height: 20,
    right: 0,
    position: "absolute",
  },
  TextNameProduct: {
    fontSize: 20,
    fontWeight: "600",
  },
  TextNameProductView: {
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
