import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Login/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileView from './ProfileView';

type RootStackParamList = {
  LoginScreen: undefined;
  ProfileView: { data: any };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName='Login'>
    //     <Stack.Screen name='Login' component={LoginScreen} />
    //     <Stack.Screen name='Profile' component={ProfileView} initialParams={data} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <LoginScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});