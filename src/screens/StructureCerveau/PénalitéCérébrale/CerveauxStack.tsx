import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StructureCerveaux from '../StructureCerveaux';
import LobesCérébreaux from '../LobesCérébraux/LobesCérébreaux';
import PenaliteCerebrale from './PenaliteCerebrale';
import PartieGauche from './PartieGauche/PartieGauche';
import PartieDroite from './PartieDroite/PartieDroite';
import Role from '../../../components/Role';
import Resultat from '../../../components/Resultat';
import LobeFrontal from '../LobesCérébraux/LobeFrontal/LobeFrontal';
import LobePariétal from '../LobesCérébraux/LobePariétal/LobePariétal';
import LobeTemporal from '../LobesCérébraux/LobeTemporal/LobeTemporal';
import LobePostérieur from '../LobesCérébraux/LobePostérieur/LobePostérieur';

const AutismeStackDefinition = createNativeStackNavigator();
export default function CerveauxStack() {
  return (
    <AutismeStackDefinition.Navigator>
      <AutismeStackDefinition.Screen
        name="StructureCerveaux"
        component={StructureCerveaux}
        options={{title: '  بنية دماغ المتعلم'}}
      />
      <AutismeStackDefinition.Screen
        name="PenaliteCerebrale"
        component={PenaliteCerebrale}
        options={{title: 'أجزاء الدماغ'}}
      />
      <AutismeStackDefinition.Screen
        name="LobeCerebreaux"
        component={LobesCérébreaux}
        options={{title: 'الفصوص الدماغية'}}
      />
      <AutismeStackDefinition.Screen
        name="PartieGauche"
        component={PartieGauche}
        options={{title: ''}}
      />
      <AutismeStackDefinition.Screen
        name="PartieDroite"
        component={PartieDroite}
        options={{title: ''}}
      />
      <AutismeStackDefinition.Screen
        name="LobeFrontal"
        component={LobeFrontal}
        options={{title: 'الفص الجبهي '}}
      />
      <AutismeStackDefinition.Screen
        name="LobeParietal"
        component={LobePariétal}
        options={{title: 'الفص الجداري'}}
      />
      <AutismeStackDefinition.Screen
        name="LobeTemporal"
        component={LobeTemporal}
        options={{title: 'الفص الصدغي '}}
      />
      <AutismeStackDefinition.Screen
        name="LobePosterieur"
        component={LobePostérieur}
        options={{title: 'الفص المؤخري'}}
      />
      <AutismeStackDefinition.Screen
        name="Resultat"
        component={Resultat}
        options={{title: ' نتائج اصابته'}}
      />
      <AutismeStackDefinition.Screen
        name="Role"
        component={Role}
        options={{title: 'وظائفه'}}
      />
    </AutismeStackDefinition.Navigator>
  );
}

const styles = StyleSheet.create({});
