import { Text, View, StyleSheet } from "react-native";

function MealDetails({ duration, complexity, affordability, textStyle }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.item, textStyle]}>{duration} mins</Text>
      <Text style={[styles.item, textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.item, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    fontSize: 12,
    marginHorizontal: 4,
  },
});
