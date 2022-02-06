import React, {useState, useContext} from 'react'
import {Context} from "../Context"
import { Link } from 'react-router-dom'
import {
    FormGroup,
    Input,
    InputLabel,
    FormControl,
    Button
} from "@mui/material"

const SignUpComponent = () => {
    const {signUp, setIsModalOpen} = useContext(Context)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    return (
        <div>
            <form className="p-3 sign-up-form mx-auto mt-5" onSubmit={() => signUp(email, password)}>
                <FormGroup>
                    <FormControl className="mb-3">
                        <InputLabel htmlFor="email">Email address</InputLabel>                        
                        <Input 
                            id="email" 
                            autoFocus={true}
                            type="text" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required
                        />
                    </FormControl>
                    <FormControl className="mb-3">
                        <InputLabel htmlFor="password" shrink={password !== "" ? true : false}>Password</InputLabel>     
                        <Input 
                            type="password" 
                            id="text" 
                            value={password}
                            onChange={(e) => setPassword(e.target.password)}
                            required/>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="confirmPassword" shrink={confirmPassword !== "" ? true : false}>Confirm password</InputLabel>     
                        <Input 
                            type="password" 
                            id="confirmPassword" 
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.password)}
                            required/>
                    </FormControl>
                </FormGroup>
                <Button 
                    type="submit" 
                    variant="outlined" 
                    className="mt-3"
                >
                    Sign Up
                </Button>
                <div className="d-flex flex-row mt-3 justify-content-evenly">
                    <p>Already have an accout?</p>
                    <Link to="/" onClick={() => setIsModalOpen(true)}>Log In</Link>
                </div>
            </form>
        </div>
    );
};

export default SignUpComponent;