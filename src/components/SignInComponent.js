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

import {Context} from "../Context"

const SignInComponent = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {isModalOpen, setIsModalOpen, logIn} = useContext(Context)

    return (
        <Modal 
            open={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
        >
            <Box className="signin-modal">
                <form className="p-3 sign-in-form" onSubmit={() => logIn(email, password)}>
                    <FormGroup>
                        <FormControl className="mb-3">
                            <InputLabel htmlFor="email">Email address</InputLabel>                        
                            <Input 
                                id="email" 
                                type="text" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required
                            />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="password">Password</InputLabel>     
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
                </form>
            </Box>
        </Modal>
    );
};

export default SignInComponent;