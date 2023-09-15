import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../screans/Home';
import Detail from '../screans/Detail';
import Portugal from '../screans/Portugal';
import Novocliente from '../screans/Novocliente';
import ClientList from '../screans/ClientList';
import MedidasCliente from '../screans/MedidasCliente';

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
            <Stack.Screen name="novocliente" component={Novocliente} />
            <Stack.Screen name="medidasCliente" component={MedidasCliente} />
            <Stack.Screen name="ClientList" component={ClientList} />
        </Stack.Navigator>
    );
}

export default HomeStackNavigator;
