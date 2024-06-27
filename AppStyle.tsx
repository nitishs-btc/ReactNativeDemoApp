import {StyleSheet} from 'react-native';

export const appStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f8fffe',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textViewStyleSheet: {
      borderRadius: 30,
      borderWidth: 2,
      width: '90%',
      height: 60,
      alignSelf: 'center',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      marginTop: 20,
      marginLeft: 22,
      marginBottom: 0,
      marginRight: 22
    },
    buttonStyle: {
      backgroundColor: '#008C82',
      marginRight: 22,
      width: 160,
      height: 60,
      alignSelf: 'flex-end',
      marginTop: 30,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30
    },
    buttonTextStyle: {
      fontFamily: 'Inter',
      fontWeight: '500',
      fontSize: 16,
      color: 'white'
    }
  
  });