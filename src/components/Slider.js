import React from "react";
import styled from "styled-components";
import useTouch from "../utils/useTouch";
import ReviewTag from "./ReviewTag";

function SliderItem({src,alt,title,tags,rating,itemIndex}){
    return(
        <ItemBox>
            <img data-slider-index={itemIndex} src={src} alt={alt}/>
            <ItemArticle>
                <ReviewTag rating={rating}/>
                <hgroup>
                    <h2>{title}</h2>
                    <h3>{tags.map((item) => `#${item} `)}</h3>
                </hgroup> 
            </ItemArticle>
        </ItemBox>
    );
}

const ItemArticle = styled.article`
    color:#FCFCFC;
    height:100%;
    box-sizing:border-box;
    display:flex;
    padding:10px;
    flex-direction: column;
    align-items:flex-start;
    justify-content: space-between;
    & > hgroup{
        & > h2{
            font-size:26px;
            font-weight: bold;
            margin-bottom:8px;
        }
        & > h3{
            font-weight: 500;
        }
    }
`;

function SliderContainer({ sliderItems }){
    let sliderPosX = -1;
    
    const touchStartHandler = (event) =>{
        sliderPosX = sliderPosX + event.touches[0].pageX;
    };

    const touchMoveHandler = (event)=>{
        const { current } = element;
        const changeX = -(sliderPosX -  event.touches[0].pageX);
        current.style.transform = `translateX(${changeX}px)`;
    };
    
    const touchEndHandler = (event)=>{
        sliderPosX = (sliderPosX -  event.changedTouches[0].pageX);
    };
    
    const element = useTouch(touchStartHandler,touchMoveHandler,touchEndHandler);

    return (
        <Container>
            <Slider ref={element}>
                { sliderItems.map((item,index)=> <SliderItem key={index} { ...item } itemIndex={index} />) }
            </Slider>
        </Container>
    );
}

const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    overflow:hidden;
`;

const Slider = styled.div`
    width:max-content;
    height:500px;
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    overflow:hidden;
    left:0;
`;

const ItemBox = styled.div`
    width:100vw;
    height:100vw;
    position:relative;
    padding:0 10px;
    box-sizing:border-box;
    & > img{
        box-sizing:border-box;
        padding:0 10px;
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        border-radius:5.12%;
        z-index:-1;
    }
`;

export default SliderContainer;