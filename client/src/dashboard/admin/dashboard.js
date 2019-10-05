import React, { Component } from 'react'
import Sidebar from './components/sidebar/sidebar'

export default class AdminDashboard extends Component {
    render() {
        return (
            <div>
                <Sidebar/>
                <p>This is the dashboard</p>
            </div>
        )
    }
}
