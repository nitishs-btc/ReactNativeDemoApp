import React, { Ref, forwardRef } from 'react';
import { EnterKeyHintTypeOptions, InputModeOptions, StyleProp, StyleSheet, TextInput, View, ViewStyle } from 'react-native';
import { TextFieldType } from '../Helper/TextFieldType';

interface TextFieldProps {
    viewStyleSheet: StyleProp<ViewStyle>,
    placeholderText: string,
    borderColorOnActive: string,
    defaultBorderColor: string,
    enterKeyHint: EnterKeyHintTypeOptions,
    inputMode: InputModeOptions,
    type: TextFieldType,
    onSubmitAction(value: string, type: TextFieldType): void,
    secureTextEntry: boolean
}
 
interface TextFieldState {
    borderColor: string,
    textValue: String
}
 
class TextFieldComponent extends React.Component<TextFieldProps & { forwardedRef: Ref<TextInput> } , TextFieldState> {
    
    state = { 
        borderColor: this.props.defaultBorderColor,
        textValue: ""
    }
    render() { 
        const {
            viewStyleSheet,
            placeholderText,
            borderColorOnActive, 
            defaultBorderColor,
            enterKeyHint,
            inputMode,
            type,
            secureTextEntry
        } = this.props

        return ( 
            <View style={[
                {
                    borderColor: this.state.borderColor
                },viewStyleSheet]}>
                <TextInput
                    style={{ height: 40, width: '90%', marginLeft: 30, marginRight: 30, alignSelf: 'flex-start', justifyContent: 'center', fontFamily: 'Inter', fontWeight: '500', fontSize: 16, color: '#008C82' }}
                    cursorColor={'#008C82'}
                    onFocus={() => {
                        this.setState({ borderColor: borderColorOnActive })
                    }}
                    onEndEditing={() => {
                        this.setState({ borderColor: defaultBorderColor })
                    }}
                    placeholder={placeholderText}
                    placeholderTextColor={'#729396'}
                    enterKeyHint={enterKeyHint}
                    inputMode={inputMode}
                    ref={this.props.forwardedRef}
                    onChangeText={(value) => this.setState({ textValue: value })}
                    value={this.state.textValue}
                    onSubmitEditing={() => { this.props.onSubmitAction(this.state.textValue, type) }}
                    secureTextEntry={secureTextEntry}
                ></TextInput>
            </View>
         );
    }
}

const TextField = forwardRef<TextInput, TextFieldProps>((props, ref) => {
    return <TextFieldComponent {...props} forwardedRef={ref} />;
});

export default TextField;