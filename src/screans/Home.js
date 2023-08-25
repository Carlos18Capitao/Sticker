import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import {
    useFonts,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import { TouchableOpacity } from "react-native";
const Home = (props) => {
    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
    })
    return (
        <View style={styles.container}>
            <Image source={require('../img/s55-black.jpeg')} style={styles.img} />
            <Text style={styles.title}>ALFAIATE PERFEITO</Text>
            <Text style={styles.detail}>Que todas as coisas ocorram com decência e ordem.
            </Text>
            <TouchableOpacity style={styles.btn} onPress={()=>props.navigation.navigate("Portugal")}>
                <Image source={require('../img/portugal-2.png')} style={styles.icon_img} />
                <Text style={styles.text}>Portugal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={()=>props.navigation.navigate("Detail")}>
                <Image source={require('../img/angola-2.png')} style={styles.icon_img} />
                <Text style={styles.text}>Angola</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000"
    },
    img: {
        height: "50%",
        width: "100%",
        resizeMode: "contain",
    },
    icon_img: {
        width:25,
        height:25,
        marginRight: 10,
        justifyContent: "flex-start"
    },
    title: {
        color: "#fff",
        //fontFamily: "MontSerrat_700Bold",
        fontSize: 30,
        marginTop: 20,
        textDecorationLine: "underline",
    },
    detail: {
        color: "#fff",
        //fontFamily: "Montserrat_400Regular",
        fontSize: 18,
        textAlign: "center",
        paddingHorizontal: 20,
        lineHeight: 30,
        marginTop: 30,
    },
    btn: {
        flexDirection: 'row',
        alignItems: "center",
        marginTop: 20,
        backgroundColor: "#e2443b",
        paddingHorizontal: 130,
        paddingVertical: 10,
        borderRadius: 30
    },
    text: {
        //fontFamily: "Montserrat_600SemiBold",
        fontSize: 30,
        color: "#fff",
    }
});