import React, { Component } from "react";
import { Text, View, StyleSheet, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native'


class HomeCategory extends Component {
    render() {
        return (
            <View style={{ height: 80, width: 100, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd', }}>
                <View style={{ flex: 2 }}>
                    <Image source={this.props.imageUri} 
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                    />
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 5, alignItems: 'center', paddingBottom: 5, }}>
                    <Text>{this.props.name}</Text>
                </View>
            </View>
        )
    }
}

export default HomeCategory;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});