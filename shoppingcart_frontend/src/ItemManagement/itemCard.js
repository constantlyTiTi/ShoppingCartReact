import React from 'react'

const itemCard = (props) => {
    return (
        <div class="row">
            <div class="col-3">

            </div>
            <div class="col-9">
                <div>{props.item_name}</div>
                <div>{props.description}</div>
                <div>{props.price}</div>

            </div>
        </div>
    )
}

export default itemCard;