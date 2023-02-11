import React, {useState, useEffect} from "react";
import { View, Text, SafeAreaView, TouchableOpacity, FlatList } from "react-native";
import database from "../../config/firebaseConfig";

export default function Task(){
    const [task, setTask] = useState([])

    useEffect(() => {
        database.collection("Tasks").onSnapshot((query)=>{
            const list = []
            query.forEach((doc)=>{
                list.push({...doc.data(), id: doc.id})
            });
            setTask(list)
        })
    }, [])

    return(
        <View>
            <Text>Page tasks</Text>
            <TouchableOpacity>+</TouchableOpacity>
        </View>
    )
}