import React, { Component } from 'react'
import styled from 'styled-components'


import Links from './Links'

const Container = styled.div.attrs({
    className: 'container',
})`
    height: 215px;
`

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-light bg-primary',
})`
    margin-bottom: 10 px;
`

class NavBar extends Component {
    render() {
        return (
            <Container>
                <Nav>
                    
                    <Links />
                </Nav>
            </Container>
        )
    }
}

export default NavBar
