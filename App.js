import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import MealDetailScreen from "./screens/MealDetailScreen";
import DrawerNavigator from "./components/DrawerNavigator";
import MealOverviewScreen from "./screens/MealOverviewScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            contentStyle: {
              backgroundColor: "#3f2f25",
            },
            headerStyle: {
              backgroundColor: "#351401",
            },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="DrawerNavigator"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MealOverview"
            component={MealOverviewScreen}
            // options={({ route, navigation }) => {
            //   const catId = route.params.catId;

            //   return {
            //     title: catId,
            //   };
            // }}
          />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            options={{ title: "Details" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
