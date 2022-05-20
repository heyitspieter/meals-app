import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Pressable } from "react-native";

function IconButton({ name, size, color, onPressed }) {
  return (
    <Pressable
      onPress={onPressed}
      style={({ pressed }) => (pressed ? styles.pressed : null)}
    >
      <Ionicons name={name} size={size} color={color} />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
