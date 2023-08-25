import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome"
import Feather from "@expo/vector-icons/Feather"
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import {
    useFonts,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';


const Ditail = (props) => {
	const [fontsLoaded] = useFonts({
		Montserrat_400Regular,
		Montserrat_600SemiBold,
		Montserrat_700Bold,
})
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity onPress={()=> props.navigation.goBack()}>
					<Feather name="chevron-left" color="#fff" size={25} />
				</TouchableOpacity>
				<Feather name="shopping-cart" color="#fff" size={25} />
			</View>
			<Image source={require('../img/2.jpg')} style={styles.img} />
			<View style={styles.cont3}>
				<Text style={styles.title}>Maxx Scooter</Text>
				<Text style={styles.subtitle}>Model S1</Text>
				<View style={styles.cont2}>
					<Text style={{ ...styles.title, flex: 2, marginTop: 0 }}>Colors</Text>
					<View style={styles.selected}>
						<View style={styles.c1} />
					</View>
					<View style={styles.c2} />
					<View style={styles.c3} />
				</View>

				<Text style={styles.text}>
					Lorem Ipsum has been the industry's standard dummy text
 took a galley
					of type and scrambled it to make a type
				</Text>
				<View style={styles.cont1}>
					<FontAwesome name="heart-o" color="#000" size={25} />
					<TouchableOpacity style={styles.btn} onPress={() => props.navigation.navigate("Home")}>
						<Text style={styles.btnText}>Next</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

export default Ditail;


const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#121212"
	},
	title: {
		//fontFamily: "MontSerrat_700Bold",
		fontSize: 25,
		marginTop: 30
	},
	subtitle: {
		fontSize: 20,
		color: "#474747",
		marginTop: 10,
		fontFamily: "Montserrat_400Regular",
	},
	text: {
		fontFamily: "Montserrat_400Regular",
		fontSize: 18,
		paddingRight: 80,
		lineHeight: 25,
	},
	btn: {
		backgroundColor: "#E24438",
		paddingHorizontal: 60,
		paddingVertical: 12,
		borderRadius: 30
	},
	btnText: {
		//fontFamily: "Montserrat_600SemiBold",
		fontSize: 20,
		color: "#fff",
	},
	cont1: {
		flexDirection: "row",
		alignItems: "center",
		width: "100%",
		justifyContent: "space-between",
		marginTop: 40,
	},
	c3: {
		height: 20,
		width: 20,
		borderRadius: 15,
		backgroundColor: "#529cc0"
	},
	c2: {
		height: 20,
		width: 20,
		borderRadius: 15,
		backgroundColor: "#529c47",
		marginHorizontal:10,
	},
	c1: {
		height: 20,
		width: 20,
		borderRadius: 15,
		backgroundColor: "#e2443b"
	},
	selected: {
		borderColor: "#e24438",
		height: 30,
		width: 30,
		borderRadius: 24,
		borderWidth: 2,
		alignItems: "center",
		justifyContent: "center",
	},
	cont2: {
		flexDirection: "row",
		alignItems: "center",
		width: "100%",
		marginVertical: 25,
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		width: "100%",
		paddingHorizontal: 20,
		paddingTop: 50,
	},
	img: {
		height: "45%",
		width: "90%",
		resizeMode: "contain"
	},
	cont3: {
		flex: 1,
		backgroundColor: "#fff",
		width: "100%",
		borderRadius: 50,
		paddingHorizontal: 20,
	},
});