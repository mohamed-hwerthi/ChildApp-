import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Autisme from './Autisme';
import Definition from '../../components/Definition/Definition';
const stack = createNativeStackNavigator();

export default function AutimeStack() {
  return (
    <stack.Navigator>
      <stack.Screen name="Autisme" component={Autisme} />
      <stack.Screen name="Definition" component={Definition} />
    </stack.Navigator>
  );
}

const styles = StyleSheet.create({});
