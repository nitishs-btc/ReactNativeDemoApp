import { TextInput } from 'react-native';
import { createRef, useState } from 'react';
import { TextFieldType } from './Helper/TextFieldType';
import { AppViewComp } from './AppView';


export default function App() {

  let textInputRef = createRef<TextInput>();

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  function nextButtonAction() {
    textInputRef.current?.focus()
  }

  function enterButtonAction() { 
    console.log('This button called')
  }

  const getValueFromTextField = (value: string, type: TextFieldType): void => { 

    switch (type) { 
      case TextFieldType.Email:
        console.log('this get called')
        setEmail(value)
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
    <AppViewComp onLoginAction={enterButtonAction} onSubmitAction={getValueFromTextField} ref={textInputRef}/>
  );
}
