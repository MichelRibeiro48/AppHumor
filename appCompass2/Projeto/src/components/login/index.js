import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {api} from '../../service/api';
import styles from './styles';
export default function Login({navigation}) {
  const Tentativa = async () => {
    try {
      const response = await api.post('/oauth/token', {
        email: emailText,
        password: passwordText,
      });
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
      <TouchableOpacity
        style={styles.buttonEnter}
        onPress={() => navigation.navigate('Registro')}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
