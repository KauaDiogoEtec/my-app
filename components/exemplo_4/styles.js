import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#D1C4E9',
        color: '#673AB7',
        borderColor: '#673AB7',
        borderRadius: 20,
        margin: '20px',
        width: '100%',
        alignItems: 'center',
    },
    titulo:{
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 20,
        color: 'inherit',
        userSelect: 'none',
    },
    input:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#673AB7',
        userSelect: 'none',
        borderColor: 'inherit',
        borderWidth: '2px',
        borderRadius: '10px',
        padding: '6px',
    },
    texto:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'inherit',
        userSelect: 'none',
    },
});

export default styles;