import React from 'react'
import { View, Text } from 'react-native';
import TopNavigation from './TopNavigation'

const Home = () => {
    return (
        <View>
            <TopNavigation currentScreen={'about'}/>
            <View style = {{ boxShadow: 90, borderTopLeftRadius: 40, borderTopRightRadius: 40, zIndex:1, top: -40, padding: 128, height: "100%", width: "100%", backgroundColor: '#FFFFFF' }}>
                <Text>This is About!</Text>
            </View>
        </View>
    )
}
export default Home
