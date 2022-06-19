import styled from 'styled-components';

export const HomeContainer = styled.main`
	width: 100%;
	height: 100%;
	margin: 0 auto;
	padding: 90px 10px;
	display: flex;
	flex-direction: column;
	gap: 30px;
	font-family: Inter, 'Open Sans', Montserrat, Poppins, 'PT Sans';
	line-height: 1.6rem;
	background: rgb(${({ theme }) => theme.background_alter});

	.main-container {
		.posts-container {
			img {
				aspect-ratio: 4/3;
				object-fit: cover;
				width: 200px;
			}
		}
	}
`;
