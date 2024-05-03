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
    },
    botao:{
        borderWidth: 3,
        borderRadius: 20,
        padding: 10,
        width: '80%',
        alignItems: 'center',
    }
});

export default styles;