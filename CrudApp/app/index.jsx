import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

import { data } from "@/data/todos";

export default function Index() {
  const [todos, setTodos] = useState(data.sort((a, b) => b.id - a.id));
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.trim()) {
      const newID = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
      setTodos([{ id: newID, title: text, completed: false }, ...todos]);
      setText("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new todo"
          placeholderTextColor='gray'
          value={text}
          onChangeText={setText}
        />
        <Pressable onPress={addTodo} style={styles.addButton}>
          <Text style={styles.addButtonText}>Add</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    width: '100%',
    maxWidth: 1024,
    marginHorizontal: 'auto',
    pointerEvents: 'auto',
    // backgroundColor: 'green'
  },
  input: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    fontSize: 18,
    minWidth: 0,
    color: 'white',
  },
  addButton: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
  },
  addButtonText: {
    fontSize: 18,
    color: 'black',
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 4,
    padding: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    width: '100%',
    maxWidth: 1024,
    marginHorizontal: 'auto',
    pointerEvents: 'auto',
  },
  todoText: {
    flex: 1,
    fontSize: 18,
    color: 'white',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: 'gray',
  }
})
