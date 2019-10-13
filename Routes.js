import React from 'react'
import { Router, Scene } from 'react-native-router-flux';
import Home from './src/screens/Home.js';
import Message from './src/screens/Message.js';
import Splash from './src/screens/Splash.js';
import Auth from './src/screens/Authentication.js';

const Routes = () => (
    <Router>
        <Scene key="root" hideNavBar={true}>
            <Scene key = "home" component = {Home} />
            <Scene key = "splash" component = {Splash} initial = {true} />
            <Scene key = "message" component = {Message}/>
            <Scene key = "auth" component = {Auth}/>
        </Scene>
    </Router>
)
export default Routes
