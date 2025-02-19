import { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";

const api = {
  url: process.env.EXPO_PUBLIC_API_URL
}

export default function NamedayToday() {
  const [ names, setNames ] = useState('')

  useEffect(() => {
    const url = api.url + 'today?country=fi'

    fetch(url)
      .then(res => res.json())
      .then((json) => {
        setNames(json.nameday.fi)
      })
  }, [])

  return (
    <View>
      <Text style={styles.bold}>Nimipäivät tänään: </Text>
      <Text style={styles.field}>{names}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  field: {
    textAlign: 'center',
    marginBottom: 8,
  },
  bold: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 24,
  }
});