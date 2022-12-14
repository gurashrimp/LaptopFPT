import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from 'react'
import { UserContext } from '../../user/UserContext';
import { GoogleSignin } from 'react-native-google-signin'

const Login = (props) => {
  const { navigation } = props;
  const { onLogin } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 const setupSocial=() {
  try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true })
      await GoogleSignin.configure({
          //webClientId: Config.WEB_CLIENT_ID,
          //iosClientId: Config.IOS_CLIENT_ID,
          offlineAccess: true,
      })

      const user = await GoogleSignin.currentUserAsync()
      console.log('Saved google user', user)
      resetAuthSocial()
  } catch (err) {
      console.log('Something wrong with google play service!', { err })
  }
}
  const login = async () => {
      if (!username || !password || username.trim().length == 0 || password.trim().length == 0) {
          ToastAndroid.show('Please fill all field', ToastAndroid.SHORT);
      }
      const res = await onLogin(username, password);
      if (res == false) {
          ToastAndroid.show('Login failed', ToastAndroid.SHORT);
      }
  }
  return (
    <View style={styles.container}>
      <View style={styles.logoView}>
        <Image
          source={require("../../../assets/images/logoApp.jpg")}
          style={styles.image}></Image>
      </View>
      <View style={styles.inputTextView}>
        <View>
          <TextInput
            style={styles.inputText}
            placeholderTextColor={"white"}
            placeholder="Name"
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

        <TouchableOpacity onPress={login} style={styles.pressable}> 
          <Text style={styles.pressableText}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.forgotView}>
        <Text style={styles.forgotText}>Forgot Password ?</Text>
      </View>

      <View style={styles.loginIconView}>
        <View style={styles.iconContainer}>
          <Image
            style={styles.iconLoginImage}
            resizeMode="cover"
            source={require("../../../assets/images/fb.png")}
          />
        </View>
        <View style={styles.iconContainer}>
          <Image
            style={styles.iconLoginImage}
            resizeMode="cover"
            source={require("../../../assets/images/tw.png")}
          />
        </View>
        <View style={styles.iconContainer}>
          <Image
            style={styles.iconLoginImage}
            resizeMode="cover"
            source={require("../../../assets/images/gg.png")}
          />
        </View>

      </View>

      <View style={styles.signupView}>
        <Text style={styles.textSignup}>Don't have an Account ? </Text>

        <Text onPress={() => navigation.navigate('Register')}
          style={styles.textSignup}>Register</Text>
      </View>
    </View>
  );
};

export default Login;

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
    paddingHorizontal: 16
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
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  textSignup: {
    color: "#ffffff",
  },

  container: {
    height: '100%',
    width: '100%',
    backgroundColor: "#FE5045"
  }
});
