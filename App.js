import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

    <View style={styles.header}> </View>
    <View style={styles.main}> </View>
    <View style={styles.footer}> </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddf',
    
  },
  header:{
    backgroundColor: '#555',
    height:65

  },
  main:{
    flex: 1,
    backgroundColor: 'black',

  },
  footer:{
    backgroundColor: '#555',
    height:65

  },


});
