import React, {useState} from "react";
import { View, Button, Text, Pressable } from "react-native";
import * as Clipboard from 'expo-clipboard';

import { styles } from "./SecButtonStyles";

import { InputPassword } from "../InputPassword/InputPassword";
import { InputLenghtPassword } from "../InputLengthPassword/InputLengthPassword";

import { passwordService } from "../../services/passswordService";



export function SecButton(){
    const [ pass, setPass ] = useState('');
    const [ length, setLength ] = useState('15');

    function handleGenPassword(){
        const numericSize = parseInt(length) || 8;
        let token = passwordService(numericSize);
        setPass(token)
    }

    function handleCopy(){
        Clipboard.setStringAsync(pass);
    }

    return(
        <>
            {/*<Button
                title="GERAR SENHA 🙊"
                onPress={Pressionar}
            />*/}
            
            <InputLenghtPassword length={length} setLength={setLength}/>
            <InputPassword pass={pass}/>

            <Pressable onPress={handleGenPassword} style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
                <Text style={styles.texto}>GERAR SENHA 🙊</Text>
            </Pressable>

            <Pressable onPress={handleGenPassword} style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
                <Text style={styles.texto} onPress={handleCopy}>COPIAR 🗒️</Text>
            </Pressable>
        </>
    )
}   