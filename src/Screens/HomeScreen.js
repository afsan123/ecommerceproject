import React from "react";
import { Text, View, BackHandler, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native'
import HomeCategory from "../Components/HomeCategory";



const HomeScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView scrollEventThrottle={16}>
                <View style={{ height: 130, marginTop: 20 }}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        
                        <HomeCategory 
                            imageUri={require("../assets/shirt.jpg")}
                            name="Shirts"
                        />
                        <HomeCategory 
                            imageUri={require("../assets/dress.jpeg")}
                            name="Dress"
                        />
                        <HomeCategory 
                            imageUri={require("../assets/jeans.jpg")}
                            name="Jeans"
                        />
                        <HomeCategory 
                            imageUri={require("../assets/hoodie.jpg")}
                            name="Hoodie"
                        />
                        
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    )

}


export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});