import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

function ReviewTag({rating}){
    return(
        <ReviewTagContainer>
            <AiFillStar color="#f9ca24"/>
            <span>{Number(rating).toFixed(1)}</span>
        </ReviewTagContainer>
    );
}

const ReviewTagContainer = styled.div`
    z-index:1;
    font-size:14px;
    padding:16px 6px;
    border-radius:50%;
    align-self: flex-end;
    background-color:#2d3436 ;
    display:flex;
    justify-content:center;
    align-items:center;
    & > span{
        margin-left:2px;
        color:white;
    }
`;

export default ReviewTag;