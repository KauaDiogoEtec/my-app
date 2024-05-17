import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

import styles from './styles';

const Atividade_3 = () => {
    const [numero, setNumero] = useState(0);

    function alterarNum(valor) {
        if(valor == 0)
            setNumero(0);
        else
            setNumero(numero + parseInt(valor));
    }

    const getButtonStyle = (pressed, limpar) => {
        let style = [styles.botao];
        if(limpar)
            style.push(styles.botaoLimpar);
        if(pressed)
            style.push(styles.botaoPress);
        return style;
    }
    const Botao = (props) => {
        return(<Pressable onPress={() => alterarNum(props.valor)}
            style={({pressed}) => getButtonStyle(pressed, (props.valor == 0))}
        >
            <Text style={styles.txtBotao}>
                {props.label}
            </Text>
        </Pressable>);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}> Atividade 3 </Text>

            <View style={styles.counter}>
                <Botao label="+1" valor="1"/>
                <Text style={styles.txtNumero}>{numero}</Text>
                <Botao label="-1" valor="-1"/>
            </View>
            <Botao label="Limpar" valor="0"/>
        </View>
    );
}

export default Atividade_3;