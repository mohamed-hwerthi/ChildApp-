import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Role({route}) {
  let definition: JSX.Element;
  console.log(route);

  const RoleLobeposterieur = () => {
    return <Text>Role Lobe Lobe Posterieur</Text>;
  };

  const RoleLobeparietal = () => {
    return <Text>Role Lobe parietal</Text>;
  };

  const RoleLobeTemporal = () => {
    return <Text>Role Lobe Temporal</Text>;
  };
  const RoleLobeFrontal = () => {
    return <Text>Role Lobe Frontal</Text>;
  };
  const RolePartieDroite = () => {
    return <Text>Role Partie Droite</Text>;
  };
  const RolePartieGauche = () => {
    return <Text>Role Partie Gauche</Text>;
  };

  if (route.params.nom == 'RoleLobeParietal') {
    definition = <RoleLobeparietal />;
  } else if (route.params.nom == 'RoleLobePosterieur') {
    definition = <RoleLobeposterieur />;
  } else if (route.params.nom == 'RoleLobeTemporal') {
    definition = <RoleLobeTemporal />;
  } else if (route.params.nom == 'RoleLobeFrontal') {
    definition = <RoleLobeFrontal />;
  } else if (route.params.nom == 'RolePartieDroite') {
    definition = <RolePartieDroite />;
  } else if (route.params.nom == 'RolePartieGauche') {
    definition = <RolePartieGauche />;
  }
  return (
    <View style={styles.aaa}>
      <ImageBackground
        style={styles.backimage}
        source={require('../assets/back00.jpeg')}>
        <View>{definition}</View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backimage: {
    flex: 1,
  },
  aaa: {
    flex: 1,
  },
  textStyling: {
    color: 'white',
    fontSize: 20,
  },
  text: {
    marginTop: 20,
    marginRight: 20,
  },
});
