import React, { useEffect, useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import axios from "axios";
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, SafeAreaView, ActivityIndicator } from "react-native";
//https://randomuser.me/api/?page=3&results=10
//dados aleatorios de cliente
const ClientList = (props) => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsloading] = useState(false);

    const getUsers = () => {
        //setIsloading(true);
        axios.get(`https://randomuser.me/api/?page=${currentPage}&results=20`)
            .then(res => {
                //setUsers(res.data.results);
                setUsers([...users, ...res.data.results]);
                //setIsloading(false);
            })
    }

    useEffect(() => {
        getUsers();
    }, [currentPage]);

    const renderItem = ({ item }) => {
        return (
            <View style={styles.itemWrapperStyle}>
                <Image style={styles.itemImageStyle} source={{ uri: item.picture.large }} />
                <View style={styles.contentWrapperStyle}>
                    <Text style={styles.txtNameStyle}> {`${item.name.title} ${item.name.first} ${item.name.last}`}  </Text>
                    <Text> {Math.floor(Math.random() * 10 + 1) } encomendas / divida {Math.floor(Math.random() * 1000 + 10) } €</Text>
                    <Text style={styles.txtEmailStyle}> {`${item.phone}`}</Text>
                </View>
            </View> 
        );
    }

    const loadMoreItem = () => {
        setCurrentPage(currentPage + 1)
    }

    const renderLoader = () => {
        return (
            <View style={styles.loaderStyle}>
                <ActivityIndicator size="large" color="#000" />
            </View>
        );
    }

    return (
        <SafeAreaView>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <Feather name="chevron-left" color="#000" size={25} />
                </TouchableOpacity>
            </View>
            <Text style={{ marginHorizontal: 20, color: "#ccc", fontWeight: "bold", textTransform: "uppercase" }}>Clientes</Text>
            <FlatList 
            data={users} 
            renderItem={renderItem} 
            keyExtractor={item => item.email} 
            ListFooterComponent={renderLoader}
            onEndReached={loadMoreItem}
            //onEndReachedThreshold={}
             />
        </SafeAreaView>
    );
}

export default ClientList;

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    itemWrapperStyle: {
        flexDirection: "row",
        marginBottom: 15,
        paddingHorizontal: 16,
        paddingVertical: 1,
        borderBlockColor: "#ddd",
    },
    itemImageStyle: {
        width: 50,
        height: 50,
        marginRight: 16,
        borderRadius: 50,
    },
    contentWrapperStyle: {
        justifyContent: "space-around",
    },
    txtNameStyle: {
        fontSize: 16,
    },
    txtEmailStyle: {
        color: "#777"
    },
    loaderStyle: {
        marginBottom: 0,
    }
});