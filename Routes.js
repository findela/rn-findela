import React from 'react'
import { Router, Scene } from 'react-native-router-flux';
import Home from './src/screens/Home.js';
import Message from './src/screens/Message.js';
import Splash from './src/screens/Splash.js';

const Routes = () => (
    <Router>
        <Scene key="root" duration={0} hideNavBar={true}>
            <Scene key = "home" component = {Home} />
            <Scene key = "splash" component = {Splash} initial = {true} />
            <Scene key = "message" component = {Message}/>
        </Scene>
    </Router>
)
export default Routes
