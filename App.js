import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.header}>
      <View style={styles.menubar}>
        <Text style={styles.text}> helo world</Text>       
        <Text style={styles.text}> helo world</Text>       
        <Text style={styles.text}> helo world</Text>       
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  header: {

    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#3498db',

  },
  menubar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: "gray",
    marginTop: 30,
   
  },
  text:{
    color: '#ffff',
    fontSize: 20
  }
});
