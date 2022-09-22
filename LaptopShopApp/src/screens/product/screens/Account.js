import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState,useContext,useEffect } from "react";
import { UserContext } from "../../user/UserContext";


const Account = (props) => {
  const { navigation } = props;
  const {user,onGetUser}=useContext(UserContext);
 
  // useEffect(() => {
  //   // Since the async method Parse.User.currentAsync is needed to
  //   // retrieve the current user data, you need to declare an async
  //   // function here and call it afterwards
  //   async function getCurrentUser() {
  //     // This condition ensures that username is updated only if needed
  //     if (name == '') {
  //       const currentUser = await Parse.User.currentAsync();
  //       if (currentUser !== null) {
  //         setName(currentUser.getUsername());
  //       }
  //     }
  //   }
  //   getCurrentUser();
  // }, [name]);
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await onGetUser.getData;
      // ...
    }
    fetchData();
  }, []);
  const { name, phone, email, password, address, image } = user;
  return (
    <View style={styles.Container}>
      <View style={styles.TitleView}>
        <View style={styles.Title}>
          <Image source={require("../../../assets/images/back.png")}></Image>
          <Text style={styles.TitleText}>Account details</Text>
          <Image source={require("../../../assets/images/bacham.png")}></Image>
        </View>
      </View>
      <View style={styles.AccountView}>
        <View style={styles.Account}>
          <View style={styles.InformationView}>
            <View style={styles.ImageView}>
              <Image
                style={styles.Imageavatar}
                source={require("../../../assets/images/avataruser.png")}
              ></Image>
            </View>
            <View style={styles.TextView}>
              <Text style={styles.TextName}>{user.name}</Text>
              <Text>{user.phone}</Text>
            </View>
          </View>
          <View style={styles.line}></View>
          <View style={styles.SupportView} >
            <Text onPress={() => navigation.navigate('EditProfile') } style={styles.SupportText} >Edit Profile</Text>
            <Image
            
              style={styles.SupportImage}
              source={require("../../../assets/images/next.png")}
            ></Image>
          </View>
          <View style={styles.line}></View>
          <View style={styles.SupportView}>
            <Text style={styles.SupportText}>Help</Text>
            <Image
              style={styles.SupportImage}
              source={require("../../../assets/images/next.png")}
            ></Image>
          </View>
          <View style={styles.line}></View>
          <View style={styles.SupportView}>
            <Text style={styles.SupportText}>About</Text>
            <Image
              style={styles.SupportImage}
              source={require("../../../assets/images/next.png")}
            ></Image>
          </View>
          <View style={styles.line}></View>
          <View style={styles.SupportView}>
            <Text style={styles.SupportText}>Language</Text>
            <Image
              style={styles.SupportImage}
              source={require("../../../assets/images/next.png")}
            ></Image>
          </View>
          <View style={styles.line}></View>
          <View style={styles.SupportView}>
            <Text style={styles.SupportText}>Security center</Text>
            <Image
              style={styles.SupportImage}
              source={require("../../../assets/images/next.png")}
            ></Image>
          </View>
          <View style={styles.line}></View>
          <View style={styles.SupportView}>
            <Text style={styles.SupportText}>Feedback</Text>
            <Image
              style={styles.SupportImage}
              source={require("../../../assets/images/next.png")}
            ></Image>
          </View>

          <View style={styles.line}></View>
          <Text style={styles.SupportTextLogout}>Logout</Text>
        </View>
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  SupportTextLogout: {
    color: "red",
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "500",
  },
  SupportImage: {
    right: 8,
    position: "absolute",
    marginTop: 4,
  },
  SupportView: {
    flexDirection: "row",
  },

  SupportText: {
    marginLeft: 8,
    color: "#595959",
    fontSize: 16,
    fontWeight: "500",
  },
  line: {
    width: "100%",
    height: 0.5,
    // borderWidth: 0.5,
    // backgroundColor: "#C0C0C0",
    marginVertical: 8,
  },
  TextName: {
    fontSize: 20,
    fontWeight: "500",
    marginVertical: 8,
  },
  TextView: {
    alignItems: "center",
    width: "60%",
  },
  ImageView: {
    width: 80,
    height: 80,
    marginTop: 30,
  },
  Imageavatar: {
    width: "100%",
    height: "100%",
  },
  InformationView: {
    alignItems: "center",
  },
  Account: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    paddingHorizontal: 16,
  },
  AccountView: {
    top: -60,
    paddingHorizontal: 16,
  },
  TitleText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
  Title: {
    marginTop: 70,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  TitleView: {
    height: 200,
    backgroundColor: "#FE5045",
    width: "100%",
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  Container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
