import * as React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground, Alert } from "react-native";
import { wt } from "../Components/Helper";


class LoginScreen extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
         username : "" , password : ""
         ,
         users : [
            {
                username : 'makan',
                password : 'abadian'
            },
            {
                username: 'ali',
                password : "abadian"                
            },
            {
                username : "mohammad",
                password : "abadian"               
            },
            {
                username : "nobady",
                password : "abadian"               
            }
        ]
        };
    }

    handleLogin = () => {
        const { username, password, users } = this.state;
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
          this.props.navigation.navigate("Person");
        } else {
          alert('نام کاربری یا رمز عبور اشتباه است');
        }
      };
    render () {
        return(
            <View style= {styles.container}>
                <ImageBackground style={styles.imgasli} source={require('../assets/img/back.jpg')}>
                    <View style= {styles.logintitle}>
                        <Text style = {styles.titlelogone}>Please Enter Your </Text>
                        <Text style = {styles.titlelogtow}>UserName and Passworde</Text>
                    </View>
                
                    <View style = {styles.ghesmetwo}>
                        <View style = {styles.dovvom}>
                            <Text style = {styles.txttitle}>UserName : </Text>
                            <TextInput style = {styles.txtinput} placeholder="UserName ... " placeholderTextColor={"gray"} value={this.state.username} onChangeText={(text) => this.setState({username : text})}/>
                        </View>
                        <View style = {styles.dovvom}>
                            <Text style = {styles.txttitle}>Password : </Text>
                            <TextInput style = {styles.txtinput} placeholder="Password ... " placeholderTextColor={"gray"} value={this.state.password} onChangeText={(text) => this.setState({password : text})}/>
                        </View>
                    </View>
                    <TouchableOpacity style = {styles.btnlogin} color={"white"} onPress={this.handleLogin}>
                    <Text style={styles.txttitle}>LogIn</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    
    container : {
        flex : 1,
    },
    logintitle : {
        justifyContent : "center",
        alignItems : "center",
        marginTop : wt(10),

    },
    titlelogone : {
        color : "white",
        fontSize : wt(5),


    },
    titlelogtow : {
        color : "white",
        fontSize : wt(5),
        fontWeight : "bold",
        marginTop : wt(5),
    },
    imgasli : {
        height : wt(300),
    },
    ghesmetwo : {
        paddingTop : wt(15),

    },
    dovvom : {
    justifyContent : "space-around",
    alignItems : "center",
    flexDirection : "row",
    marginTop : wt(10)
    },
    txttitle : {
    fontSize : wt(5),
    fontWeight : "bold",
    color : "white"
    },
    txtinput : {
        borderWidth : wt(0.1),
        borderRadius : wt(2),
        paddingVertical : wt(4),
        paddingHorizontal : wt(20),
        borderColor : "white",
        color : "white"
    },
    btnlogin : {
        justifyContent : "center",
        alignItems : "center",
        marginTop : wt(15),
        borderColor : "white",
        borderWidth : wt(0.1),
        alignSelf : "center",
        paddingHorizontal : wt(10),
        paddingVertical : wt(5)
    }

});

export default LoginScreen;