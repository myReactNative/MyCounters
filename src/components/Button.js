import React, { PropTypes } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


const styles = StyleSheet.create({
    button: {
        padding: 10, 
        borderColor: '#cccccc',
        backgroundColor: '#cccccc',
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center', 
        margin: 5
    }
})

const Button = (props) => {
    const { children, onClick } = props

    return (
        <TouchableOpacity onPress={onClick}>
            <Text style={styles.button}>{children}</Text>
        </TouchableOpacity>
    )
}

Button.PropTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Button

