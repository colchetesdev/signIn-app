import { Text, Image, View, Modal, Pressable } from 'react-native';
import { useState } from "react";

import InputList from "@/components/InputList/InputList"
import Button from "@/components/Button/Button"
import ThemeButton from "@/components/ThemeButton/ThemeButton"
import {styles} from "./style"

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  function toggleTheme() {
    setDarkTheme(!darkTheme);
  }

  function handleRegister() {
    setModalVisible(true);
  }

  return (
    <View style={[styles.container, darkTheme ? styles.dark : ""]}>
      <ThemeButton toggleTheme={toggleTheme} />
      <Image style={styles.image} source={require("^/avatar-img.png")} />
      <Text style={[styles.title, darkTheme ? styles.dark : ""]}>Cadastro</Text>
      <InputList darkTheme={darkTheme} />
      <Button handleRegister={handleRegister} />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalView, darkTheme? styles.darkModal : ""]}>
            <Text style={[styles.modalText, darkTheme ? styles.darkModal : ""]}>Registro foi um sucesso!</Text>
            <Pressable
              style={styles.modalButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  )
}