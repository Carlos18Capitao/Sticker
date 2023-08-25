import { StyleSheet, Button, Text, View, Pressable } from "react-native";

export default function BottomComponent({ label, type }) {
    if (type === "primary") {
        return (
            <View style={styles.buttonContainer} >
                <Pressable style={[styles.button, {backgroundColor: '#0339fc', }]} onPress={()=>{alert('botão primario')}} >
                    <Text>{label}</Text>
                </Pressable>
            </View>
        );
    }
    if (type === "secundary") {
        return (
            <View style={styles.buttonContainer}>
                <Pressable style={[styles.button, {backgroundColor: '#e3e3e3'}]}>
                    <Text>{label}</Text>
                </Pressable>
            </View>
        );
    }
    return (
        <View>
            <Pressable>
                <Text>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 60,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
      },
      button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      },
});