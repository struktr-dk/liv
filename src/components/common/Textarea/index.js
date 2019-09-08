import styled from 'styled-components'

export const Textarea = styled.textarea`
	width: 94%;

	border: 2px solid #455a64;
	padding: 0.8rem 1rem;
	border-radius: 7px;
	margin-bottom: 0.5rem;
	transition: 0.3s;
	resize: vertical;

	${({ error }) =>
		error &&
		`
		border-color: #ff4136;
	`}

	&::placeholder {
		color: #a7a7a7;
	}
`
