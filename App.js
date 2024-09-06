import { StatusBar } from 'expo-status-bar'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import SignUp from './src/page/signup'
import SignIn from './src/page/signin'
import Lesson6 from './src/page/lesson6'
import CountDown from './src/page/countDown'

export default function App() {
  return (
    <View style={styles.container}>  
        <CountDown />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'purple',
    justifyContent:'center',
    alignItems: 'center',
    gap: 40
  },
})
