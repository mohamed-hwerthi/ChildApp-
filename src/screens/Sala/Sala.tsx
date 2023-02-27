import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TroublesAprentissage from '../TroublesApprentissage/TroublesAprentissage';
import Autisme from '../Autisme/Autisme';
import SyndromDown from '../SyndromeDown/SyndromeDown';
import Neuropédographie from '../Neuropédagogie/Neuropédographie';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

interface NavigationProps {
  navigate: (screenName: string) => void;
}

export default function Sala({navigation}: {navigation: NavigationProps}) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Autisme" component={Autisme} />
      <Tab.Screen name="Trouble" component={TroublesAprentissage} />
      <Tab.Screen name="SyndromeDown" component={SyndromDown} />
      <Tab.Screen name="Neuro" component={Neuropédographie} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
