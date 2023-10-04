import React from 'react'
import ContextToggleProvider from './Toggle'
import App from '../App'
import ReciptionProvider from './ReciptionApi'
export default function Root() {
    return (
        <>
            <ReciptionProvider>
                <ContextToggleProvider>
                    <App />
                </ContextToggleProvider>
            </ReciptionProvider>


        </>
    )
}
