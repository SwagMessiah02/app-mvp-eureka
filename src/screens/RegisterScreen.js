import { View, Text, TextInput, TouchableOpacity, Image, Alert, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import { styles } from '../styles/globalStyles';
import { API_URL } from '../api/api';

export default function RegisterScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);

  async function register() {
    try {
      setLoading(true);

      const response = await fetch(`${API_URL}/api/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, senha }),
      });

      if (!response.ok) {
        Alert.alert('Erro', 'Erro ao cadastrar');
        return;
      }

      Alert.alert('Sucesso', 'Usuário cadastrado com sucesso');
      navigation.goBack();

    } catch (error) {
      Alert.alert('Erro', 'Falha na conexão com a API');
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require('../assets/Logo_eureka.png')}
          style={{ width: 240, height: 240, alignSelf: 'center', resizeMode: 'contain' }}
        />

        <Text style={styles.title}>Cadastre-se</Text>

        <TextInput
          placeholder="Nome"
          style={styles.input}
          value={nome}
          onChangeText={setNome}
        />

        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Senha"
          style={styles.input}
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity style={styles.button} onPress={register} disabled={loading}>
          {loading
            ? <ActivityIndicator color="#fff" />
            : <Text style={styles.buttonText}>Cadastrar</Text>
          }
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.link}>Já tenho conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
