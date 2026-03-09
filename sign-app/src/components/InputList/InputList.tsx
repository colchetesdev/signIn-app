import {TextInput, View} from "react-native";
import { useState } from "react";
import { styles } from "./style";

export default function InputList(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    return(
        <View>
            <TextInput style={styles.input} onChangeText={setName} value={name}  placeholder="Nome"/>
            <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder="Email"/>
            <TextInput style={styles.input} onChangeText={setPhone} value={phone} placeholder="Telefone"/>
            <TextInput style={styles.input} onChangeText={setPassword} value={password} placeholder="Senha"/>
        </View>

    )
}