import {
  View,
  Text,
  Image,
  Platform,
  Pressable,
  StyleSheet,
} from "react-native";
import MealDetails from "./MealDetails";
import { useNavigation } from "@react-navigation/native";

function MealItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) {
  const navigation = useNavigation();

  function onSelectItem() {
    navigation.navigate("MealDetail", {
      mealId: id,
    });
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={onSelectItem}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      >
        <View style={styles.inner}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  container: {
    margin: 16,
    elevation: 4,
    shadowOpacity: 0.35,
    shadowColor: "black",
    borderRadius: 5,
    shadowRadius: 5,
    overflow: "hidden",
    backgroundColor: "white",
    shadowOffset: { width: 0, height: 2 },
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  buttonPressed: {
    opacity: Platform.OS === "android" ? 1 : 0.5,
  },
  inner: {
    borderRadius: 5,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    margin: 8,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
