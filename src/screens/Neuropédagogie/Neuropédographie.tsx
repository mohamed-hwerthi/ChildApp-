import {ImageBackground, StyleSheet, View} from 'react-native';
import React from 'react';
import {Stack, Button, Text} from '@react-native-material/core';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Definition from '../../components/Definition/Definition';
import {NativeModules} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

const stack = createNativeStackNavigator();

interface NavigationProps {
  navigate: (screenName: string) => void;
}

export default function Neuropédographie({
  navigation,
}: {
  navigation: NavigationProps;
}) {
  return (
    <>
  
      <View style={styles.container}>
        <ImageBackground
          style={styles.med}
          source={require('../../assets/neuropc.jpg')}>
          <Stack fill center spacing={4}>
            <View style={styles.fieldList}>
              <Button
                onPress={() => {
                  navigation.navigate('Definition', {nom: 'DefinitionNeuro'});
                }}
                style={styles.fieldElement}
                title=" تعريف "
                disableElevation
              />

              <Button
                onPress={() => {
                  navigation.navigate('EtapeNeuruo');
                }}
                style={styles.fieldElement}
                title="المراحل "
                disableElevation
              />
              <Button
                onPress={() => {
                  navigation.navigate('principeNeuro');
                }}
                style={styles.fieldElement}
                title=" المبادىء"
                disableElevation
              />
              <Button
                onPress={() => {
                  navigation.navigate('proprieteNeuro');
                }}
                style={styles.fieldElement}
                title=" الخصائص"
                disableElevation
              />
            </View>
          </Stack>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  med: {
    flex: 1,
  },

  fieldList: {
    marginTop: 70,
    alignItems: 'center',
  },
  fieldElement: {
    height: 45,
    marginTop: 20,
    width: 200,
    fontSize: 200,
    fontWeight: 'bold',
  },
});
