import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function NavListItem({ index, setCurrentNavItem, itemText, ItemIcon, to, isCurrent }) {
    return (
    <List onClick={()=>setCurrentNavItem(index)} isCurrent={isCurrent}>
        <StyledLink to={to}>
            <ItemIcon style={{marginBottom:"6px"}} size="20" />
            <h4>{itemText}</h4>  
        </StyledLink>
    </List>
  );
}

const List = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color:${props =>props.isCurrent?"red":"#514e4e" };
`;

const StyledLink = styled(Link)`
  display: flex;
  width:100%;
  height:100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration:none;
  color:inherit;
`;

export default NavListItem;