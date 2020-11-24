import * as React from 'react'
import {View,Text,Button,TouchableOpacity,StyleSheet} from 'react-native'

export default class In extends React.Component{
    render(){
        return(
           <TouchableOpacity
           style={styles.TextStyle}>
               <Text>WELCOME TO INSTAGRAM</Text>
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