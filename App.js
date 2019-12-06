import React, { useState } from "react"
import { StyleSheet, Text, View, FlatList } from "react-native"
import Header from "./components/Header"
import Todo from "./components/Todo"
import AddTodo from "./components/AddTodo"

export default function App() {
  let [todos, setTodos] = useState([
    { key: "1", task: "Task 1" },
    { key: "2", task: "Task 1" },
    { key: "3", task: "Task 3" },
    { key: "4", task: "Task 4" }
  ])

  const handlePressTodo = key => setTodos(todos.filter(t => t.key !== key))
  const addTask = task => {
    setTodos([{ task, key: Date.now() * Date.now() }, ...todos])
  }
  return (
    <View style={styles.container}>
      <Header title="কাজের তালিকা" />
      <View style={styles.content}>
        <AddTodo addTask={addTask} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <Todo handlePressTodo={handlePressTodo} item={item} />
            )}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  content: {
    // padding: 30
  },
  list: {
    padding: 15
  }
})
