import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import InScreen from './screens/in';
import FbScreen from './screens/fb';


export default class App extends React.Component () {
 render(){
   return(
     <View>
    <AppContainer/>
     </View>
   )
 }
}
const TabNavigator = createBottomTabNavigator({
  Facebook:{screen:FbScreen},
  Instagram:{screen:InScreen}
})

const AppContainer=createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  
});
