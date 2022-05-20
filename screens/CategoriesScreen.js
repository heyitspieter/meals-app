import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy";
import GridTile from "../components/GridTile";

function CategoriesScreen({ navigation }) {
  const renderCategory = (itemData) => {
    return (
      <GridTile
        onViewCategory={() => onPressTile(itemData)}
        title={itemData.item.title}
        color={itemData.item.color}
      />
    );
  };

  function onPressTile(itemData) {
    navigation.navigate("MealOverview", {
      catId: itemData.item.id,
    });
  }

  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => renderCategory(itemData)}
    />
  );
}

export default CategoriesScreen;
