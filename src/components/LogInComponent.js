import React, {useState, useContext} from 'react';
import {
    Input,
    Button,
    FormControl,
    InputLabel,
    FormGroup,
    Modal,
    Box,
    Snackbar,
    Alert
} from "@mui/material"

import SignUp from "./SignUpComponent"

import { Link } from 'react-router-dom';

import {Context} from "../Context"

const LogInComponent = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [isChildModalOpen, setIsChildModalOpen] = useState(false)
    const [snackbarOpen, setSnackbarOpen] = useState(false)

    const {isModalOpen, setIsModalOpen, logIn, setIsDrawerOpen, isDrawerOpen} = useContext(Context)

    const handleSubmit = async(e) => {
        e.preventDefault()
        setErrorMessage("")
        try {
            await logIn(email, password)
            .then(() => {
                setSnackbarOpen(true)
                setIsModalOpen(false)
            })
            .catch((error) => setErrorMessage(error.message))
        } catch {
            setErrorMessage("Sorry, something went wrong")
        }
    }

    const sliceError = (message) => {
        if(message.includes('Firebase:')){
            return message.replace('Firebase:', '')
        } else {
            return message
        }
    }
    
    return (
        <React.Fragment>
            <Modal 
                open={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            >
                <Box className="signin-modal">
                    <form className="p-4 sign-in-form pt-2" onSubmit={handleSubmit}>
                        <h4 className="mb-3">Log In</h4>
                        <hr className="mb-3" />
                        <div className="error-message">{errorMessage ? sliceError(errorMessage) : null}</div>
                        <FormGroup>
                            <FormControl className="mb-3">
                                <InputLabel htmlFor="email">Email address</InputLabel>                        
                                <Input 
                                    autoFocus={true}
                                    id="email" 
                                    type="text" 
                                    value={email} 
                                    onChange={(e) => {
                                        setErrorMessage("")
                                        setEmail(e.target.value)
                                    }} 
                                    required
                                />
                            </FormControl>
                            <FormControl className="mb-3">
                                <InputLabel htmlFor="password" shrink={password !== "" ? true : false}>Password</InputLabel>     
                                <Input 
                                    type="password" 
                                    id="password" 
                                    value={password}
                                    onChange={(e) => {
                                        setErrorMessage("")
                                        setPassword(e.target.value)
                                    }}
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
                        <div className="d-flex flex-row mt-3 justify-content-evenly align-items-center">
                            <div>Don't have an account?</div>
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
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={() => setSnackbarOpen(false)}
            >
                <Alert severity="success">
                    {`You've successfully logged in!`}
                </Alert>
            </Snackbar>
        </React.Fragment>
    );
};

export default LogInComponent;