import styled from 'styled-components';

export const CategoriesContainer = styled.main`
	width: 100%;
	max-width: 750px;
	margin: 0 auto;
	padding: 80px 10px;
	display: flex;
	flex-direction: column;
	gap: 30px;
	font-family: Inter, 'Open Sans', Montserrat, Poppins, 'PT Sans';
	line-height: 1.6rem;

	.upper-container {
		h2 {
			position: relative;
			font-size: 1.2rem;
			font-weight: 500;

			span {
				padding-left: 25px;
			}

			svg {
				width: 22px;
				height: 22px;
				position: absolute;
				top: 0;
				left: 0;
				color: rgb(${({ theme }) => theme.alter});
			}
		}
	}
`;
