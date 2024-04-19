import { View, Text } from "react-native";
import styles from "./styles";

const Item = (prop) => {
    let check = "X";
    if(prop.finished)
        check = "✓";

    return(
        <View style={styles.container}>
            <Text style={styles.text}> {`${check} ${prop.name}`}</Text>
        </View>
    );
}

export default Item;