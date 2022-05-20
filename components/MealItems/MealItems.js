import MealItem from "./MealItem";
import { View, FlatList, StyleSheet } from "react-native";

function MealItems({ items }) {
  function renderMealItem(itemData) {
    return <MealItem {...itemData.item} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => renderMealItem(itemData)}
      />
    </View>
  );
}

export default MealItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
