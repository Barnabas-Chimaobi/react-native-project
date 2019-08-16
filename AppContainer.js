import React from "react";
import { View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Likes from "./src/components/Likes";
import Todo from "./src/components/Todo";
import Flex from "./src/components/Flex";
import List from "./src/components/List";
import FlatListExample from "./src/components/FlatListExample";
import Touchables from "./src/components/Touchables";
import Menu from "./src/components/Menu";

const AppNavigator = createStackNavigator(
  {
    Likes,
    Todo,
    Flex,
    List,
    FlatListExample,
    Touchables,
    Menu
  },
  {
    initialRouteName: "Menu",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#222e50"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default (AppContainer = createAppContainer(AppNavigator));
