import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy";
import { useRoute } from "@react-navigation/native";
import MealItems from "../components/MealItems/MealItems";

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

  return <MealItems items={categoryMeals} />;
}

export default MealOverviewScreen;
