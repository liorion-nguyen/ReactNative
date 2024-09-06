import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Lesson6() {
    const [inp, setInp] = useState("");

    const handlechangeText = (text) => {
        setInp(text);
    } 
    const handleSubmit = () => {
        console.log(inp);
    }
    return (
        <View>
            <TextInput value={inp} placeholder="Enter your username" onChangeText={handlechangeText}/>
            <TouchableOpacity onPress={handleSubmit}>
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
    );
}