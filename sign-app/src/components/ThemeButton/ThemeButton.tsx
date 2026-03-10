import { View, TouchableOpacity } from "react-native";
import { SunMoon } from "lucide-react-native";
import { styles } from "./style";

type ThemeButtonProps = {
  toggleTheme: () => void;
}
export default function ThemeButton({toggleTheme}: ThemeButtonProps) {
  
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={toggleTheme}
      >
        <SunMoon color="#FFF" size={32} />
      </TouchableOpacity>
    </View>
  );
}

