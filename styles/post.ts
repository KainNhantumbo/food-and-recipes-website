import styled from 'styled-components';

export const PostContainer = styled.main`
	width: 100%;
	max-width: 750px;
	margin: 0 auto;
	padding: 100px 10px;
	display: flex;
	flex-direction: column;
	gap: 30px;
	font-family: Inter, 'Open Sans', Montserrat, Poppins, 'PT Sans';
	line-height: 1.6rem;

	.title {
		display: flex;
		flex-direction: column;
		gap: 10px;

		h1 {
			font-size: 2rem;
			line-height: 1.8rem;
			font-weight: 500;
			margin: 0;

		}
	}

	article {
		.upper-container {
			display: flex;
			justify-content: flex-start;
			gap: 20px;

			img {
				aspect-ratio: 16/9;
				object-fit: cover;
				border-radius: 20px;
			}

			.intro {
				display: flex;
				justify-content: flex-start;
				flex-direction: column;
			}
		}
	}
`;
