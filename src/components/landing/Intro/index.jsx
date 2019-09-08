import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'Theme'
import { Container, Button } from 'Common'

import { Wrapper, IntroWrapper, Details } from './styles'

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>LIV Kommunikation</h1>
				<h4>
					LIV Kommunikation skaber synlighed for bæredygtige virksomheder og
					organisationer.
				</h4>
				<p>
					Vi puster liv i de grønne fortællinger, så de gode budskaber rammer de
					rigtige mennesker. Vi tror på, at vi sammen kan skabe bæredygtige liv
					for os selv og planeten ved at gøre grøn forretning til den bedste
					forretning for vores kunder.
				</p>
				<Button as={AnchorLink} href="#kontakt">
					Kontakt os
				</Button>
			</Details>
		</IntroWrapper>
	</Wrapper>
)
