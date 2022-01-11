import React, { useEffect, useState } from 'react'
import { Form, Button } from "react-bootstrap"
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PostItem = (props) => {

    const [postItemState, setPostState] = useState({ item: {}, error: [] })
    const dispatch = useDispatch()
    const {errors } = useSelector(state => state.item) 
    const {token} = useSelector(state => state.user) 

    useEffect(()=>{
        if(errors.length === 0){
            Navigate('/')
        }
    },[errors]);

    return (
        <>
            <Form onSubmit={e => dispatch(state.item, token)}>
                <Form.Group className="mb-3" controlId="uploader">
                    <FloatingLabel label="Uploader" className="mb-3">
                        <Form.Control type="text" />
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3" controlId="uploadItemDateTime">
                    <FloatingLabel label="Upload Item DateTime" className="mb-3">
                        <Form.Control type="date" onChange={e => setPostState({ ...postItemState, item: { ...item, upload_item_date_time: e.target.value } })} />
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3">
                    <FloatingLabel controlId="category" label="Select Category from below">
                        <Form.Select onChange={e => setPostState({ ...postItemState, item: { ...item, category: e.target.value } })}>
                            <option>Computer</option>
                            <option>Kitchen Appliance</option>
                            <option>Bedroom</option>
                        </Form.Select>
                    </FloatingLabel>
                </Form.Group>

                <FloatingLabel controlId="description" label="Description" className="mb-3">
                    <Form.Control as="textarea" placeholder="Leave a Description here" onChange={e => setPostState({ ...postItemState, item: { ...item, description: e.target.value } })}/>
                </FloatingLabel>

                <FloatingLabel label="price" className="mb-3">
                        <Form.Control type="number" onChange={e => setPostState({ ...postItemState, item: { ...item, price: e.target.value } })}/>
                    </FloatingLabel>

                    <FloatingLabel label="location_postal_code" className="mb-3">
                        <Form.Control type="text" onChange={e => setPostState({ ...postItemState, item: { ...item, location_postal_code: e.target.value } })}/>
                    </FloatingLabel>

                    <FloatingLabel label="quantity" className="mb-3">
                        <Form.Control type="number" onChange={e => setPostState({ ...postItemState, item: { ...item, quantity: e.target.value } })}/>
                    </FloatingLabel>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </>
    );
}