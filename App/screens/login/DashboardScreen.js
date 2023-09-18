import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        {/* Conteúdo da coluna esquerda */}
        <View style={styles.leftColumnContent}>
        <Text style={styles.title1}>Lista de pessoas:</Text>
          <Text style={styles.title}>Frederico Avó</Text>
          {/* Pasta de fotografias */}
          
          {/* Outros elementos da coluna esquerda */}
        </View>
      </View>

      
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
    },
    column: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    leftColumnContent: {
      alignItems: 'flex-start',
     
    },
    rightColumnContent: {
      alignItems: 'flex-end',
      paddingRight: 20,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 16,
      marginBottom: 5,
    },
  });



export default DashboardScreen;