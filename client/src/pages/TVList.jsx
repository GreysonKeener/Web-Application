import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'

import styled from 'styled-components'

import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 30px 30px 30px;
`



const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class DeleteMovie extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Delete TV Show ${this.props.id} ?`,
            )
        ) {
            api.deleteTV(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}
class TVList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tv: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllShows().then(tv => {
            this.setState({
                tv: tv.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { tv, isLoading } = this.state

        const columns = [
           
            {
                Header: 'Name',
                accessor: 'name',
                filterable: true,
                
            },
            {
                Header: 'Rating',
                accessor: 'rating',
                filterable: true,
                width: 120,
            },
            {
                Header: '',
                accessor: '',
                width: 80,
                Cell: function(props) {
                    return (
                        <span>
                            <DeleteMovie id={props.original._id} />
                        </span>
                    )
                },
            },
           
           
        ]

        let showTable = true
        if (!tv.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={tv}
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

export default TVList
