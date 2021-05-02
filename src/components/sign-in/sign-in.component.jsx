import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({ password: "", email: "" });
    }

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="sign-in">
                <h1 className="title">I already have an account</h1>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput label="email" type="email" name="email" value={this.state.email} onChange={this.handleChange} required />

                    <FormInput label="password" type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
 
                    {/* <input type="submit" value="Submit Form" /> */}

                    <CustomButton type="submit"> Sign In</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;