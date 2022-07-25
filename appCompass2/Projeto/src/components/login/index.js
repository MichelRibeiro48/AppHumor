import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import axios from 'axios';
export default function Login({navigation}) {
  const Tentativa = async () => {
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
      navigation.navigate('Registro');
      console.log(response.data);
    } catch (err) {
      alert(err.message);
    }
  };
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
      <TouchableOpacity style={styles.buttonEnter} onPress={() => Tentativa()}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
