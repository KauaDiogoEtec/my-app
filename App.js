import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Exemplo_3 from './components/exemplo_3';

export default function App() {
  return (
    <View style={styles.container}>

      <Exemplo_3 />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#069',
    alignItems: 'center',
    justifyContent: 'center',
  },
});