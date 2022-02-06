import React, {useContext} from 'react';
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
    const {isModalOpen, setIsModalOpen} = useContext(Context)

    return (
        <Modal 
            open={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
        >
            <Box className="signin-modal">
                <form className="p-3 sign-in-form">
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
            </Box>
        </Modal>
    );
};

export default SignInComponent;