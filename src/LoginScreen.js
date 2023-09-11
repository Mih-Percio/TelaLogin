import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native-web";

const LoginScreen = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleLogin = () => {
        console.log(`login com Email: ${email} e senha: ${password}`);
};
 
return (
<view>
    <Text>Tela de Login</Text>
    <TextInput
    />
</view>
);


};

export default LoginScreen;
