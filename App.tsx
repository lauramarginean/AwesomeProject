import CategoriesScreen from './screens/CategoriesScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import React from 'react';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductsOverviewScreen from './screens/ProductsOverviewScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import FavoritesContextProvider from './store/context/favorite-context';
import LoginScreen from './screens/LoginScreen';
import Icon from 'react-native-ionicons';
import ProfileScreen from './screens/ProfileScreen';
import HomeScreen from './screens/HomeScreen';

export type RootStackParamList = {
  ICategories: NavigatorScreenParams<TabNavigationParamList>;
  Login: undefined;
  ProductOverview: {
    categoryId: string;
  };
  ProductDetail: {
    productId: string;
  };
};

export type TabNavigationParamList = {
  Home: undefined;
  Categories: undefined;
  Favorites: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabNavigationParamList>();

function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Categories" component={CategoriesScreen} />
      <Tab.Screen name="Favorites" component={FavoriteScreen} />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => <Icon name="person" />,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <FavoritesContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ICategories"
            component={TabNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen
            name="ProductOverview"
            component={ProductsOverviewScreen}
          />
          <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesContextProvider>
  );
}
