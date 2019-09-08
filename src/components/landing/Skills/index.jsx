import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'Common'
import dev from 'Static/illustrations/about.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Skills = () => (
	<Wrapper id="omos">
		<SkillsWrapper as={Container}>
			<Thumbnail>
				<img
					src={dev}
					alt="LIV Kommunikation skaber synlighed for bæredygtige virksomheder og
					organisationer."
				/>
			</Thumbnail>
			<Details>
				<p>
					Vores hjemmeside er snart klar med en masse inspirerende indhold om
					bæredygtig kommunikation.
				</p>
				<Button as={AnchorLink} href="#kontakt">
					Kontakt os
				</Button>
			</Details>
		</SkillsWrapper>
	</Wrapper>
)
