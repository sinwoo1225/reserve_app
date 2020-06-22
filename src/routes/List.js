import React from "react";
import styled from "styled-components";
import { datas } from "../utils/tempData";
import ReviewTag from "../components/ReviewTag";

function ListItem({title,tags,src,alt,location, rating,reviewCount}){
    return(
        <Li>
            <RoundArticle>
                <ImageView>
                    <img src={src} alt={alt} />
                    <ReviewTag rating={rating}/>
                </ImageView>
                <ContentView>
                    <hgroup>
                        <h2>{title}</h2>
                        <h3>{tags.map((item) => `#${item} `)}</h3>
                    </hgroup>
                    <LocationView>
                        <span>{location}</span>
                    </LocationView>
                </ContentView>      
            </RoundArticle>
        </Li>
    );
    
}

const Li = styled.li`
    margin-bottom:12px;
`;

const LocationView = styled.div`
    padding-top: 8px;
    color:gray;
    font-size: 13px;
`;

const RoundArticle = styled.article`
    border-radius:12px;
    overflow:hidden;
    border:1px solid #dbdbdb;
`;

const ImageView = styled.div`
    position:relative;
    padding:10px;
    box-sizing:border-box;
    height:300px;
    display:flex;
    flex-direction:column;
    & > img{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
    }
`;

const ContentView = styled.div`
    background-color:white;
    padding:12px 16px;
    & > hgroup{
        & > h2{
            font-size:22px;
            font-weight:600;
            margin-bottom: 6px;
        }
        & > h3{
            font-size:13px;
        }
    } 
`;

function List(){
    return(
        <Activity>
            <ListViewGroup>
                <ul>
                    { datas.map((item, index)=><ListItem key={index} {...item}/>)}
                </ul>
            </ListViewGroup>
        </Activity>
    );
}

const Activity = styled.main`
    padding-bottom: 72px;
`;

const ListViewGroup = styled.div`
    box-sizing:border-box;
    padding:10px;
    min-height:100vh;
    background-color:#fafafa;
`; 

export default List;