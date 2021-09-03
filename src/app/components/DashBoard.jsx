import React from 'react'
import { connect } from 'react-redux'
export const Dashboard = ({groups}) =>(
    <div>
        <h2>Dashboard</h2>
        {groups.map(group=>(
            <div>
                {group.name}
            </div>
        ))}
    </div>
)

function mapStateToProps(state){
    return {
        groups:state.groups
    }
}

export const ConnectedDashboard = connect(mapStateToProps) (Dashboard)