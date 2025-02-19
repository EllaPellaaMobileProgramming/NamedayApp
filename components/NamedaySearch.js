import { useEffect, useState } from "react";
import { ActivityIndicator, Text, View, StyleSheet } from "react-native";

const api = {
  url: process.env.EXPO_PUBLIC_API_URL
}

export default function NamedaySearch(props) {
  const [ names, setNames ] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const url = api.url + 'getdate?' +
    'day=' + props.day +
    '&month=' + props.month +
    '&country=fi'

    setError(null)
    console.log(url)

    fetch(url)
      .then(res => res.json())
      .then((json) => {
        console.log(json)
        setNames(json.nameday.fi)
      })
      .catch (error => {
        console.log(error)
        setError(error)
      })
      setIsLoading(false)
  }, [props])

  if(isLoading) return <View style={styles.container}><ActivityIndicator size="large" /></View>
  else if (error) return <View style={styles.container}><Text></Text></View>
  return (
    <View>
      <Text style={styles.bold}>Nimipäivät valittuna päivänä: </Text>
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