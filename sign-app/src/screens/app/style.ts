import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: "flex-start"
  },
  image:{
    width: 200,
    height: 200,
    marginVertical: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 800,
    marginBottom: 16,
  },
  toggleContainer:{
    flex: 1,
    alignItems: "flex-end",
    height:10,
    width: 10
  },
  dark:{
    backgroundColor: "#1d1b22",
    color: "#E3E3E3",
  }, 
  modalOverlay: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 36,
    alignItems: "center",
  },
  modalText: {
    marginBottom: 16,
    textAlign: "center",
    fontSize: 16
  },
  modalButton: {
    backgroundColor: "#2196F3",
    borderRadius: 8,
    padding: 10,
  },
  modalButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  darkModal:{
      borderColor: "#454545",
      backgroundColor: "#393737",
      color: "#E3E3E3"
  }, 
});