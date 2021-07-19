import React, {useState} from 'react'

import Styled from 'styled-components'

import { FaBookmark } from 'react-icons/fa';

const AddToWishList = () => {

    const [show, setShow] = useState(false);

    return (
        <IconStyled>
            <FaBookmark
                onClick={() => setShow(!show)}
                className={show ? 'icon active' : 'icon'}
            />
        </IconStyled>
    )
}

export default AddToWishList

const IconStyled = Styled.span`
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;

    .icon {
        font-size: 1.5rem;
        color: #F3F4F0;
        transition: color 0.4s ease-in-out;

        &.active, &:hover {
            color: #FACE2D;
        }
    }
`