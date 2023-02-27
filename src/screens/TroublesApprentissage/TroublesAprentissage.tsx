import {ImageBackground, StyleSheet, View} from 'react-native';
import React from 'react';
import {Stack, Button} from '@react-native-material/core';

interface NavigationProps {
  navigate: (screenName: string, route?: object) => void;
}

export default function TroublesAprentissage({
  navigation,
}: {
  navigation: NavigationProps;
}) {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.med} source={require('./med.jpg')}>
        <Stack fill center spacing={4}>
          <View style={styles.fieldList}>
            <Button
              onPress={() => navigation.navigate('TroubleCompte')}
              style={styles.fieldElement}
              title="اضطراب الحساب"
              disableElevation
            />
            <Button
              onPress={() => navigation.navigate('TroubleLecture')}
              style={styles.fieldElement}
              title=" اضطراب القراءة "
              disableElevation
            />
            <Button
              onPress={() => navigation.navigate('TroubleEcriture')}
              style={styles.fieldElement}
              title="اضطراب الكتابة "
              disableElevation
            />
            <Button
              onPress={() => navigation.navigate('TroubleMouvement')}
              style={styles.fieldElement}
              title=" اضطراب الحركة"
              disableElevation
            />
            <Button
              onPress={() => navigation.navigate('TroubleParole')}
              style={styles.fieldElement}
              title=" اضطراب النطق و الكلام"
              disableElevation
            />
            <Button
              onPress={() => navigation.navigate('TroubleAttention')}
              style={styles.fieldElement}
              title="اضطراب الانتباه"
              disableElevation
            />
          </View>
        </Stack>
      </ImageBackground>
    </View>
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
    alignItems: 'center',
  },
  fieldElement: {
    height: 45,
    marginTop: 20,
    width: 200,
    fontSize: 200,
    fontWeight: 'bold',
    color: 'red',
  },
});
