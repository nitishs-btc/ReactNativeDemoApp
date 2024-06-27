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
import { appStyles } from "./AppStyle";
import CustomButton from "./Components/CustomButton";
import TextField from "./Components/TextField";
import { TextFieldType } from "./Helper/TextFieldType";

interface AppViewProps {
  onSubmitAction(value: string, type: TextFieldType): void;
  onLoginAction(): void;
}

class AppView extends React.Component<
  AppViewProps & { forwardedRef: Ref<TextInput> }
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
          source={require("./assets/background_image.png")}
          style={{ width: "100%", height: "100%" }}>
          <ScrollView automaticallyAdjustKeyboardInsets={true}>
            <Image
              source={require("./assets/thom_logo.png")}
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
              viewStyleSheet={appStyles.textViewStyleSheet}
              defaultBorderColor="#FFFFFF"
              enterKeyHint="next"
              inputMode="email"
              onSubmitAction={this.props.onSubmitAction}
              ref={null}
              secureTextEntry={false}
              type={TextFieldType.Email}
            />

            <TextField
              ref={this.props.forwardedRef}
              placeholderText="Password"
              borderColorOnActive="#00C6B7"
              viewStyleSheet={appStyles.textViewStyleSheet}
              defaultBorderColor="#FFFFFF"
              enterKeyHint="done"
              inputMode="text"
              onSubmitAction={this.props.onSubmitAction}
              secureTextEntry={true}
              type={TextFieldType.Password}
            />

            <CustomButton
              viewStyleSheet={appStyles.buttonStyle}
              isActive={true}
              onLoginAction={this.props.onLoginAction}
              textStyleSheet={appStyles.buttonTextStyle}
            />

            <StatusBar style="light" />
          </ScrollView>
        </ImageBackground>
      </LinearGradient>
    );
  }
}

export const AppViewComp = forwardRef<TextInput, AppViewProps>((props, ref) => {
  return <AppView {...props} forwardedRef={ref} />;
});
