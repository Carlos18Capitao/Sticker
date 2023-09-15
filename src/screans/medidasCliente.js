import React from "react";
import Feather from "@expo/vector-icons/Feather";
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from "react-native";
import {
    useFonts,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import { TouchableOpacity } from "react-native";
const MedidasCliente = (props) => {
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
            <ScrollView>
                <View style={styles.card}>
                    <Text style={styles.title}>COLETE</Text>
                    <View style={styles.inputFild}>
                        <TextInput placeholder="Tamanho" style={{ paddingHorizontal: 5, color: "#000", fontSize: 18, width: 350 }} />
                    </View>
                    <View style={styles.inputFild}>
                        <TextInput placeholder="Decote" style={{ paddingHorizontal: 5, color: "#000", fontSize: 18, width: 350 }} />
                    </View>
                    <View style={styles.inputFild}>
                        <TextInput placeholder="Cumprimento Total a Frente" style={{ paddingHorizontal: 5, color: "#000", fontSize: 18, width: 350 }} />
                    </View>
                    <View style={styles.inputFild}>
                        <TextInput placeholder="Cumprimento Costas" style={{ paddingHorizontal: 5, color: "#000", fontSize: 18, width: 350 }} />
                    </View>
                </View>
                <View style={styles.card}>
                    <Text style={styles.title}>CASACO</Text>
                    <View style={styles.inputFild}>
                        <TextInput placeholder="Tamanho" style={{ paddingHorizontal: 5, color: "#000", fontSize: 18, width: 350 }} />
                    </View>
                    <View style={styles.inputFild}>
                        <TextInput placeholder="Distância do Ombro ao 1º Botão" style={{ paddingHorizontal: 5, color: "#000", fontSize: 18, width: 350 }} />
                    </View>
                    <View style={styles.inputFild}>
                        <TextInput placeholder="Cumprimento de Manga" style={{ paddingHorizontal: 5, color: "#000", fontSize: 18, width: 350 }} />
                    </View>
                    <View style={styles.inputFild}>
                        <TextInput placeholder="Largura do Braço" style={{ paddingHorizontal: 5, color: "#000", fontSize: 18, width: 350 }} />
                    </View>
                    <View style={styles.inputFild}>
                        <TextInput placeholder="Boca da Manga" style={{ paddingHorizontal: 5, color: "#000", fontSize: 18, width: 350 }} />
                    </View>
                    <View style={styles.inputFild}>
                        <TextInput placeholder="Ombro" style={{ paddingHorizontal: 5, color: "#000", fontSize: 18, width: 350 }} />
                    </View>
                    <View style={styles.inputFild}>
                        <TextInput placeholder="Meia-Costa" style={{ paddingHorizontal: 5, color: "#000", fontSize: 18, width: 350 }} />
                    </View>
                    <View style={styles.inputFild}>
                        <TextInput placeholder="Cumprimento das Costas (inclui gola)" style={{ paddingHorizontal: 5, color: "#000", fontSize: 18, width: 350 }} />
                    </View>
                </View>
                <View style={styles.card}>
                    <Text style={styles.title}>CALÇA</Text>
                    <View style={styles.inputFild}>
                        <TextInput placeholder="Tamanho" style={{ paddingHorizontal: 5, color: "#000", fontSize: 18, width: 350 }} />
                    </View>
                    <View style={styles.inputFild}>
                        <TextInput placeholder="Gancho" style={{ paddingHorizontal: 5, color: "#000", fontSize: 18, width: 350 }} />
                    </View>
                    <View style={styles.inputFild}>
                        <TextInput placeholder="Cintura" style={{ paddingHorizontal: 5, color: "#000", fontSize: 18, width: 350 }} />
                    </View>
                    <View style={styles.inputFild}>
                        <TextInput placeholder="Anca" style={{ paddingHorizontal: 5, color: "#000", fontSize: 18, width: 350 }} />
                    </View>
                    <View style={styles.inputFild}>
                        <TextInput placeholder="Coxa" style={{ paddingHorizontal: 5, color: "#000", fontSize: 18, width: 350 }} />
                    </View>
                    <View style={styles.inputFild}>
                        <TextInput placeholder="Joelho" style={{ paddingHorizontal: 5, color: "#000", fontSize: 18, width: 350 }} />
                    </View>
                    <View style={styles.inputFild}>
                        <TextInput placeholder="Comprimento Total (sem cós)" style={{ paddingHorizontal: 5, color: "#000", fontSize: 18, width: 350 }} />
                    </View>
                    <View style={styles.inputFild}>
                        <TextInput placeholder="Bainha" style={{ paddingHorizontal: 5, color: "#000", fontSize: 18, width: 350 }} />
                    </View>
                </View>

                <TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate("Detail")}>
                    <Image source={require('../img/check.png')} style={styles.icon_img} />
                    <Text style={styles.text}>Salvar</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

export default MedidasCliente;

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
        marginTop: 10,
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