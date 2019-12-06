import React from "react"
import { View, Text, StyleSheet } from "react-native"
const Header = ({ title = "Header Title" }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: "coral",
    paddingTop: 38
  },
  title: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase"
  }
})

export default Header
