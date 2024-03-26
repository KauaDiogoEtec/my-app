import { View, Text } from 'react-native';

import styles from './styles';
import Mensagem from './mensagem';

const Exemplo_2 = () => (
    <View style={styles.container}>
        <Text style={styles.title}>Exemplo 2 </Text>

        <Mensagem />
    </View>
);

export default Exemplo_2;