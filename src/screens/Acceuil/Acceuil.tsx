import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from '@react-native-material/core';

interface NavigationProps {
  navigate: (screenName: string) => void;
}

export default function Acceuil({
  navigation,
  medProps,
  setMedProps,
}: {
  naigation: NavigationProps;
}) {
  const handelPress = () => {
    setMedProps(!medProps);
  };
  const handelToAcceuil = () => {
    setMedProps(false);
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../.././assets/back121.jpg')}
        style={styles.backgroundImage}>
        <View style={styles.AcceuilTop}>
          <Image
            source={require('../../assets/logoneuro.jpeg')}
            style={styles.logo}
          />
          <Text style={styles.appName}>3abber</Text>
        </View>
        <View style={styles.AcceuilFeed}>
          <Text style={styles.subjectName}> النوروبيداغوجيا</Text>
        </View>
        <View style={styles.AcceuilButton}>
          <Button
            onPress={() => {
              handelPress();
            }}
            title="Start"
            style={styles.startButton}
          />

          <View style={styles.presentedBy}>
            <Text style={styles.etudiant}>وصال همادي</Text>
            <Text style={styles.etudiant}>محمد سامح الجملي</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    resizeMode: 'cover',
    flex: 1,
  },
  AcceuilTop: {
    marginTop: 20,
    alignItems: 'center',
  },
  AcceuilFeed: {
    marginTop: 50,
    alignItems: 'center',
  },
  AcceuilButton: {
    marginTop: 30,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    borderRadius: 100,
    marginTop: 30,
  },
  appName: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
  },
  subjectName: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 30,
  },
  startButton: {
    alignSelf: 'center',
    marginTop: 50,
    height: 70,
    width: 140,
    justifyContent: 'center',
  },
  presentedBy: {
    marginTop: 40,
    marginRight: 20,
  },
  etudiant: {
    color: 'white',
    fontSize: 20,
  },
});
