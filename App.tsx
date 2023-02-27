import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Acceuil from './src/screens/Acceuil/Acceuil';
import Autisme from './src/screens/Autisme/Autisme';
import Neuropédographie from './src/screens/Neuropédagogie/Neuropédographie';
import StructureCerveaux from './src/screens/StructureCerveau/StructureCerveaux';
import SyndromeDown from './src/screens/SyndromeDown/SyndromeDown';
import TroublesAprentissage from './src/screens/TroublesApprentissage/TroublesAprentissage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AutismeStack from './src/screens/Autisme/AutismeStack';
import SyndromeDownStack from './src/screens/SyndromeDown/SyndromeDownStack';
import NeuroStack from './src/screens/Neuropédagogie/NeuroStack';
import CerveauxStack from './src/screens/StructureCerveau/PénalitéCérébrale/CerveauxStack';
import TroubleStack from './src/screens/TroublesApprentissage/TroubleStack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export default function App() {
  //states :
  const [med, setMed] = useState(true);
  let ToDisplay: JSX.Element;
  console.log(med);
  //-------------------------------------------------
  if (med) {
    ToDisplay = <Acceuil medProps={med} setMedProps={setMed} />;
  } else {
    ToDisplay = (
      <>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarActiveTintColor: '#b41ffe',
              tabBarInactiveTintColor: 'blue',
              tabBarLabelStyle: {
                fontSize: 14,
                fontWeight: 'bold',
              },
              tabBarStyle: {
                backgroundColor: 'white',
                borderTopWidth: 1,
                borderTopColor: '#ccc',
                height: 60,
                display: 'flex',
              },
            }}>
            <Tab.Screen name="النوروبيداغوجيا" component={NeuroStack} />
            <Tab.Screen name=" التوحد" component={AutismeStack} />
            <Tab.Screen name=" اضطرابات التعلم" component={TroubleStack} />
            <Tab.Screen name=" متلازمة داون " component={SyndromeDownStack} />
            <Tab.Screen name="بنية دماغ المتعلم" component={CerveauxStack} />
          </Tab.Navigator>
        </NavigationContainer>
      </>
    );
  }
  return <View style={styles.app}>{ToDisplay}</View>;
}

const styles = StyleSheet.create({
  icon: {
    height: 40,
    width: 40,
  },
  haha: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: 'red',
  },
  app: {
    flex: 1,
  },
});
