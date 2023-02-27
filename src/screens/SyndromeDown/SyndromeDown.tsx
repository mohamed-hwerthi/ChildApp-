import {
  Image,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {Stack, Button} from '@react-native-material/core';

export default function SyndromDown({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.med} source={require('./aaa.jpg')}>
        <Stack fill center spacing={4}>
          <View style={styles.fieldList}>
            <Button
              onPress={() => {
                navigation.navigate('Definition', {nom: 'SyndromeDown'});
              }}
              style={styles.fieldElement}
              title=" تعريف "
              disableElevation
            />
            <Button
              onPress={() => {
                navigation.navigate('Diagnostic', {nom: 'SyndromeDown'});
              }}
              style={styles.fieldElement}
              title="تشخيص"
              disableElevation
            />
            <Button
              onPress={() => {
                navigation.navigate('MethodeTraitement', {nom: 'SyndromeDown'});
              }}
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
  },
});
