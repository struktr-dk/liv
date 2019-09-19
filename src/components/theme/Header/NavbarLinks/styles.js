import styled from 'styled-components'

export const Wrapper = styled.div`
	a {
		color: #6d6d6d;
		text-decoration: none;
	}

	${({ desktop }) =>
		desktop
			? `
			@media (max-width: 960px) {
					display: none;
			}

			a {
					margin-right: 1rem;

					&:last-child {
							margin-right: unset;
					}
			}
		`
			: `
			padding: 5rem 3rem;
			display: flex;
			flex-direction: column;

			a {
					margin-bottom: 2rem;

					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`
