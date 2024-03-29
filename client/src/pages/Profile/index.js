import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import Axios from "axios"

export default LoginView = () => {

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Image
          style={[styles.icon, styles.inputIcon]}
          source={{ uri: 'https://img.icons8.com/ios-filled/512/circled-envelope.png' }}
        />
        <TextInput funcao={submeterInformação}
          style={styles.inputs}
          placeholder="Email"
          keyboardType="email-address"
          underlineColorAndroid="transparent"
        />
      </View>

      <View style={styles.inputContainer}>
        <Image
          style={[styles.icon, styles.inputIcon]}
          source={{ uri: 'https://img.icons8.com/ios-glyphs/512/key.png' }}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Senha"
          secureTextEntry={true}
          underlineColorAndroid="transparent"
        />
      </View>

      <TouchableOpacity style={styles.restoreButtonContainer}>
        <Text >Esqueceu seu e-mail?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer}>
        <Text>Cadastre-se</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.buttonContainer, styles.fabookButton]}>
        <View style={styles.socialButtonContent}>
          <Image
            style={styles.icon}
            source={{ uri: 'https://img.icons8.com/color/70/000000/facebook.png' }}
          />
          <Text style={styles.loginText}>Continue com Facebook</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.buttonContainer, styles.googleButton]}>
        <View style={styles.socialButtonContent}>
          <Image
            style={styles.icon}
            source={{ uri: 'https://img.icons8.com/color/70/000000/youtube.png' }}
          />
          <Text style={styles.loginText}>Seguir no Youtube</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const submeterInformação = (texto) => {
  Axios.post("https://192.168.0.165:3001/item", { item: texto })
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B0E0E6',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  icon: {
    width: 30,
    height: 30,
  },
  inputIcon: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: '#3498db',
  },
  fabookButton: {
    backgroundColor: '#3b5998',
  },
  googleButton: {
    backgroundColor: '#ff0000',
  },
  loginText: {
    color: 'white',
  },
  restoreButtonContainer: {
    width: 250,
    marginBottom: 15,
    alignItems: 'center',
  },
  socialButtonContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    color: '#FFFFFF',
    marginRight: 5,
  },
})
