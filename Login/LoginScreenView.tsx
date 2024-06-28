import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React, { Ref, forwardRef } from "react";
import {
  ImageBackground,
  Image,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import { loginScreenStyles } from "./LoginScreenStyles";
import CustomButton from "../Components/CustomButton";
import TextField from "../Components/TextField";
import { TextFieldType } from "../Helper/TextFieldType";

interface LoginScreenViewProps {
  onKeyboardSubmitButtonAction(value: string, type: TextFieldType): void;
  onTextValueChangeAction(value: string, type: TextFieldType): void;
  onLoginAction(): void;
}

class LoginScreenView extends React.Component<
LoginScreenViewProps & { forwardedRef: Ref<TextInput> }
> {
  render() {
    return (
      <LinearGradient
        colors={[
          "#008C82",
          "#00C6B7",
          "#00C6B7B2",
          "#00C6B799",
          "#00C6B780",
          "#00C6B74D",
        ]}>
        <ImageBackground
          source={require("../assets/background_image.png")}
          style={{ width: "100%", height: "100%" }}>
          <ScrollView
            automaticallyAdjustKeyboardInsets={true}
            keyboardShouldPersistTaps="never">
            <Image
              source={require("../assets/thom_logo.png")}
              style={{ alignSelf: "center", marginTop: 120 }}
            />

            <Text
              style={{
                fontFamily: "Inter",
                fontWeight: "700",
                fontSize: 28,
                color: "#2A4241",
                marginTop: 160,
                marginLeft: 22,
              }}>
              Login
            </Text>

            <TextField
              placeholderText="Email Id"
              borderColorOnActive="#00C6B7"
              viewStyleSheet={loginScreenStyles.textViewStyleSheet}
              defaultBorderColor="#FFFFFF"
              enterKeyHint="next"
              inputMode="email"
              onKeyboardSubmitButtonAction={this.props.onKeyboardSubmitButtonAction}
              onTextValueChangeAction={this.props.onTextValueChangeAction}
              ref={null}
              secureTextEntry={false}
              type={TextFieldType.Email}
            />

            <TextField
              ref={this.props.forwardedRef}
              placeholderText="Password"
              borderColorOnActive="#00C6B7"
              viewStyleSheet={loginScreenStyles.textViewStyleSheet}
              defaultBorderColor="#FFFFFF"
              enterKeyHint="done"
              inputMode="text"
              onKeyboardSubmitButtonAction={this.props.onKeyboardSubmitButtonAction}
              onTextValueChangeAction={this.props.onTextValueChangeAction}
              secureTextEntry={true}
              type={TextFieldType.Password}
            />

            <CustomButton
              viewStyleSheet={loginScreenStyles.buttonStyle}
              isActive={true}
              onLoginAction={this.props.onLoginAction}
              textStyleSheet={loginScreenStyles.buttonTextStyle}
            />

            <StatusBar style="light" />
          </ScrollView>
        </ImageBackground>
      </LinearGradient>
    );
  }
}

export const LoginScreenViewComp = forwardRef<TextInput, LoginScreenViewProps>((props, ref) => {
  return <LoginScreenView {...props} forwardedRef={ref} />;
});
