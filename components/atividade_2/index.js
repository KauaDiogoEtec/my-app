import { View, Text } from "react-native";
import styles from "./styles";
import Item from "./item";

let lista = [
    [false, "Aprender C"],
    [true,  "Aprender Javascript"],
    [false, "Aprender C#"],
    [true,  "Aprender GML"],
    [true,  "Aprender Haxeflixel"],
];

const Atividade_2 = () => {
    let listaItems = [];

    lista.forEach((season, index) => {
        listaItems.push(<Item name={season[1]} finished={season[0]}/>);
    });

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}> Lista de Tarefas </Text>
            
            {listaItems}
            
        </View>
    );
}

export default Atividade_2;