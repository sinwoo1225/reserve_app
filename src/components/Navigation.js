import React, { useState } from "react";
import styled from "styled-components";
import NavListItem from "./NavListItem";
import {
  AiOutlineHome,
  AiOutlineCompass,
  AiOutlineAlignRight,
  AiOutlineHeart,
  AiOutlineUser,
} from "react-icons/ai";

const initialNavItems = [
  {  itemText:"홈", ItemIcon:AiOutlineHome, to:"/"},
  {  itemText:"내주변", ItemIcon:AiOutlineCompass, to:"/map"},
  {  itemText:"리스트", ItemIcon:AiOutlineAlignRight, to:"/list"},
  {  itemText:"찜", ItemIcon:AiOutlineHeart,to:"/pick"},
  {  itemText:"내정보", ItemIcon:AiOutlineUser,to:"/user"}
];

export const useNavIndex = ( initailIndex = 0)=>{
  const [currentNavItem, setCurrentNavItem] = useState(initailIndex);
  return {currentNavItem, setCurrentNavItem};
}

function Navigation() {
  const [navItems, ] = useState(initialNavItems);
  const { currentNavItem,setCurrentNavItem } = useNavIndex(0);

  return (
    <Nav>
      <ul className="nav__lists">
        { navItems.map((item,index) => <NavListItem key={index} index={index} setCurrentNavItem={ setCurrentNavItem } isCurrent={currentNavItem===index} {...item} /> )}
      </ul>
    </Nav>
  );
}

const Nav = styled.nav`
  width: 100%;
  height: 72px;
  background-color: white;
  border-top: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  position:fixed;
  bottom: 0;
  left: 0;
  z-index: 9999;

  & > .nav__lists {
    display: grid;
    height: 100%;
    grid-template-columns: repeat(5, 1fr);
  }
`;

export default Navigation;
