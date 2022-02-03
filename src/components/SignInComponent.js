import React from 'react';
import {
    Input,
    Button,
    FormControl,
    InputLabel,
    FormGroup
} from "@mui/material"

const SignInComponent = () => {
    return (
        <div className="container">
            <div className="row">
                <h1>Sign In</h1>
                <form className="w-50 mx-auto p-3 sign-in-form" style={{maxWidth: "400px", height: "200px"}}>
                    <FormGroup>
                        <FormControl className="mb-3">
                            <InputLabel htmlFor="email">Email address</InputLabel>                        
                            <Input id="email" type="text" required/>
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="password">Password</InputLabel>     
                            <Input type="password" id="password" required/>
                        </FormControl>
                    </FormGroup>
                    <Button type="submit" variant="outlined" className="mt-3">Log In</Button>
                </form>
            </div>
        </div>
    );
};

export default SignInComponent;