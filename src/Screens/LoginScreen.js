import React from "react";
import { Text, View, StyleSheet, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const LoginScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{alignItems: 'center'}}>
                <View style={{alignItems: 'center'}}>
                    <Image source={{uri: "https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/280271835_175588134911403_7009867603761312092_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFd283XdKzM7fZB0Ph5u0CFbJ2cBQ1KyuNsnZwFDUrK47XKqy_ZMBgRsF3e5FQRPPOmIM8WO7wOxz9HNdmGtmzv&_nc_ohc=0DoHl8LhAmcAX8C6L5g&_nc_ht=scontent.fdac24-1.fna&oh=00_AT-_6B4V1OdRE99SI4az5QePHb_8z0nedmAJNsz7VtyKcA&oe=62F801DF"}}
                    style={styles.image}/>
                </View>
                <Text 
                    style={{
                        fontSize: 28,
                        fontWeight: '700',
                        textAlign: 'left',
                        marginBottom: 20,
                        marginTop: 20,
                        }}>
                        Login to Your Account
                </Text>

                <View style={styles.inputView}>
                    <MaterialIcons name="email" size={24} color="black" />
                    <TextInput style={{
                        flex: 1,
                        paddingHorizontal: 12,
                    }} 
                    placeholder="Email"/>
                </View>
                <View style={styles.inputView}>
                    <AntDesign name="lock" size={24} color="black" />
                    <TextInput style={{
                        flex: 1,
                        paddingHorizontal: 12,
                    }} 
                    secureTextEntry={true}
                    placeholder="Password"/>
                </View>

                <TouchableOpacity style={styles.buttonView} onPress = {() => navigation.navigate('Signup')}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
    },

    image: {
        width: 150,
        height: 150,
        borderColor: '#F6F5F1',
        borderWidth: 2,
        borderRadius: 75,
        marginBottom: 40,
        
    },

    inputView: {
        width: '90%',
        height: 65,
        backgroundColor: '#f1f3f6',
        borderRadius: 8,
        paddingHorizontal: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        marginBottom: 20,
    },

    buttonView: {
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        backgroundColor: "#F1F1F1",
        alignItems:'center',
        justifyContent:'center',
        width:"70%",
        height:"10%",
        borderRadius: 8,
    }
    
})

export default LoginScreen