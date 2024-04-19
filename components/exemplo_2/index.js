import { View, Text } from 'react-native';

import styles from './styles';
import Mensagem from './mensagem';

const Exemplo_2 = () => (
    <View style={styles.container}>
        <Text style={styles.title}>Exemplo 2 </Text>

        <Mensagem nome="Kauã" sobrenome="Diogo" />
        <Mensagem nome="Vinicius" idade={25} />
        <Mensagem sobrenome="Gabriel" />
    </View>
);

export default Exemplo_2;