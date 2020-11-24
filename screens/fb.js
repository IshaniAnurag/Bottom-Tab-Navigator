import * as React from 'react'
import {View,Text,Button,TouchableOpacity,StyleSheet} from 'react-native'

export default class fb extends React.Component{
    render(){
        return(
           <TouchableOpacity
           style={styles.TextStyle}>
               <Text>WELCOME TO FACEBOOK</Text>
           </TouchableOpacity> 
        )
    }
}
const styles=StyleSheet.create({
    TextStyle:{
        fontSize:20,
        fontColor:'blue',
        backgroundColor:'pink',
        border:solid,
        borderColor:'black'
    }
})