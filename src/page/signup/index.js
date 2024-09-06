import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
export default function SignUp() {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            <View style={styles.inputContainer}>
                <TextInput placeholder='FullName' style={styles.input} />
                <TextInput placeholder='Job Status' style={styles.input} />
                <TextInput placeholder='Email' style={styles.input} />
                <TextInput placeholder='Password' style={styles.input} />
                <TouchableOpacity style={styles.button}><Text style={styles.textButton}>Register</Text></TouchableOpacity>
                <Text style={styles.word}>Do Have Account?</Text>
                <View style={styles.SignIn}>
                    <Text style={styles.text}>Sign In</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
      fontSize: 40,
      color: '#fff',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    inputContainer: {
      width: '100%',
      padding: 20,
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: 250,
    },
    input: {
      border: 1,
      borderColor: 'grey',
      padding: 15,
      backgroundColor: 'white',
      borderRadius: 10,
      fontSize: 15,
      margin: 6
    },
    button: {
      backgroundColor: '#0766ff',
      borderRadius: 10,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 5
    },
    textButton: {
      color: 'white',
      fontSize: 20,
    },
    forgotContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingRight: 15
    },
    SignIn: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingRight: 15
    },
})
  