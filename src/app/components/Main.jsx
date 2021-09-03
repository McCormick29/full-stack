import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../store'
import { ConnectedDashboard } from './DashBoard'

export const Main = ()=> (
    <Provider store={store}>
        <div>
            {/* DashBoard Goes Here */}
            <ConnectedDashboard />
        </div>
    </Provider>
)

