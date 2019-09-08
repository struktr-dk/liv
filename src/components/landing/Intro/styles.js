import styled from 'styled-components'

export const Wrapper = styled.div`
	padding-bottom: 4rem;
	background-image: url('../images/liv-bg.jpg');
	background-size: contain;
	background-position: right top;
	background-repeat: no-repeat;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	background-color: rgba(0, 0, 0, 0.7);
	background-blend-mode: multiply;
`

export const IntroWrapper = styled.div`
	padding: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	min-height: calc(100vh - 130px);

	@media (max-width: 960px) {
		flex-direction: column;
	}
`

export const Details = styled.div`
	flex: 1;

	@media (max-width: 960px) {
		width: 100%;
		margin-bottom: 2rem;
	}

	h1 {
		margin-bottom: 2rem;
		font-size: 36pt;
		color: white;

		@media (max-width: 680px) {
			font-size: 30pt;
		}
	}

	h4 {
		margin-bottom: 2.5rem;
		font-size: 24pt;
		font-weight: normal;
		line-height: 1.2;
		color: white;
		max-width: 50%;

		@media (max-width: 680px) {
			font-size: 14pt;
			max-width: 100%;
		}
	}

	p {
		margin-top: 12pt;
		margin-bottom: 48pt;
		font-size: 16pt;
		color: white;
		max-width: 50%;
		@media (max-width: 680px) {
			font-size: 12pt;
			max-width: 100%;
		}
	}
`

export const Thumbnail = styled.div`
	flex: 1;

	@media (max-width: 960px) {
		width: 100%;
	}

	img {
		width: 100%;
	}
`
