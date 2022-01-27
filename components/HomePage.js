import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { resetPassword } from '../services';
import { AntDesign } from '@expo/vector-icons';

import { Feather } from '@expo/vector-icons';

const HomePage = () => {
    const [email, setEmail] = useState('')
    const reset = () => {
        resetPassword(email)
        navigation.navigate("Login")
    }
    return (
        <View style={styles.container}>
            <View style={styles.controlView}>
                <View style={styles.viewDirection}>
                    <TouchableOpacity>
                        <Feather style={styles.iconDesign} name="camera" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.textDesign}>CodeTribe Sanitary Pads</Text>
                    <TouchableOpacity>
                        <AntDesign style={styles.cameraiconDesign} name="user" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                <View horizontal={true} style={styles.viewDirection2}>
                    <View style={styles.img} />
                </View >

                <Text style={styles.textDesign3}>Category</Text>

                <View style={styles.viewDirection}>
                    <TouchableOpacity>
                        <Text style={styles.textDesign4}>Donate</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.textDesign4}>Claim coupons</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.viewDirection}>
                         <TouchableOpacity>
                            <Text style={styles.textDesign4}>Track Record</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.textDesign4}>Q and A (guidance)</Text>
                        </TouchableOpacity>

                </View>
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',

    },
    iconDesign: {
        marginRight: 34,
    },
    cameraiconDesign: {
        marginLeft: 34,
    },
    loginButton: {
        height: 30,
        width: 250,
        color: 'Grey',
        paddingHorizontal: 100,
        paddingVertical: 5,
        backgroundColor: 'pink',
        borderRadius: 60,
        marginTop: 10,
    },
    img: {
        height: 200,
        width: 300,
        marginBottom: 0,
        backgroundColor: 'pink',
        borderRadius: 10,
    },
    img2: {
        height: 140,
        width: 140,
        marginLeft: 10,
        marginTop: 10,
        backgroundColor: 'pink',
        borderRadius: 10,
    },
    fieldText_Design: {
        backgroundColor: '#fff',
        width: 250,
        height: 30,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 10,
    },
    textDesign: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'brush-script mt',
        marginTop:5,
    },
    textDesign3: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'brush-script mt',
        marginRight: 0,
        marginTop: 20,
    },
    textDesign4: {
        color: 'white',
        borderRadius: 10,
        paddingVertical: 65,
        paddingHorizontal: 20,
        fontSize: 15,
        fontFamily: 'brush-script mt',
        marginLeft: 10,
        marginTop: 20,
        backgroundColor: 'pink',
        height: 140,
        width: 140,
    },
    textDesign5: {
        color: 'pink',
        fontSize: 15,
        fontFamily: 'brush-script mt',
        marginRight: 5,
        marginTop: 20,
    },
    signUpText_Design: {
        color: 'pink',
        marginTop: 55,
        fontSize: 15,
        fontFamily: 'brush-script mt',
        marginTop: 10,

    },
    viewDirection: {
        flexDirection: 'row',
        // marginBottom:100,
    },
    viewDirection2: {
        flexDirection: 'row',
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    controlView: {
        marginBottom: 20,
    },
});

export default HomePage;
