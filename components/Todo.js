import React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"

const Todo = ({ item, handlePressTodo }) => {
  return (
    <TouchableOpacity>
      <Text style={styles.item} onPress={() => handlePressTodo(item.key)}>
        {item.task}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderStyle: "dashed",
    borderWidth: 1,
    borderRadius: 10
  }
})

export default Todo
