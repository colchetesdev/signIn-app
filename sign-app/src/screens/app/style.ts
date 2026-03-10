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
  }
});