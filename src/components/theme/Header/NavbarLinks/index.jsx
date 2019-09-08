import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Wrapper } from './styles'

const NavbarLinks = ({ desktop }) => (
	<Wrapper desktop={desktop}>
		<AnchorLink href="#omos">Om Os</AnchorLink>
		<AnchorLink href="#kontakt">Kontakt</AnchorLink>
	</Wrapper>
)

export default NavbarLinks
