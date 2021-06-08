import React from 'react';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
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

    handleSubmit = async (event) => {
        event.preventDefault();

        const {email, password}=this.state;
        try{

            await auth.signInWithEmailAndPassword(email,password);
            
            this.setState({ password: "", email: "" }); //  

        }
        catch(error){
            console.log(error);
        }
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

                    <div className="buttons">
                        <CustomButton type="submit"> Sign In</CustomButton>

                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;