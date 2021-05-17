import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    Rank Your TV Shows
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/tv/list" className="nav-link">
                                List Of All TV Shows Added
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/tv/create" className="nav-link">
                                Create A New TV Show
                            </Link>

                        </Item>
                        <Item>
                        <Link to="/tv/login" className="nav-link">
                                Login
                            </Link>
                            </Item>
                            <Link to="/tv/Users" className="nav-link">
                                Users
                            </Link>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links
