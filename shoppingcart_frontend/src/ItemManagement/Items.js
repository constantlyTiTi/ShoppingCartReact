import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { fetchItems, getItems } from '../redux/item/itemsSlice';
import itemCard from './itemCard';
//without hook

export const items = (props) => {

    return (
        <>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className ="page-item"><a className="page-link" href="#">Previous</a></li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
            </nav>
            {
                props.items.items.map(i =>
                    <itemCard
                        item_name={i.item_name}
                        description={i.description}
                        price={i.price}></itemCard>)
            }
        </>

    )

}

const mapStateToProps = state => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = dispatch => {
    return {
        queryItems: () => dispatch(fetchItems())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(items);