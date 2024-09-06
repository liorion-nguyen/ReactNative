import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function CountDown() {
    const [number, setNumber] = useState(0); // Đặt tên abc, setAbc 

    const handleUp = () => {
        setNumber(number + 1);
    }

    const handleDown = () => {
        setNumber(number - 1);
    }
    return (
        <View>
            <Text>Count Down</Text>
            <Text>{number}</Text>
            <TouchableOpacity onPress={handleUp}>
                <Text>+</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDown}>
                <Text>-</Text>
            </TouchableOpacity>
        </View>
    );
}