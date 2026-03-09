import { Text, Image, View } from 'react-native';
import InputList from "@/components/InputList/InputList"
import Button from "@/components/Button/Button"
import {styles} from "./style"

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../../assets/avatar-img.png")}></Image>
      <Text style={styles.title}>Cadastro</Text>
      <InputList/>
      <Button/>
    </View>
  )
}


