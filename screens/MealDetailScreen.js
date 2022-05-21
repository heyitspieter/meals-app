import { MEALS } from "../data/dummy";
import { useLayoutEffect } from "react";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import MealDetails from "../components/MealDetails";
import { useDispatch, useSelector } from "react-redux";
import Subtitle from "../components/MealDetail/Subtitle";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { addFavorite, removeFavorite } from "../store/redux/slices/favorite";

function MealDetailScreen({ route, navigation }) {
  const dispatch = useDispatch();

  const mealId = route.params.mealId;

  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  const isFavorite = favoriteMealIds.includes(mealId);

  const meal = MEALS.find((meal) => meal.id === mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            size={24}
            color="white"
            onPressed={onUpdateFavoriteStatus}
            name={!isFavorite ? "star-outline" : "star"}
          />
        );
      },
    });
  }, [navigation, onUpdateFavoriteStatus]);

  function onUpdateFavoriteStatus() {
    if (isFavorite) {
      dispatch(removeFavorite({ id: mealId }));
    } else {
      dispatch(addFavorite({ id: mealId }));
    }
  }

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{ uri: meal.imageUrl }} />
      <Text style={styles.title}>{meal.title}</Text>
      <MealDetails
        duration={meal.duration}
        complexity={meal.complexity}
        textStyle={styles.detailText}
        affordability={meal.affordability}
      />
      <View style={styles.listWrapper}>
        <View style={styles.listInner}>
          <Subtitle text="Ingredients" />
          <List items={meal.ingredients} />
          <Subtitle text="Steps" />
          <List items={meal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  detailText: {
    color: "white",
  },
  listWrapper: {
    alignItems: "center",
  },
  listInner: {
    maxWidth: "80%",
  },
});
