import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Homepage = ({text}) => {
    return (
        <>
        <View style={styles.task}>
            <Text style={{padding: 10}}>{text}</Text>
        </View>
        </>
    )
}

export default Homepage;

const styles = StyleSheet.create({
    task: {
        width: '90%',
        height: 50,
        backgroundColor: '#fff',
        alignSelf: 'center',
        margin:10,
        borderRadius: 10,
        borderColor:'#D3D3D3',
        borderWidth: 1,
    },

});
