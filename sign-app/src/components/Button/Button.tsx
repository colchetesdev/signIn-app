import { TouchableOpacity, View, Text} from "react-native";
import { styles } from "./style";
type ButtonProps ={
    handleRegister: ()=> void
}
export default function Button({handleRegister}: ButtonProps){
    return(
        <View>
            <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={handleRegister}>
                <Text style={styles.text}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}