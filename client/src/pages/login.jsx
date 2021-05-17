import React, { Component } from 'react'

import api from '../api'
import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`



class login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            password: '',
            time:'',
            
        }
    }
    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }
    handleChangeInputpassword = async event => {
        const password = event.target.value
        this.setState({ password })
    }
    handleIncludelogin = async () => {
        const { name, password,time } = this.state
        const arrayTime = time.split('/')
        const payload = { name, password, time: arrayTime }

        await api.insertlogin(payload).then(res => {
            window.alert(`Login Successful`)
            this.setState({
                name: '',
                password: '',
                
            })
        })
    }

    
   

    render() {
        const { name, password } = this.state
        return (
            <Wrapper>
                <Title>Login</Title>

                <Label>UserName: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Label>Password: </Label>
                <InputText
                    type="text"
                    
                    value={password}
                    onChange={this.handleChangeInputpassword}
                />

                

                <Button onClick={this.handleIncludelogin}>Login</Button>
                
            </Wrapper>
        )
    }
}

export default login