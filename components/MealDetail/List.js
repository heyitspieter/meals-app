import { View, Text, StyleSheet } from "react-native";

function List({ items }) {
  return items.map((item, i) => (
    <View key={i} style={styles.container}>
      <Text style={styles.text} key={i}>
        {item}
      </Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  text: { color: "#351401", textAlign: "center" },
  container: {
    borderRadius: 6,
    marginVertical: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: "#e2b497",
  },
});
