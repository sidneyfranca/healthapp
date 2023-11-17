import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import { ToDoList } from "./ToDoList/Todolist";
import axios from "axios";

export function Favorito() {
  const [data1, setData1] = useState([
    
  ]);

  useEffect(  () => {
    axios.get("http://10.0.0.101:3001/Favoritos").then(data=>setData1(data.data))
  },[

  ])

  const DesfavoritarItem = async (id_favorito) => {
    await setData1((prevData1) => {
      axios.delete(`http://10.0.0.101:3001/item/${id_favorito}`
    )
      return prevData1.filter((texto) => texto.id_favorito != id_favorito);
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data1}
        renderItem={({ item }) => (
          <ToDoList
            name={item.nome}
            image={item.imagem}
            props={item}
            funcao={() => DesfavoritarItem(item.id_favorito)}
          />
        )}
        keyExtractor={(item) => item.id_favorito}
        style={styles.container}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e5e5",
  },
  conteudo: {
    padding: 40,
  },
});
