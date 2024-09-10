import { StatusBar } from 'expo-status-bar'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Lesson7 from './src/page/lesson7';

export default function App() {
  const names = ["Chung", "Minh", "An", "Phuoc"]; // 3-4 tỉnh thành phố
  names.map((item, i) => {
    item % 2 == 0 ? "cr" : "incr"
    console.log(i, ":", item);
  }
  )
  return (
    <View style={styles.container}>
      {/* <Lesson7 /> */}
      {
        names.map((name, i) => (
          <Text>{i} : {name}</Text>
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40
  },
})
