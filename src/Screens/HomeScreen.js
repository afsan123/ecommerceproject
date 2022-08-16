import React from "react";
import { Text, View, BackHandler, StyleSheet } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-web";
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
                            imageUri={"https://cdn-fnknc.nitrocdn.com/jwqHRGAzpUgGskUSHlppNQzwuXgXIKwg/assets/static/optimized/rev-ea281f4/wp-content/uploads/2021/12/luca-faloni-denim-shirt.jpeg"}
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