import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../assets/styles/global';

export default function Home() {
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.font24}>Home Screen</Text>
            <Text style={globalStyles.titleText}>Home Screen 1</Text>
            <Text style={globalStyles.robotoReg}>Home Screen 1</Text>
            <Text style={globalStyles.robotoBold}>Home Screen 1</Text>

            

        </View>
    )
}

