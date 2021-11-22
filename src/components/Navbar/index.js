import React from "react"
import { MobileIcon, Nav, NavbarContainer, NavLogo } from "./NavbarElements"
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = ({ toggle, isOpen }) => {
	return (
		<>
			<Nav isOpen={isOpen}>
				<NavbarContainer>
					<NavLogo to='/'>
						<h3>XO Marriage</h3>
					</NavLogo>
					<MobileIcon onClick={toggle}>
						{isOpen ? <FaTimes /> : <FaBars />}
					</MobileIcon>
				</NavbarContainer>
			</Nav>
		</>
	)
}

export default Navbar
