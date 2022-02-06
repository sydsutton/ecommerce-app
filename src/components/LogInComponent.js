import React, {useState, useContext} from 'react';
import {
    Input,
    Button,
    FormControl,
    InputLabel,
    FormGroup,
    Modal,
    Box
} from "@mui/material"

import SignUp from "./SignUpComponent"

import { Link } from 'react-router-dom';

import {Context} from "../Context"

const LogInComponent = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isChildModalOpen, setIsChildModalOpen] = useState(false)

    const {isModalOpen, setIsModalOpen, logIn, setIsDrawerOpen, isDrawerOpen} = useContext(Context)

    return (
        <Modal 
            open={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
        >
            <Box className="signin-modal">
                <form className="p-4 sign-in-form pt-2" onSubmit={() => logIn(email, password)}>
                    <h4 className="mb-3">Log In</h4>
                    <hr className="mb-3" />
                    <FormGroup>
                        <FormControl className="mb-3">
                            <InputLabel htmlFor="email">Email address</InputLabel>                        
                            <Input 
                                autoFocus={true}
                                id="email" 
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
                                id="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.password)}
                                required/>
                        </FormControl>
                    </FormGroup>
                    <Button 
                        type="submit" 
                        variant="outlined" 
                        className="mt-3"
                    >
                        Log In
                    </Button>
                    <div className="d-flex flex-row mt-3 justify-content-evenly">
                        <p>Don't have an account?</p>
                        <Button
                            onClick={() => {
                                setIsChildModalOpen(true)
                            }}
                        >
                            Sign Up
                        </Button>
                    </div>
                </form>
                <SignUp isChildModalOpen={isChildModalOpen} setIsChildModalOpen={setIsChildModalOpen} />
            </Box>
        </Modal>
    );
};

export default LogInComponent;