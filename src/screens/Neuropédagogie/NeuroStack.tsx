import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Definition from '../../components/Definition/Definition';
import MethodeTraitement from '../../components/MethodeDeTraitement/MethodeTraitement';
import Diagnostic from '../../components/Diagnoctic/Diagnostic';
import Neuropédographie from './Neuropédographie';
import EtapeNeuro from '../../components/EtapeNeuro/EtapeNeuro';
import Principes from '../../components/Principes/Principes';
import ProprieteNeuro from '../../components/Propriétés/Propriétés';

const AutismeStackDefinition = createNativeStackNavigator();
export default function NeuroStack() {
  return (
    <AutismeStackDefinition.Navigator>
      <AutismeStackDefinition.Screen
        name="Neuropedagogie"
        component={Neuropédographie}
        options={{title: 'النوروبيداغوجيا'}}
      />
      <AutismeStackDefinition.Screen
        name="EtapeNeuruo"
        component={EtapeNeuro}
        options={{title: ' المراحل '}}
      />
      <AutismeStackDefinition.Screen
        name="Definition"
        component={Definition}
        options={{title: ' تعريف'}}
      />
      <AutismeStackDefinition.Screen
        name="principeNeuro"
        component={Principes}
        options={{title: 'المبادىء '}}
      />
      <AutismeStackDefinition.Screen
        name="proprieteNeuro"
        component={ProprieteNeuro}
        options={{title: ' الخصائص'}}
      />
    </AutismeStackDefinition.Navigator>
  );
}

const styles = StyleSheet.create({});
