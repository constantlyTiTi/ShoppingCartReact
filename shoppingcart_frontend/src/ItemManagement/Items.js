import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { fetchItems, getItems } from '../redux/item/itemsSlice';
import itemCard from './itemCard';
import {useEffect} from react;
//without hook

export const items = (props) =>{

    return(
        <>
        {
            props.items.map(i => 
            <itemCard 
            item_name = {i.item_name} 
            description = {i.description}
            price = {i.price}></itemCard>)
        }
        </>

    )

}

const mapStateToProps = state =>{
    return{
        items: state.items
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        queryItems:() => dispatch(fetchItems())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(items);