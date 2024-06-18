
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { wt } from '../Components/Helper';

const CustomMessage = ({currentMessage,route }) => {
    return(
        <View>
            {currentMessage .image && (
        <Image
          source={{ uri : route.params.Person.src }}
          style={styles.mspic}
        />
      )}
            <Text style = {styles.mstxt}>{currentMessage .user.name}</Text>
            <Text style = {styles.mstxt}>{currentMessage .text}</Text>
        </View>
    )
  }
  const styles  = StyleSheet.create({
    mspic : {
        width : wt(10),
        height : wt(10),
        borderRadius : wt(100),
    },
    mstxt : {
        paddingHorizontal : wt(5),
        color: "black"
    }
})
export default CustomMessage;