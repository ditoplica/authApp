import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TextInput,
    Image,
} from 'react-native'; 
import colors from '../assets/colors/colors';
import STYLES from '../assets/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';

function SignIn({navigation}) {
    return (
        <SafeAreaView style={{
            paddingHorizontal: 20, 
            flex: 1, 
            backgroundColor: colors.white}}>
            <ScrollView showsVerticalScrollIndicator = {false}>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 40}}>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 22,
                        color:colors.dark
                    }}>FOX</Text>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 22,
                        color:colors.secondary
                    }}>HUB</Text>
                </View>

                <View style={{
                    marginTop: 70
                }}>
                    <Text style={{
                        fontSize: 27,
                        fontWeight: 'bold',
                        color: colors.dark
                    }}>Welcome Back,</Text>

                    <Text style={{
                        fontSize: 19,
                        fontWeight: 'bold',
                        color: colors.light
                    }}>Sign in to continue</Text>
                </View>

                <View style={{marginTop: 20}}>
                    <View style={STYLES.inputContainer}>
                    <MaterialIcons
              name="mail-outline"
              color={colors.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput placeholder="Email" style={STYLES.input} />
                    </View>

                    <View style={STYLES.inputContainer}>
            <MaterialIcons
              name="lock-outline"
              color={colors.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="Password"
              style={STYLES.input}
              secureTextEntry
            />
          </View>
          <View style={STYLES.btnPrimary}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
              Sign In
            </Text>
          </View>
          <View
            style={{
              marginVertical: 20,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={STYLES.line}></View>
            <Text style={{marginHorizontal: 5, fontWeight: 'bold'}}>OR</Text>
            <View style={STYLES.line}></View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={STYLES.btnSecondary}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>
                Sign in with
              </Text>
              <Image
                style={STYLES.btnImage}
                source={require('../assets/images/facebook.png')}
              />
            </View>
            <View style={{width: 10}}></View>
            <View style={STYLES.btnSecondary}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>
                Sign in with
              </Text>
              <Image
                style={STYLES.btnImage}
                source={require('../assets/images/google.png')}
              />
            </View>
          </View>


                </View>

          <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginTop: 40,
            marginBottom: 20,
          }}>
          <Text style={{color: colors.light, fontWeight: 'bold'}}>
            Don`t have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{color: colors.pink, fontWeight: 'bold' , marginLeft: 5}}>
              Sign up
            </Text>
          </TouchableOpacity>
          </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn;