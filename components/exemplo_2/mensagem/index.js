import { View, Text } from 'react-native';

import styles from './styles';

const Mensagem = ({nome = '', sobrenome = ''}) => {
    return(
        <View style={styles.viewMessage}>
            <Text style={styles.message}> {`Olá ${nome} ${sobrenome}`} </Text>

        </View>
    );
}

export default Mensagem;