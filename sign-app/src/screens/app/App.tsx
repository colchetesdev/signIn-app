import { Text, Image, View } from 'react-native';
import { useState } from "react";

import InputList from "@/components/InputList/InputList"
import Button from "@/components/Button/Button"
import ThemeButton from "@/components/ThemeButton/ThemeButton"
import {styles} from "./style"

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  
  function toggleTheme() {
    setDarkTheme(!darkTheme);
  }
  
  return (
    <View style={[styles.container, darkTheme ? styles.dark : ""]}>
      <ThemeButton toggleTheme={toggleTheme}></ThemeButton>
      <Image style={styles.image} source={require("^/avatar-img.png")}></Image>
      <Text style={[styles.title, darkTheme ? styles.dark : ""]}>Cadastro</Text>
      <InputList darkTheme={darkTheme}/>
      <Button/>
    </View>
  )
}


