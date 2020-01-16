import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Button} from "react-native-web";

const GameOverScreen = props => {
    return(
        <View style={style.screen}>
            <Text>The Game is Over!</Text>
            <Text>Number of rounds: {props.roundsNumber}</Text>
            <Text>Number was: {props.userNumber}</Text>
            <Button onPress={props.onRestart} title="NEW GAME"/>
        </View>
    );
};

const style = StyleSheet.create({

    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default GameOverScreen;
