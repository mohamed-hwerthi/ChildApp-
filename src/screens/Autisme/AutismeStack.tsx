import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Definition from '../../components/Definition/Definition';
import Autisme from './Autisme';
import MethodeTraitement from '../../components/MethodeDeTraitement/MethodeTraitement';
import Diagnostic from '../../components/Diagnoctic/Diagnostic';

const AutismeStackDefinition = createNativeStackNavigator();
export default function AutismeStack() {
  return (
    <AutismeStackDefinition.Navigator>
      <AutismeStackDefinition.Screen
        name="Autisme"
        component={Autisme}
        options={{title: 'التوحد'}}
      />
      <AutismeStackDefinition.Screen
        name="Definition"
        component={Definition}
        options={{title: 'تعريف'}}
      />
      <AutismeStackDefinition.Screen
        name="Diagnostic"
        component={Diagnostic}
        options={{title: 'تشخيص'}}
      />
      <AutismeStackDefinition.Screen
        name="MethodeTraitement"
        component={MethodeTraitement}
        options={{title: 'طرق العلاج'}}
      />
    </AutismeStackDefinition.Navigator>
  );
}

const styles = StyleSheet.create({});
