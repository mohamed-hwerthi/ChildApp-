import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Definition from '../../components/Definition/Definition';
import MethodeTraitement from '../../components/MethodeDeTraitement/MethodeTraitement';
import Diagnostic from '../../components/Diagnoctic/Diagnostic';
import TroublesAprentissage from './TroublesAprentissage';
import TroubleAttention from './TroublesAttention/TroubleAttention';
import TroubleParole from './TroublesDeParole/TroubleDeParole';
import TroubleMouvement from './troubleDeMouvement/TroubleDeMouvement';
import TroubleEcriture from './TroubleEcriture/TroubleEcriture';
import TroubleLecture from './TroubleDeLecture/TroubleDeLecture';
import TroubleCompte from './TroubleDeCompte/TroubleDeCompte';

const AutismeStackDefinition = createNativeStackNavigator();
export default function TroubleStack() {
  return (
    <AutismeStackDefinition.Navigator>
      <AutismeStackDefinition.Screen
        name="TroubleApprentissage"
        component={TroublesAprentissage}
        options={{title: 'اضطرابات التعلم'}}
      />
      <AutismeStackDefinition.Screen
        name="TroubleCompte"
        component={TroubleCompte}
        options={{title: 'اضطراب الحساب'}}
      />
      <AutismeStackDefinition.Screen
        name="TroubleLecture"
        component={TroubleLecture}
        options={{title: ' اضطراب القراءة '}}
      />
      <AutismeStackDefinition.Screen
        name="TroubleEcriture"
        component={TroubleEcriture}
        options={{title: 'اضطراب الكتابة '}}
      />
      <AutismeStackDefinition.Screen
        name="TroubleMouvement"
        component={TroubleMouvement}
        options={{title: 'اضطراب الحركة '}}
      />
      <AutismeStackDefinition.Screen
        name="TroubleParole"
        component={TroubleParole}
        options={{title: ' اضطراب النطق و الكلام'}}
      />
      <AutismeStackDefinition.Screen
        name="TroubleAttention"
        component={TroubleAttention}
        options={{title: ' اضطراب الانتباه '}}
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
