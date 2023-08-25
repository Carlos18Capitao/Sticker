import React from "react";
import Feather from "@expo/vector-icons/Feather";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
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
            <View style={styles.header}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Feather name="chevron-left" color="#ffffff" size={25} />
                </TouchableOpacity>
            </View>
            <View style={styles.card}>
                <Text style={styles.title}>Cliente</Text>
                <View style={styles.inputFild}>
                    <TextInput placeholder="Nome" style={{ paddingHorizontal: 5, color: "#000", fontSize: 18, width: 350 }} />
                </View>
                <View style={styles.inputFild}>
                    <TextInput placeholder="Telefone" style={{ paddingHorizontal: 5, color: "#000", fontSize: 18, width: 350 }} />
                </View>
                <View style={styles.inputFild}>
                    <TextInput placeholder="NIF" style={{ paddingHorizontal: 5, color: "#000", fontSize: 18, width: 350 }} />
                </View>
                <View style={styles.inputFild}>
                    <TextInput placeholder="email" style={{ paddingHorizontal: 5, color: "#000", fontSize: 18, width: 350 }} />
                </View>
            </View>

            <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate("medidasCliente")}>
                <Image source={require('../img/check.png')} style={styles.icon_img} />
                <Text style={styles.text}>Salvar</Text>
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
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    card: {
        marginTop:10,
        padding: 10,
        backgroundColor: "#ccc",
        borderRadius: 10,
    },
    inputFild: {
        flexDirection: "row",
        paddingVertical: 6,
        borderWidth: 1,
        borderColor: "#fff",
        textAlign: "center",
        marginHorizontal: 10,
        marginTop: 5,
        borderRadius: 10
    },
    img: {
        height: "50%",
        width: "100%",
        resizeMode: "contain",
    },
    icon_img: {
        width: 25,
        height: 25,
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
        paddingHorizontal: 120,
        paddingVertical: 10,
        borderRadius: 30
    },
    text: {
        //fontFamily: "Montserrat_600SemiBold",
        fontSize: 20,
        color: "#fff",
    }
});