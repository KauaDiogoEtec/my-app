import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#D1C4E9',
        borderRadius: 20,
        margin: '20px',
        width: '100%',
        alignItems: 'center',
    },
    titulo:{
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 20,
        color: '#673AB7',
        userSelect: 'none',
    },
    botao:{
        borderColor: '#673AB7',
        borderWidth: 3,
        borderRadius: 20,
        padding: 10,
        width: '80%',
        alignItems: 'center',
    },
    botaoPress:{
        backgroundColor: '#643AB7',
    }, 
    txtBotao: {
        fontSize: 25,
        color: '#673AB7',
        userSelect: 'none',
    },
    txtNumero:{
        fontSize: 35,
        color: '#673AB7',
        marginVertical: 10,
        userSelect: 'none',
        
    },
});

export default styles;