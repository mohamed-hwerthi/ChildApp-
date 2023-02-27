import {Image, ImageBackground, StyleSheet, View, Animated} from 'react-native';
import React, {useState} from 'react';
import {Stack, Button} from '@react-native-material/core';
interface NavigationProps {
  navigate: (screenName: string) => void;
}

export default function TroubleLecture({
  navigation,
}: {
  navigation: NavigationProps;
}) {
  const [scaleValue, setScaleValue] = useState(new Animated.Value(1));
  const scale = scaleValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0.5, 2],
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.med}
        source={require('./TroubleLecture.jpeg')}>
        <Stack fill center spacing={4}>
          <View style={styles.fieldList}>
            <Button
              onPress={() =>
                navigation.navigate('Definition', {nom: 'TroubleLecture'})
              }
              style={styles.fieldElement}
              title=" تعريف "
              disableElevation
              pressEffectColor="blue"
            />
            <Button
              onPress={() =>
                navigation.navigate('Diagnostic', {nom: 'TroubleLecture'})
              }
              style={styles.fieldElement}
              title="تشخيص"
              disableElevation
            />
            <Button
              onPress={() =>
                navigation.navigate('MethodeTraitement', {
                  nom: 'TroubleLecture',
                })
              }
              style={styles.fieldElement}
              title="طرق العلاج"
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
    marginTop: 70,
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

  photoTrouble: {
    borderRadius: 20,
  },
  fafa: {
    height: 100,
  },
});
