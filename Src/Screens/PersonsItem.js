import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ImageBackground } from "react-native";
import { wt } from "../Components/Helper";


class PersonsItem extends React.Component {
    
    constructor(props){
        super(props)

    }

    render() {
        const Persons = [
            {
                id : 1,
                src : require("../assets/img/person1.jpg"),
                name : "Makan Aliabadian"
            },
            {
                id: 2,
                src : require("../assets/img/person2.jpg"),
                name : "Aref Azari"
            },
            {
                id: 3,
                src : require("../assets/img/person3.jpg"),
                name : "Mohammad Aliabadian"
            },
            {
                id: 4,
                src : require("../assets/img/person4.jpg"),
                name : "morteza safari"
            },
            {
                id: 5,
                src : require("../assets/img/person5.jpg"),
                name : "timsar danesh"
            },
            {
                id: 6,
                src : require("../assets/img/person6.jpg"),
                name : "Mohammad jalaleddin"
            },
            {
                id: 7,
                src : require("../assets/img/person7.jpg"),
                name : "omar khayam"
            },
            {
                id: 8,
                src : require("../assets/img/person8.jpg"),
                name : "hafez shirazi"
            },
            {
                id: 9,
                src : require("../assets/img/person9.jpg"),
                name : "saadiya nekonam"
            },
            {
                id: 10,
                src : require("../assets/img/person10.jpg"),
                name : "molana balkhi"
            }
        ]
        return(
            <View style={styles.contentstyle}>
                <ImageBackground source = {require("../assets/img/back.jpg")}>
                <FlatList
                    contentContainerStyle = {styles.container}
                    showsHorizontalScrollIndicator = {false}
                    data={Persons}
                    keyExtractor={(item,index) => "key-" + item.id + index }
                    renderItem={({item}) => {
                            return (
                                <TouchableOpacity onPress={() => this.props.navigation.navigate("Home",
                                {Persons})}>
                                    <View style = {styles.virtualContainer}>
                                        
                                            <Image source={item.src} style={styles.pic}/>
                                            <Text style = {styles.titlevirtual}>{item.name}</Text>    
                                                                        
                                    </View>
                                </TouchableOpacity>

                            )
                    }}
                />
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contentstyle : {
        flex : 1,
    },
    container : {
        margin : wt (5),
    },
    virtualContainer : {
        flexDirection : "row",
        alignItems : "center",
        marginBottom : wt(2),
        borderColor : "gray",
        borderWidth : wt(0.1),
        padding : wt(2),
        borderRadius : wt (1)
        
    },
    titlevirtual : {
        marginLeft : wt(10),
        fontSize : wt(5),
        fontWeight : "bold",
        color : "white"
    },
    pic : {
        width :wt(20),
        height : wt(20),
        borderRadius : wt (100),
        borderWidth : wt(1),
        borderColor : "red"
    }
});

export default PersonsItem;