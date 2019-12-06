import React, { useState } from "react"
import { View, TextInput, StyleSheet, Button, Alert } from "react-native"
const AddTodo = ({ addTask }) => {
  let [text, setText] = useState("")

  const handleButtonPress = () => {
    if (!text) {
      Alert.alert("আপনি মনে হয় কাজ লিখতে ভুলে গেছেন")
    } else {
      addTask(text)
      setText("")
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={text => setText(text)}
        placeholder="আপনার নতুন কাজ"
        value={text}
      />
      <Button
        titleStyle={{ color: "green" }}
        title="যুক্ত করুন"
        color="coral"
        onPress={handleButtonPress}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15
  },
  input: {
    borderColor: "#bbb",
    padding: 15,
    borderWidth: 1,
    borderStyle: "dotted",
    borderRadius: 5,
    marginTop: 15
  }
})

export default AddTodo
