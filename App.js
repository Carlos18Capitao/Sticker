import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeStackNavigator from './src/navigator/Navigation';
//import * as Font from 'expo-font'
import { AppLoading } from 'expo'

export default function App() {
  return (
    <NavigationContainer><HomeStackNavigator /></NavigationContainer>
  );
}