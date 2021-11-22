import styled from "styled-components"
import { Link as LinkR } from "react-router-dom"

export const Nav = styled.nav`
	background: ${({ isOpen }) => (isOpen ? "transparent" : "transparent")};
	height: 80px;
	/* margin-top: -80px; */
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	position: sticky;
	top: 0;
	z-index: 10;

	@media screen and (max-width: 968px) {
		transition: 0.8s all ease;
	}
`
export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 80px;
	z-index: 1;
	width: 100%;
	padding: 0 24px;
	max-width: 1100px;
`
export const NavLogo = styled(LinkR)`
	color: #fff;
	justify-self: flex-start;
	cursor: pointer;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	margin-left: 24px;
	font-weight: bold;
	text-decoration: none;
`
export const MobileIcon = styled.div`
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 60%);
	font-size: 1.8rem;
	cursor: pointer;
	color: #fff;
`

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	margin-right: --22px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`

export const NavItem = styled.li`
	height: 80px;
`
export const NavLinks = styled(LinkR)`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
	font-weight: 500;

	&:active {
		border-bottom: 3px solid #01bf71;
	}

	&:hover {
		color: lightgreen;
	}
`
export const NavBtn = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-around;

	@media screen and (max-width: 768px) {
		display: none;
	}
`
export const NavBtnLink = styled(LinkR)`
	white-space: nowrap;
	margin: 6%;
	&:hover {
		opacity: 0.7;
		transform: translateY(-10%);
		transition: transform 0.2s ease-in;
	}
`
