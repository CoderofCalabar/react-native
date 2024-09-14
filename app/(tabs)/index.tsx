import { color, fontSize } from '@/utils/globalConfig';
import { useState } from 'react';
import { Image, StyleSheet, Platform, View, Text, TextInput, Button, TouchableOpacity, Alert, ActivityIndicator, Pressable } from 'react-native';

export default function HomeScreen() {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ loading, setLoading ] = useState(false);

  const handleSubmitForm = () => {
    if(!email) return console.log("Pls enter your email to continue!");
    if(!password) return console.log("Pls enter your password to continue!");

    setLoading(true);

    setTimeout(() => {
      console.log("Form has been submitted successfully!");
      setEmail("");
      setPassword("");
      setLoading(false)
    }, 3000)

    
  }
  return (
    <View style={styles.container}>
      <Image 
        source={require("../../assets/images/partial-react-logo.png")}
        alt='welcome image'
      />

      <View style={styles.content}>
        <Text style={[styles.welcomeText, styles.textCenter]}>Welcome 👋</Text>
        <Text style={[styles.description, styles.textCenter]}>Get all you need in one step, bridging all your knowledge gap</Text>

        <View
          style={{
            display: "flex",
            gap:10
          }}
        >
          <Text style={styles.loginText}>Login</Text>
          <TextInput  
            style={styles.input}
            placeholder='Email'
            placeholderTextColor={color.secondary}
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
          <TextInput  
            style={styles.input}
            placeholder='Password'
            placeholderTextColor={color.secondary}
            secureTextEntry
            value={password}
            onChangeText={(value) => setPassword(value)}
          />

          <TouchableOpacity 
            style={styles.btn}
            onPress={handleSubmitForm}
          >
            {loading && <ActivityIndicator color="#fff" size="small" />}
            <Text style={{
              textAlign: "center",
              color: "#fff",
              fontSize: fontSize.paragraph
            }}>
              
              Login
            </Text>
          </TouchableOpacity>
          <View style={styles.justify}>
            <Text style={styles.links}>Register</Text>
            <Text style={styles.links}>Forgot Password</Text>
          </View>
        </View>
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30
  },
  content: {
    paddingTop: 40,
    display:"flex",
    flexDirection: "column",
    gap:7,
    paddingHorizontal: 10
  },
  textCenter: {
    textAlign:"center"
  },
  welcomeText: {
    fontSize: fontSize.heading,
    fontWeight: "800",
    color: color.primary,
    textTransform:"uppercase"
  },
  description: {
    fontSize: fontSize.paragraph,
    fontWeight: "400",
    fontStyle:"italic"
  },
  loginText: {
    fontSize: fontSize.heading,
    fontWeight: "500",
    color: color.primary,
    textTransform:"capitalize",
    textAlign:"center",
    marginVertical: 10
  },
  input: {
    borderWidth: 1,
    borderRadius: 6,
    height:45,
    paddingHorizontal: 20,
    borderColor: color.primary,
  },
  btn: {
    backgroundColor: color.primary,
    borderRadius: 6,
    height:45,
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap:5
  },
  justify: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  links: {
    color: color.primary,
    fontSize: fontSize.links,
    cursor: "pointer"
  }
})

