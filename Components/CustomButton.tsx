import React from "react";
import { StyleProp, View, ViewStyle, Text, Image, TouchableHighlight, TextStyle, TouchableOpacity } from "react-native";

interface CustomButtonProps {
    viewStyleSheet: StyleProp<ViewStyle>,
    isActive: boolean,
    onLoginAction(): void,
    textStyleSheet: StyleProp<TextStyle>,
}
 
interface CustomButtonState {
    isActive: boolean
}
 
class CustomButton extends React.Component<CustomButtonProps, CustomButtonState> {
    state = {
        isActive : false
    }

    constructor(props: CustomButtonProps) { 
        super(props)
    }

    static getDerivedStateFromProps(props: CustomButtonProps) {
        return {isActive: props.isActive}
    }

    render() { 
        return ( 
            <TouchableOpacity onPress={this.props.onLoginAction}>
                <View
                    style={this.props.viewStyleSheet}>
                    <Text style={this.props.textStyleSheet}>Login</Text>
                    <Image source={require('../assets/right_arrow.png')}
                        style={{ alignSelf: 'center', marginLeft: 30 }}/>
                </View>
            </TouchableOpacity>
         );
    }
}
 
export default CustomButton;