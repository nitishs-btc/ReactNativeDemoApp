import { Alert, TextInput } from 'react-native';
import { createRef, useState } from 'react';
import { TextFieldType } from '../Helper/TextFieldType';
import { LoginScreenViewComp } from './LoginScreenView';
import axios from 'axios';
import { NavigationProp } from '@react-navigation/native';
export default function LoginScreen() {
    let textInputRef = createRef<TextInput>();

  const [data, setData] = useState();
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [grantType,setGrantType] = useState<string>('password')

  function nextButtonAction() {
    textInputRef.current?.focus()
  }

  async function onSubmitFormHandler() {
    console.log('submit api called');
    if (!username.trim() || !password.trim()) {
      alert("Password or Email is invalid");
      return;
    }

    try {
      const response = await axios.post(`http://192.168.0.171:9090/login`, {
        username,
        password,
        grantType
      });
      console.log('response is, ', response.request);
      if (response.status >= 200 || response.status<=299) {
        console.log('response is, ', response.data);
        // Parse the response as JSON
        const apiData = await response.data;
        setData(apiData);
        console.warn('Welcome, ', apiData.name)
        
      } else {
        throw new Error("An error has occurred");
      }
    } catch (error) {
      console.log('error is,', error);
      alert("An error has occurred");
    }
  };

  function enterButtonAction() { 
    console.log('This button called')
    console.log('email id, ', setUsername)
    console.log('password is, ', password)
    onSubmitFormHandler()
  }

  const getValueFromTextField = (value: string, type: TextFieldType): void => { 

    switch (type) { 
      case TextFieldType.Email:
        console.log('this get called')
        setUsername(value)
        return
      case TextFieldType.Password:
        setPassword(value)
        return
      case TextFieldType.Phone, TextFieldType.Firstname, TextFieldType.Secondname, TextFieldType.Name:
        return
    }
  }

  const keyboardSubmitButtonClicked = (value: string, type: TextFieldType): void => { 

    switch (type) { 
      case TextFieldType.Email:
        console.log('this get called')
        setUsername(value)
        nextButtonAction()
        return
      case TextFieldType.Password:
        setPassword(value)
        enterButtonAction()
        return
      case TextFieldType.Phone, TextFieldType.Firstname, TextFieldType.Secondname, TextFieldType.Name:
        return
    }
  }

  return (
      <LoginScreenViewComp onLoginAction={enterButtonAction} onKeyboardSubmitButtonAction={keyboardSubmitButtonClicked} onTextValueChangeAction={getValueFromTextField} ref={textInputRef}/>
  );
}
