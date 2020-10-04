import React from 'react';
import {AppBar ,Tab,Tabs}from '@material-ui/core';
import Bloc from "./Bloc"
import Soon from "./soon"
import Books from "./Books"
const Home=({props})=> {
    const [selectedTab, setSelectedTab] = React.useState(0);
    const handleChange = (event, newValue) => {
      setSelectedTab(newValue);
    };
    
    return (
        <>
        <AppBar position="static">
            <Tabs 
                variant="fullWidth" 
                value={selectedTab} 
                onChange={handleChange} >

                <Tab label="1 ere Année"/>
                <Tab label="2 eme Année"/>
                <Tab label="3 eme Année"/>
                <Tab label="Books"/>
            </Tabs>
        </AppBar>
        {selectedTab === 0 && <Bloc/>}
        {selectedTab === 1 && <Soon/>}
        {selectedTab === 2 && <Soon/>}
        {selectedTab === 3 && <Books/>}


        </>
    );
}

export default Home;