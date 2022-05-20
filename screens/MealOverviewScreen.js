import { useLayoutEffect } from "react";
import MealItem from "../components/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy";
import { useRoute } from "@react-navigation/native";
import { View, StyleSheet, FlatList } from "react-native";

function MealOverviewScreen({ navigation }) {
  const route = useRoute();

  const catId = route.params.catId;

  const categoryMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const category = CATEGORIES.find((cateegory) => cateegory.id === catId);

    navigation.setOptions({
      title: category.title,
    });
  }, [catId, navigation]);

  function renderMealItem(itemData) {
    return <MealItem {...itemData.item} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={categoryMeals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => renderMealItem(itemData)}
      />
    </View>
  );
}

export default MealOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
