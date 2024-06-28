import React from "react";
import { View, Text } from "react-native";

interface ProfileViewProps {
    data: any
}
 
interface ProfileViewState {
    
}
 
class ProfileView extends React.Component<ProfileViewProps, ProfileViewState> {
    
    render() { 
        return (  
            <View>
                <Text>Hello, { this.props.data.name}</Text>
            </View>
        );
    }
}
 
export default ProfileView;