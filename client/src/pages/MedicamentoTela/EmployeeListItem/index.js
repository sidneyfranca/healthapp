import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import React, { useState } from "react";
import Axios from "axios";

export function EmployeeListItem(props) {
  const [favoritar, setfavoritar] = useState(props.favorited);

  const favoritado = () => {
    setfavoritar(!favoritar);
  };

  const submeterInformacao = async (item) => {
    console.log(item);
     try{
     await Axios.post("http://10.0.0.101:3006/Favorito", { nome: item.nome, imagem: item.imagem });
     console.log("Item favoritado com sucesso:", item);
   } catch (error) {
     console.error("Erro ao favoritar item:", error);
   }
   };

  return (
    <View style={styles.container}>
      <View style={styles.imagem}>
        <Image
          style={{
            height: 70,
            width: 60,
            overflow: "hidden",
            borderRadius: 25,
          }}
          source={{ uri: props.image }}
        ></Image>
      </View>
      <View style={styles.info}>
        <View style={styles.row}>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.role}>{props.role}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          favoritado();
          submeterInformacao({ nome: props.name, imagem: props.image });
        }}
      >
        {favoritar ? (
          <Ionicons name="star" size={30} color="yellow"></Ionicons>
        ) : (
          <Ionicons name="star-outline" size={30} color="yellow"></Ionicons>
        )}
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ff3e89",
    alignItems: "center",
  },
  info: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  imagem: {
    borderRadius: 50,
    backgroundColor: "white",
    height: 100,
    width: 100,
    marginRight: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 3,
    color: "#ff914d",
  },
  role: {
    fontSize: 13,
    color: "#ff914d",
  },
});
