import React, { useState } from "react"
import { StyleSheet, View, FlatList, Text } from "react-native"
import { v4 } from "uuid"
import Header from "./components/Header"
import Todo from "./components/Todo"
import AddTodo from "./components/AddTodo"

export default function App() {
  let [todos, setTodos] = useState([])

  const handlePressTodo = key => setTodos(todos.filter(t => t._id !== key))
  const addTask = task => {
    setTodos([{ task, _id: v4() }, ...todos])
  }
  return (
    <View style={styles.container}>
      <Header title="কাজের তালিকা" />
      <View style={styles.content}>
        <AddTodo addTask={addTask} />
        <View style={styles.list}>
          {todos.length ? (
            <FlatList
              keyExtractor={i => i._id}
              data={todos}
              renderItem={({ item }) => (
                <Todo handlePressTodo={handlePressTodo} item={item} />
              )}
            />
          ) : (
            <View>
              <Text style={styles.noTodo}>😱 কোন কাজ এখনো যুক্ত করা হয়নি</Text>
            </View>
          )}
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
  },
  noTodo: {
    textAlign: "center",
    marginTop: 55
  }
})
