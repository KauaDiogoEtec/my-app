import { View, Text, Pressable } from 'react-native';

import styles from './styles';

const Exemplo_3 = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}> Exemplo 3 </Text>
            <Pressable>
                <Text>Ex. Botão</Text>
            </Pressable>
        </View>
    );
}

export default Exemplo_3;