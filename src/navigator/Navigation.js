import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../screans/Home';
import Detail from '../screans/Detail';
import Portugal from '../screans/Portugal';

const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown: false
}

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle} >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="Portugal" component={Portugal} />
        </Stack.Navigator>
    );
}

export default HomeStackNavigator;
