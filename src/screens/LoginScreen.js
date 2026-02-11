import { View, Text, TextInput, TouchableOpacity, Image, Alert, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../api/api';
import { styles } from '../styles/globalStyles';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setSenha] = useState('');
  const [loading, setLoading] = useState(false);

  async function login() {
    try {
      setLoading(true);
      const response = await api.post('/api/login', { email, password });

      await AsyncStorage.setItem('username', response.data.user.nome);
      navigation.replace('Videos');

    } catch (error) {
      Alert.alert('Erro', 'Email ou senha errados');
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>

    <View style={styles.card}>

      <Image
        source={require('../assets/Logo_eureka.png')}
        style={{
          width: 240,
          height: 240,
          alignSelf: 'center',
          marginBottom: 20,
          resizeMode: 'contain',
        }}
      />

      <Text style={styles.title}>Faça o seu login</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#9CA3AF"
      />

      <TextInput
        placeholder="Senha"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setSenha}
        placeholderTextColor="#9CA3AF"
      />

      <TouchableOpacity style={styles.button} onPress={login} disabled={loading}>
        {loading ? (<ActivityIndicator color="#fff" />) : (<Text style={styles.buttonText}>Entrar</Text>)}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 16,
            fontWeight: '500',
          }}
        >
          Ainda não tem conta?{' '}
          <Text style={styles.link}>Registre-se aqui</Text>
        </Text>
      </TouchableOpacity>
    </View>
  </View>
  );
}
