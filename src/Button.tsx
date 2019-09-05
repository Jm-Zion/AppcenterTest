import React from 'react'
import {TouchableOpacity,Text, TouchableOpacityProps} from 'react-native';



export default ({style}:TouchableOpacityProps) => {
    return (
        <TouchableOpacity style={[{backgroundColor: 'blue'}, style]}>
            <Text style={{color: 'white'}}>Button</Text>
        </TouchableOpacity>
    );
}   