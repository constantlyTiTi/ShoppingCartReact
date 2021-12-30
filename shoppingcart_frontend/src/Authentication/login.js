import React, {useEffect, useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { login } from "../../redux/features/userInforSlice"

let login =()=>{
    
    const [state, setState] = useState();

    const dispatch = useDispatch();
    const {user, toekn, errors} = useSelector(state=>state.user)

}