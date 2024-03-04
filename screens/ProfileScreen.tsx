import React, { useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { Text } from 'react-native';
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { RootStackParamList, TabNavigationParamList } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type ProfileScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabNavigationParamList, 'Profile'>,
  NativeStackScreenProps<RootStackParamList>
>;

function ProfileScreen({ navigation }: ProfileScreenProps) {
  const removeData = useCallback(async () => {
    try {
      await AsyncStorage.removeItem('username');
      navigation.navigate('Login');
    } catch (error) {
      console.log(error);
    }
  }, [navigation]);

  const getData = useCallback(() => {
    try {
      AsyncStorage.getItem('username').then(value => {
        if (value == null) {
          navigation.navigate('Login');
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, [navigation]);

  useEffect(() => {
    getData();
  }, [getData]);

  return <Text onPress={removeData}>Log out</Text>;
}

export default ProfileScreen;
