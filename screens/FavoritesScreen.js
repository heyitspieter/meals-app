import { useContext } from "react";
import { MEALS } from "../data/dummy";
import { View, Text, StyleSheet } from "react-native";
import MealItems from "../components/MealItems/MealItems";
import { FavoritesContext } from "../store/context/favorites";

function FavoritesScreen() {
  const favoritesCtx = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoritesCtx.ids.includes(meal.id)
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
