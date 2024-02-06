import React from 'react'
import { Container } from 'react-bootstrap'
// import * as React from "https://cdn.skypack.dev/react@17.0.1";
// import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
const Testingtable = () => {
    const [values, setValues] = React.useState({
        name: '',
        email: '',
        gender: ''
    })

    const [validations, setValidations] = React.useState({
        name: '',
        email: '',
        gender: ''
    })

    const validateAll = () => {
        const { name, email, gender } = values
        const validations = { name: '', email: '', gender: '' }
        let isValid = true

        if (!name) {
            validations.name = 'Name is required'
            isValid = false
        }

        if (name && name.length < 3 || name.length > 50) {
            validations.name = 'Name must contain between 3 and 50 characters'
            isValid = false
        }

        if (!email) {
            validations.email = 'Email is required'
            isValid = false
        }

        if (email && !/\S+@\S+\.\S+/.test(email)) {
            validations.email = 'Email format must be as example@mail.com'
            isValid = false
        }

        if (!gender) {
            validations.gender = 'Gender is required'
            isValid = false
        }

        if (!isValid) {
            setValidations(validations)
        }

        return isValid
    }

    const validateOne = (e) => {
        const { name } = e.target
        const value = values[name]
        let message = ''

        if (!value) {
            message = `${name} is required`
        }

        if (value && name === 'name' && (value.length < 3 || value.length > 50)) {
            message = 'Name must contain between 3 and 50 characters'
        }else {
            message = 'no characters'
        }

        if (value && name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
            message = 'Email format must be as example@mail.com'
        }

        setValidations({ ...validations, [name]: message })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const isValid = validateAll()

        if (!isValid) {
            return false
        }

        // alert(JSON.stringify(values))
    }

    const { name, email  } = values

    const {
        name: nameVal,
        email: emailVal,
        
    } = validations

    return (
        <div>
            <Container>
                <h1>Simple form</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name:
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={handleChange}
                                onBlur={validateOne}
                            />
                        </label>
                        <div>{nameVal}</div>
                    </div>

                    <div>
                        <label>Email:
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleChange}
                                onBlur={validateOne}
                            />
                        </label>
                        <div>{emailVal}</div>
                    </div>

                    <div>
                       
                        
                    </div>

                    <button type="submit">Send</button>
                </form>

                
            </Container>
        </div>
    )
}
export default Testingtable
