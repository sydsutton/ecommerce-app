import React, {useState, useContext} from 'react'
import {Context} from "../Context"
import { Link } from 'react-router-dom'
import {
    FormGroup,
    Input,
    InputLabel,
    FormControl,
    Button,
    Modal,
    Box
} from "@mui/material"

const SignUpComponent = ({isChildModalOpen, setIsChildModalOpen}) => {
    
    const {signUp, setIsModalOpen} = useContext(Context)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    return (
        <Modal 
            open={isChildModalOpen} 
            onClose={() => setIsChildModalOpen(false)}
        >
            <Box className="child-modal">
                <form className="p-4 sign-up-form pt-2" onSubmit={() => signUp(email, password)}>
                    <h4 className="mb-3">Sign Up</h4>
                    <hr />
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
                        <Button
                            onClick={() => {
                                setIsChildModalOpen(false)
                            }}
                        >
                            Log In
                        </Button>
                    </div>
                </form>
            </Box>
        </Modal>
    );
};

export default SignUpComponent;