import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Login({navigation}) {
  const checkLogin = async () => {
    const user = await AsyncStorage.getItem('@user');
    if (user) {
      navigation.replace('Registro');
    }
  };
  const Login = async () => {
    try {
      const payload = {
        grant_type: 'password',
        email: emailText,
        password: passwordText,
        client_id: '3mGWGtxIEKyhq_HGG4cq6hsTOd_zn1SuTD3_cafjUPc',
        client_secret: '389JLi1Nd6DQ_soCI85C57ueTlMZ_JR7pRq6SJ0GaB0',
      };
      const response = await axios.post(
        'https://shrouded-shelf-01513.herokuapp.com/oauth/token',
        payload,
      );
      if (response.error) {
        alert(response.message);
        return false;
      }
      await AsyncStorage.setItem('@user', JSON.stringify(response.data));
      await AsyncStorage.setItem('@token', response.data.access_token);
      navigation.navigate('Registro');
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    checkLogin();
  });
  const [emailText, emailOnChangeText] = useState();
  const [passwordText, passwordOnChangeText] = useState();
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../../assets/login.png')}
      />
      <TextInput
        style={styles.input}
        onChangeText={emailOnChangeText}
        value={emailText}
        placeholder="email"
        placeholderTextColor="#a9a9a9"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        onChangeText={passwordOnChangeText}
        value={passwordText}
        placeholder="senha"
        placeholderTextColor="#a9a9a9"
        secureTextEntry={true}
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.buttonEnter} onPress={() => Login()}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
