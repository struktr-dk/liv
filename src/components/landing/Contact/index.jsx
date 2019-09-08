import React from 'react'
import { Container } from 'Common'
import { Wrapper, Details } from './styles'
import ContactForm from './ContactForm'

export const Contact = () => (
	<Wrapper as={Container} id="kontakt">
		<Details>
			<ContactForm />
		</Details>
	</Wrapper>
)
