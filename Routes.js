import React from 'react'
import { Router, Scene } from 'react-native-router-flux';
import Home from './src/components/Home.js';
import About from './src/components/About.js';

const Routes = () => (
    <Router>
        <Scene key="root" duration={0} hideNavBar={true}>
            <Scene key = "home" component = {Home} title = "Messages" initial = {true} />
            <Scene key = "about" component = {About} title = "Online"/>
        </Scene>
    </Router>
)
export default Routes
