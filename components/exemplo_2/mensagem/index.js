import { View, Text } from 'react-native';

import styles from './styles';

const Mensagem = () => (
    <View style={styles.viewMessage}>

        <Text style={styles.message}>Bom dia </Text>
        <Text style={styles.message}>Bão? </Text>

    </View>
);

export default Mensagem;