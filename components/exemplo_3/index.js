import { View, Text, Pressable } from 'react-native';

import styles from './styles';

const Exemplo_3 = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}> Exemplo 3 </Text>
            <Pressable onPress={() => alert('oi ewerton :D')} style={styles.botao}>
                <Text>Ex. Botão</Text>
            </Pressable>
        </View>
    );
}

export default Exemplo_3;