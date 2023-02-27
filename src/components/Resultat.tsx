import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Resultat({route}) {
  let definition: JSX.Element;

  const RoleLobeposterieur = () => {
    return <Text>Resultat Lobe postererefd</Text>;
  };

  const ResultatLobeparietal = () => {
    return <Text>Resultat Lobe parietal</Text>;
  };

  const ResultatLobeTemporal = () => {
    return <Text>Resultat Lobe Temporal</Text>;
  };
  const ResultatLobeFrontal = () => {
    return <Text>Resultat Lobe Frontal</Text>;
  };
  const ResultatPartieDroite = () => {
    return <Text>Resultat PartieDroite</Text>;
  };
  const ResultatPartieGauche = () => {
    return <Text>Resultat partie Gauche</Text>;
  };

  if (route.params.nom == 'ResultatLobeParietal') {
    definition = <ResultatLobeparietal />;
  } else if (route.params.nom == 'ResultatLobePosterieur') {
    definition = <RoleLobeposterieur />;
  } else if (route.params.nom == 'ResultatLobeTemporal') {
    definition = <ResultatLobeTemporal />;
  } else if (route.params.nom == 'ResultatLobeFrontal') {
    definition = <ResultatLobeFrontal />;
  } else if (route.params.nom == 'ResultatPartieDroite') {
    definition = <ResultatPartieDroite />;
  } else if (route.params.nom == 'ResultatPartieGauche') {
    definition = <ResultatPartieGauche />;
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
