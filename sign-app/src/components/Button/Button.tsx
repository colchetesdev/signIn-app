import { TouchableOpacity, View, Text} from "react-native";
import { styles } from "./style";

export default function Button(){
    return(
        <View>
            <TouchableOpacity style={styles.button} activeOpacity={0.5}>
                <Text style={styles.text}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}