import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Linking, TouchableOpacity, Image } from 'react-native';
import Video from 'react-native-video';



function HomeScreen({ navigation }) {
  const [user, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!emailPattern.test(user.trim())) {
      setUsernameError('Please enter a valid email');
      return;
    } else {
      setUsernameError('');
    }
    if (!passwordPattern.test(password.trim())) {
      setPasswordError(
        'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character'
      );
      return;
    } else {
      setPasswordError('');
    }

    navigation.navigate('Details'); 
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <View style={styles.container}>
      <Video
        source={require('./Whatsapp1.mp4')}
        rate={1.0}
        volume={1.0}
        muted={false}
        resizeMode="cover"
        repeat={true}
        style={styles.video}
      />
      <Text style={styles.subHeading}>Login Info</Text>
      <TextInput
        style={[styles.input, !!usernameError && styles.inputError]}
        placeholder="Email or Phonenumber"
        placeholderTextColor="white"
        value={user}
        onChangeText={setUsername}
      />
      {usernameError ? <Text style={styles.errorText}>{usernameError}</Text> : null}
      <View style={styles.passwordInputContainer}>
        <TextInput
          style={[styles.passwordInput, !!passwordError && styles.inputError]}
          placeholder="Password"
          placeholderTextColor="white"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity
          style={styles.showPasswordButton}
          onPress={handleTogglePasswordVisibility}
        >
          <Image
            source={showPassword ? require('./eye-crossed.png') : require('./eye.png')}
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      </View>
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
      <Text style={styles.forgotPassword}>Forgot Password?</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>Or Login with</Text>
      <View style={styles.logo}>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com')}>
          <Image source={require('./fb2.png')} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.twitter.com')}>
          <Image source={require('./twitter1.png')} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com')}>
          <Image source={require('./insta3.png')} style={styles.image} />
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 0.5
  },
  input: {
    borderColor: 'lightgreen',
    borderWidth: 3,
    width: '90%',
    margin: 10,
    borderRadius: 25,
    paddingLeft: 15,
    color: 'white',
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'lightgreen',
    borderWidth: 3,
    width: '90%',
    margin: 10,
    borderRadius: 25,
    paddingLeft: 15,
  },
  passwordInput: {
    flex: 1,
    color: 'white',
  },
  showPasswordButton: {
    padding: 8,
  },
  subHeading: {
    fontWeight: 'bold',
    color: 'darkgrey',
    margin: 25,
    marginBottom: 5,
    fontSize: 50,
    textShadowColor: 'lightgreen',
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
  image: {
    width: 30,
    height: 30,
    margin: 15,
    marginHorizontal: 10,
    borderColor: 'lightgreen',
    borderWidth: 4,
    borderRadius: 4,
  },
  logo: {
    flexDirection: 'row',
  },
  forgotPassword: {
    color: 'skyblue',
    marginLeft: 170,
  },
  orText: {
    color: 'white',
  },
  button: {
    backgroundColor: 'darkgreen',
    width: '60%',
    alignItems: 'center',
    padding: 12,
    margin: 20,
    borderRadius: 15,
    borderColor: 'lightgreen',
    borderWidth: 3
  },
  errorText: {
    color: 'red',
    marginBottom: 5,
  },
  inputError: {
    borderColor:'red',

  },
  eyeIcon: {
    width: 24,
    height: 24,
  },

});

export default HomeScreen;
