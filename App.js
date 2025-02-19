import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import NamedayToday from './components/NamedayToday';
import { useState } from 'react';
import NamedaySearch from './components/NamedaySearch';

export default function App() {
  const todaysDate = new Date().getDate().toString()
  const todaysMonth = (new Date().getMonth() + 1).toString()

  const [day, setDay] = useState(todaysDate)
  const [month, setMonth] = useState(todaysMonth)

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Nimipäivät</Text>
      <NamedayToday />
      <Text style={styles.bold}>Etsi tietyn päivän nimipäivät: </Text>
      <Text style={styles.smallText}>Päivä:</Text>
      <TextInput
        style={styles.field}
        value={day}
        onChangeText={text => setDay(text)}
        keyboardType='decimal-pad'
        placeholder='Päivä'
      />
      <Text style={styles.smallText}>Kuukausi:</Text>
      <TextInput
        style={styles.field}
        value={month}
        onChangeText={text => setMonth(text)}
        keyboardType='decimal-pad'
        placeholder='Kuukausi'
      />
      <NamedaySearch day={day} month={month} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  field: {
    marginLeft: 16,
  },
  bold: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 24,
  },
  smallText: {
    fontSize: 12,
    marginLeft: 16,
  },
});
