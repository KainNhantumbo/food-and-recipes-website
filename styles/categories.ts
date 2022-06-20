import styled from 'styled-components';

export const CategoriesContainer = styled.main`
	width: 100%;
	max-width: 750px;
	margin: 0 auto;
	padding: 90px 10px;
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

	.base-container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		align-items: center;
		justify-items: center;
		gap: 25px 10px;

		@media screen and (max-width: 715px) {
			grid-template-columns: 1fr 1fr;
		}
		@media screen and (max-width: 490px) {
			grid-template-columns: 1fr;
		}

		.category {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			gap: 5px;
			padding: 5px;
			background: rgb(${({ theme }) => theme.backgroundAlt});
			box-shadow: 0 0 20px rgba(${({ theme }) => theme.shadows}, 0.6);
			border-radius: 12px;
			cursor: pointer;

			.image-container {
				padding: 5px;
				img {
					border-radius: 12px;
				}
			}

			h3 {
				position: relative;
				font-size: 0.9rem;
				font-weight: 500;

				span {
					padding-left: 20px;
				}

				svg {
					width: 18px;
					height: 18px;
					position: absolute;
					top: 3px;
					left: 0;
					color: rgb(${({ theme }) => theme.alter});
				}
			}
		}
	}
`;
