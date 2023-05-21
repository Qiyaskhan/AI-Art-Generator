import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
const CustomBottomSheet = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleBottomSheet = () => {
        setIsOpen(!isOpen);
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={toggleBottomSheet}>
                <Text style={styles.buttonText}>{isOpen ? 'Close' : 'Open'} Bottom Sheet</Text>
            </TouchableOpacity>
            {isOpen && (
                <View style={styles.bottomSheet}>
                    <Text style={styles.bottomSheetText}>This is the content of the bottom sheet.</Text>
                </View>
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    bottomSheet: {
        backgroundColor: 'red',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 5,
        height: 300
    },
    bottomSheetText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default CustomBottomSheet;