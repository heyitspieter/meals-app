import { MEALS } from "../data/dummy";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet } from "react-native";
import MealItems from "../components/MealItems/MealItems";

function FavoritesScreen() {
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No favorite meals</Text>
      </View>
    );
  }

  return <MealItems items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    color: "white",
  },
});
