import {TextInput, View} from "react-native";
import { useState } from "react";
import { styles } from "./style";

type InputListProps = {
    darkTheme: boolean
}
export default function InputList({darkTheme}: InputListProps){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    return(
        <View>
            <TextInput style={[styles.input, darkTheme ? styles.dark : ""]} onChangeText={setName} value={name}  placeholder="Nome"/>
            <TextInput style={[styles.input, darkTheme ? styles.dark : ""]} onChangeText={setEmail} value={email} placeholder="Email"/>
            <TextInput style={[styles.input, darkTheme ? styles.dark : ""]} onChangeText={setPhone} value={phone} placeholder="Telefone"/>
            <TextInput style={[styles.input, darkTheme ? styles.dark : ""]} onChangeText={setPassword} value={password} placeholder="Senha"/>
        </View>

    )
}