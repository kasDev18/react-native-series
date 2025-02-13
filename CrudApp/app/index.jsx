import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

import { data } from "@/data/todos";

export default function Index() {
  const [todos, setTodos] = useState(data.sort((a, b) => b.id - a.id));
  const [text, setText] = useState("");

  const addTodo = () => {
    if(text.trim()){
      const newID = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
      setTodos([{ id: newID, title: text, completed: false }, ...todos]);
      setText("");
    }
  }

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        todo.id === id ? {...todo, completed: !todo.completed} : todo;
      })
    );
  };

  return (
    
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: "absolute",
//   },
// });
