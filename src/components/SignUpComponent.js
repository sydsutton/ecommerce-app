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
    Box,
    Snackbar,
    Alert
} from "@mui/material"

const SignUpComponent = ({isChildModalOpen, setIsChildModalOpen}) => {
    
    const {signUp, setIsModalOpen} = useContext(Context)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [snackbarOpen, setSnackbarOpen] = useState(false)

    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
    const numberRegex = new RegExp("(?=.*[0-9])")
    const charRegex = new RegExp("(?=.*[!@#\$%\^&\*])")

    const validate = () => {
        if(strongRegex.test(password) && password === confirmPassword){ 
            return true
        } else {
            return false
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        setErrorMessage("")
        if(validate()){
            try {
                await signUp(email, password)
                .then(() => {
                    setSnackbarOpen(true)
                    setIsChildModalOpen(false)
                })
                .catch((error) => setErrorMessage(error.message))
            } catch {
                setErrorMessage("Sorry, something went wrong")
            }
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
                open={isChildModalOpen} 
                onClose={() => setIsChildModalOpen(false)}
            >
                <Box className="child-modal">
                    <form className="p-4 sign-up-form pt-2" onSubmit={handleSubmit}>
                        <h4 className="mb-3">Sign Up</h4>
                        <hr />
                        <FormGroup>
                            <div className="error-message mb-0">{errorMessage ? sliceError(errorMessage) : null}</div>
                            <div className="mb-3 small mt-0">
                                <div className={password.length >= 8 ? 'text-success' : 'text-secondary'}>Password should be at least 8 characters</div>
                                <div className={password === confirmPassword && password !== "" ? 'text-success' : 'text-secondary'}>Password and confirm password must match</div>
                                <div className={numberRegex.test(password) ? 'text-success' : 'text-secondary'}>Password must include at least one number</div>
                                <div className={charRegex.test(password) ? 'text-success' : 'text-secondary'}>Password must include at least one special character</div>
                            </div>
                            <FormControl className="mb-3">
                                <InputLabel htmlFor="email">Email address</InputLabel>                        
                                <Input 
                                    id="email" 
                                    autoFocus={true}
                                    type="text" 
                                    value={email} 
                                    onChange={(e) => {
                                        setErrorMessage("")
                                        setEmail(e.target.value)
                                    }} 
                                    required
                                    error={errorMessage.includes('email') ? true : false}
                                />
                            </FormControl>
                            <FormControl className="mb-3">
                                <InputLabel 
                                    htmlFor="password" 
                                    shrink={password !== "" ? true : false}
                                >
                                    Password
                                </InputLabel>     
                                <Input 
                                    type="password" 
                                    id="password" 
                                    value={password}
                                    onChange={(e) => {
                                        setErrorMessage("")
                                        setPassword(e.target.value)
                                    }}
                                    required
                                />
                            </FormControl>
                            <FormControl>
                                <InputLabel 
                                    htmlFor="confirmPassword" 
                                    shrink={confirmPassword !== "" ? true : false}
                                >
                                    Confirm password
                                </InputLabel>     
                                <Input 
                                    type="password" 
                                    id="confirmPassword" 
                                    value={confirmPassword}
                                    onChange={(e) => {
                                        setErrorMessage("")
                                        setConfirmPassword(e.target.value)
                                    }}
                                    required
                                />
                            </FormControl>
                        </FormGroup>
                        <Button 
                            type="submit" 
                            variant="outlined" 
                            className="mt-3"
                            disabled={validate() ? false : true}
                        >
                            Sign Up
                        </Button>
                        <div className="d-flex flex-row mt-3 justify-content-evenly align-items-center">
                            <div>Already have an account?</div>
                            <Button onClick={() => setIsChildModalOpen(false)}>
                                Log In
                            </Button>
                        </div>
                    </form>
                </Box>
            </Modal>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={() => setSnackbarOpen(false)}
            >
                <Alert severity="success">
                    {`You've successfully signed up!`}
                </Alert>
            </Snackbar>
        </React.Fragment>
    );
};

export default SignUpComponent;