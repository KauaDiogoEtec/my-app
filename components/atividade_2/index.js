import { View, Text } from "react-native";
import styles from "./styles";
import Item from "./item";

let lista = [
    [false, "Aprender C"],
    [false, "Aprender C#"],
    [true,  "Aprender Javascript"],
    [true,  "Aprender GML"],
    [true,  "Aprender Haxeflixel"],
];

const Atividade_2 = () => {
    let listaItems = [];

    lista.forEach((data, index) => {
        listaItems.push(<Item name={data[1]} finished={data[0]}/>);
    });

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}> Lista de Tarefas </Text>
            
            {listaItems}
            <Item name={"Fazer Feijoada"} finished={false}/>

        </View>
    );
}

export default Atividade_2;