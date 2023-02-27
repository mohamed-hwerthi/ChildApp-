import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Definition from '../../components/Definition/Definition';
import MethodeTraitement from '../../components/MethodeDeTraitement/MethodeTraitement';
import Diagnostic from '../../components/Diagnoctic/Diagnostic';
import SyndromDown from './SyndromeDown';

const AutismeStackDefinition = createNativeStackNavigator();
export default function SyndromeDownStack() {
  return (
    <AutismeStackDefinition.Navigator>
      <AutismeStackDefinition.Screen
        name="Autisme"
        component={SyndromDown}
        options={{title: 'متلازمة داون '}}
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
