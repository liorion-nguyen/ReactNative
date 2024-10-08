import { StatusBar } from 'expo-status-bar'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Lesson7 from './src/page/lesson7';
import Lesson8 from './src/page/lesson8';

export default function App() {
  const names = ["Chung", "Minh", "An", "Phuoc"]; // 3-4 tỉnh thành phố
  names.map((item, i) => {
    item % 2 == 0 ? "cr" : "incr"
    console.log(i, ":", item);
  }
  )
  return (
    <View style={styles.container}>
      <Lesson8 />
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
