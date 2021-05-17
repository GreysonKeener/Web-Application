import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'

import styled from 'styled-components'

import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 30px 30px 30px;
`





class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user1: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllUsers().then(user1 => {
            this.setState({
                user1: user1.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { user1, isLoading } = this.state

        const columns = [
           
            {
                Header: 'UserName',
                accessor: 'Username',
                filterable: true,
                
            },
            {
                Header: 'Password',
                accessor: 'Password',
                filterable: true,
                width: 120,
            },
            
           
           
        ]

        let showTable = true
        if (!user1.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={user1}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={5}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default Users