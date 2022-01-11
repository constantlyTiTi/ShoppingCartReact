import React, { useEffect, useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import {register} from '../redux/auth/AuthenSlice'

const Register = () => {
    const [state, setState] = useState({ user: {}, errors: [] });
    const dispatch = useDispatch();
    const { user, token, errors } = useSelector(state => state.user)

    function usernameOnChangeHandler(e){
        setState({...state, user:{...user, username: e.target.value}})
        setState({...state, errors:[]})
    }

    function passwordOnChangeHandler(e){
        setState({...state, user:{...user, password: e.target.value}})
        setState({...state, errors:[]})
    }

    function confirmPassordOnChangeHandler(e){

    }


    return (
        <>
            <div className="card mx-auto">
                <Form className="m-3">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={state.user.username}
                            onChange={usernameOnChangeHandler}
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={state.user.password}
                            onChange={passwordOnChangeHandler}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Confirm Password"
                            value={state.user.password}
                            onChange={confirmPassordOnChangeHandler}
                        />
                    </Form.Group>
                    <Form.Group className="d-flex">
                        {/* <Button variant="primary" type="button" onClick={login}>
							Submit
						</Button> */}
                        <Button variant="primary" type="button" onClick={() => dispatch(register(state))}>
                            Submit
                        </Button>
                        <Form.Text className="mx-3 text-danger">
                            {state.errors}
                        </Form.Text>
                    </Form.Group>
                </Form>
            </div>
        </>

    )

}

export default Register