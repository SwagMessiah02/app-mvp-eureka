import { View, Text, FlatList, TouchableOpacity, Linking, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import UserStatus from '../components/UserStatus';
import { COLORS } from '../styles/colors';
import headerStyles from '../styles/headerStyles';

export default function VideosScreen({ navigation }) {

  const videos = [
    { id: '1', titulo: 'React Native Básico', url: 'https://www.youtube.com/watch?v=0-S5a0eXPoc' },
    { id: '2', titulo: 'Expo para Iniciantes', url: 'https://www.youtube.com/watch?v=VozPNrt-LfE' },
    { id: '3', titulo: 'API REST com Node.js', url: 'https://www.youtube.com/watch?v=9AO2hZJsHrs' },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.background }}>
      
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        backgroundColor: COLORS.card,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB',
      }}>
        <Image
          source={require('../assets/Logo_eureka.png')}
          style={headerStyles.headerLogo}
        />

        <TouchableOpacity style={headerStyles.headerLoginButton} onPress={() => navigation.navigate('Login')}>
          <Text style={headerStyles.headerLoginText}>Login</Text>
        </TouchableOpacity>
      </View>

      <UserStatus />

      <View style={{ padding: 16 }}>
        <Text style={{
          fontSize: 20,
          fontWeight: '700',
          color: COLORS.text,
          marginBottom: 12,
        }}>
          Vídeo Aulas
        </Text>

        <FlatList
          data={videos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: COLORS.card,
                padding: 16,
                borderRadius: 14,
                marginBottom: 12,
              }}
              onPress={() => Linking.openURL(item.url)}>
              <Ionicons name="play-circle" size={40} color="red" />
              <Text style={{ marginLeft: 12, fontSize: 16, fontWeight: '500' }}>
                {item.titulo}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
