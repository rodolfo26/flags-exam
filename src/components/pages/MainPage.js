import React from 'react'
import { Box } from '@material-ui/core';
import { Header, Body, Footer } from '../layout'


export function MainPage(props) {

    return (
        <>
            <div className="App">
                <Box display="flex" flexDirection="column" height="100vh">
                    <Header/>
                    <Body/>
                    <Footer/>
                </Box>
            </div>
        </>
    )
}
