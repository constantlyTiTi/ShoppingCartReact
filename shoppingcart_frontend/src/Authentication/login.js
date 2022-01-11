import React, { useEffect, useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import {login} from '../redux/auth/AuthenSlice'

const Login = () => {
    const[user, setUser] = useState({});

    const dispatch = useDispatch();
    const { token, errors } = useSelector(state => state.user)

    function usernameOnChangeHandler(e){
        setUser({...user, username: e.target.value})
    }

    function passwordOnChangeHandler(e){
        setUser({...user, password: e.target.value})
    }

    useEffect(()=>{
        
    })


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
                    <Form.Group className="d-flex">
                        {/* <Button variant="primary" type="button" onClick={login}>
							Submit
						</Button> */}
                        <Button variant="primary" type="button" onClick={() => dispatch(login(state))}>
                            Submit
                        </Button>
                        <Form.Text className="mx-3 text-danger">
                            {errors}
                        </Form.Text>
                    </Form.Group>
                </Form>
            </div>
        </>

    )

}

export default Login