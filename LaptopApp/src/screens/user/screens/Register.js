import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useContext, useState } from "react";
import { UserContext } from "../../user/UserContext";

const Register = (props) => {
  const { navigation } = props;
  const { onRegister } = useContext(UserContext);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const register = async () => {
    if (!username || !password || username.trim().length == 0 || password.trim().length == 0 ||
    !confirmPassword || confirmPassword.trim().length == 0 ) {
      ToastAndroid.show('Vui long nhap day du thong tin', ToastAndroid.CENTER);
      return;
    }
    if(password != confirmPassword){
        ToastAndroid.show('Xac nhan mat khau khong dung', ToastAndroid.CENTER);
    }
    const res = await onRegister(username, password , confirmPassword , name , phone , address);
    if (res == false) {
      ToastAndroid.show('Dang ky khong thanh cong', ToastAndroid.CENTER);
    }else{
        navigation.navigate('Login')
    }
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.logoView}>
          <Image
            source={require("../../../assets/images/logoApp.jpg")}
            style={styles.image}
          ></Image>
        </View>
        <View style={styles.inputTextView}>
          <View>
            <TextInput
              style={styles.inputText}
              placeholderTextColor={"white"}
              placeholder="UserName"
              value={username} onChangeText={setUsername}
            ></TextInput>
            <Image
              style={styles.imageIcon1}
              source={require("../../../assets/images/user.png")}
            ></Image>
          </View>

          <View>
            <TextInput
              style={styles.inputText}
              placeholderTextColor={"white"}
              placeholder="Password"
              value={password} onChangeText={setPassword}
            ></TextInput>
            <Image
              style={styles.imageIcon2}
              source={require("../../../assets/images/pass.png")}
            ></Image>
          </View>

          <View>
            <TextInput
              style={styles.inputText}
              placeholderTextColor={"white"}
              placeholder="Confirm Password"
              value={confirmPassword} onChangeText={setConfirmPassword}
            ></TextInput>
            <Image
              style={styles.imageIcon2}
              source={require("../../../assets/images/pass.png")}
            ></Image>
          </View>

          <View>
            <TextInput
              style={styles.inputText}
              placeholderTextColor={"white"}
              placeholder="Name"
              value={name} onChangeText={setName}
            ></TextInput>
            <Image
              style={styles.imageIcon1}
              source={require("../../../assets/images/user.png")}
            ></Image>
          </View>
          <View>
            <TextInput
              style={styles.inputText}
              placeholderTextColor={"white"}
              placeholder="Phone"
              value={phone} onChangeText={setPhone}
            ></TextInput>
            <Image
              style={styles.imageIcon1}
              source={require("../../../assets/images/user.png")}
            ></Image>
          </View>
          <View>
            <TextInput
              style={styles.inputText}
              placeholderTextColor={"white"}
              placeholder="Address"
              value={address} onChangeText={setAddress}
            ></TextInput>
            <Image
              style={styles.imageIcon1}
              source={require("../../../assets/images/user.png")}
            ></Image>
          </View>

          <TouchableOpacity onPress={register} style={styles.pressable}>
            <Text style={styles.pressableText}>Register</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signupView}>
          <Text style={styles.textSignup}>You have an Account ? </Text>

          <Text onPress={() => navigation.goBack()} style={styles.textSignup}>
            Login
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  iconContainer: {
    height: "100%",
    width: 35,
    height: 40,
    marginHorizontal: 20,
  },
  loginIconView: {
    flexDirection: "row",
    marginHorizontal: 100,
    paddingTop: 100,
  },
  logoView: {
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 97,
  },

  image: {
    width: 200,
    height: 260,
  },
  signInView: {
    width: "100%",
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  siginText: {
    fontSize: 14,
    color: "#9098B1",
  },

  inputTextView: {
    padding: 30,
  },

  inputText: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ffffff",
    marginTop: 20,
    paddingLeft: 60,
    borderRadius: 37,
    paddingHorizontal: 16,
  },

  pressable: {
    width: "100%",
    height: 50,
    marginTop: 20,
    borderRadius: 37,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },

  pressableText: {
    fontWeight: "bold",
    color: "#FE5045",
  },

  imageIcon1: {
    width: 20,
    height: 27,
    position: "absolute",
    top: 30,
    left: 20,
  },

  imageIcon2: {
    width: 20,
    height: 29,
    position: "absolute",
    top: 30,
    left: 22,
  },
  imageLogin: {
    position: "absolute",
    top: 20,
    left: 22,
  },

  forgotView: {
    width: "100%",
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  forgotText: {
    color: "#ffffff",
    fontWeight: "bold",
  },

  signupView: {
    width: "100%",
    height: 30,
    marginTop: 60,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  textSignup: {
    color: "#ffffff",
  },

  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#FE5045",
  },
});
