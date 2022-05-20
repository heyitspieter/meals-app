import { View, Text, StyleSheet } from "react-native";

function Subtitle({ text }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{text}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 18,
    color: "#e2b497",
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    padding: 6,
    marginTop: 24,
    marginBottom: 6,
    marginHorizontal: 12,
  },
});
