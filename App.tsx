import {
  Button,
  StyleSheet, Text,
} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductsOverviewScreen from './screens/ProductsOverviewScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import FavoritesContextProvider from './store/context/favorite-context';
import LoginScreen from './screens/LoginScreen';
import Icon from 'react-native-ionicons';
import ProfileScreen from './screens/ProfileScreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Categories" component={CategoriesScreen} />
      <Tab.Screen name="Favorites" component={FavoriteScreen} />
     
      <Tab.Screen name="Profile" component={ProfileScreen}  
      options={{
        tabBarIcon: () => (
          <Icon name="arrow-back" />
        ),
      }}/>
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
            options={{headerShown: false}}
          />
          <Stack.Screen name="Login" component={LoginScreen} options={{headerLeft:()=>{
            <Button ></Button>
          }
          }}/>
          <Stack.Screen name="ProductOverview" component={ProductsOverviewScreen} />
          <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesContextProvider>


  );
}

const styles = StyleSheet.create({
  sectionContainer: {
  }
});
