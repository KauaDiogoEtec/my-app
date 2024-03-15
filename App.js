import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Atividade1 from './components/atividade_1';

export default function App() {
  return (
    <View style={styles.container}>

      <Atividade1 />

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
