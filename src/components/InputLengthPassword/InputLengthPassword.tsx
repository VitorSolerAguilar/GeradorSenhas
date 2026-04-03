import React from "react";
import { TextInput, View, Text } from "react-native";
import { styles } from "./InputLengthPasswordStyles";

interface InputLengthProps {
    length: string;
    setLength: (value: string) => void;
}

export function InputLenghtPassword({ length, setLength }: InputLengthProps) {
    return (
            <TextInput style={styles.input} placeholder="Lenght Password" placeholderTextColor={'#cecece'} value={length} onChangeText={setLength}/>
    );
}