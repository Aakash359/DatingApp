import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  DoubleCardFilled,
  DoubleCardIcon,
  NavChatFilledIcon,
  NavChatIcon,
  NavHeartIcon,
  NavHeartIconFilled,
  NavProfileFilledIcon,
  NavProfileIcon,
} from "../../assets";
import { Layout } from "../../layout/layout";

import { ChatScreen } from "./chat";
import { ProfileScreen } from "./profile";
import { LikesMainScreen } from "./likes";
import { TinderDemo } from "./dashboard/tinderDemo";

const Tab = createBottomTabNavigator();

export const HomeScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="TinderDemo"
        component={TinderDemo}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? <DoubleCardFilled /> : <DoubleCardIcon />,
          tabBarBackground: () => <Layout />,
        }}
      />
      <Tab.Screen
        name="LikesScreen"
        component={LikesMainScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? <NavHeartIconFilled /> : <NavHeartIcon />,
          tabBarBackground: () => <Layout />,
        }}
      />
      <Tab.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? <NavChatFilledIcon /> : <NavChatIcon />,
          tabBarBackground: () => <Layout />,
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
            focused ? <NavProfileFilledIcon /> : <NavProfileIcon />,
          tabBarBackground: () => <Layout />,
        }}
      />
    </Tab.Navigator>
  );
};
