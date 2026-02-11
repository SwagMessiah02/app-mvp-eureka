import { View, Text, Image } from 'react-native';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../styles/userStatusStyles';

export default function UserStatus() {
  const [user, setUser] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('username').then(setUser);
  }, []);

  const shortName = user?.split(' ').slice(0, 2).join(' ');

  return (
    <View style={styles.container}>
      <Image source={require('../assets/tl.png')} style={styles.avatar} />

      <View style={styles.textContainer}>
        <Text style={styles.welcome}>Bem-vindo(a), {shortName}</Text>
        <Text style={styles.fullName}>{user}</Text>
      </View>
    </View>
  );
}
