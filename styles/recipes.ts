import styled from 'styled-components';

export const RecipesContainer = styled.main`
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
		display: flex;
		flex-direction: column;
		gap: 10px;

		.recipe {
      display: grid;
      grid-template-columns: 50px 80%;
			border-radius: 12px;
			gap: 5px;
			position: relative;
			padding: 8px 10px 0px 10px;
			background: rgb(${({ theme }) => theme.backgroundAlt});
			box-shadow: 0 0 2px rgba(${({ theme }) => theme.shadows}, 0.6);
			cursor: pointer;

      @media screen and (max-width: 315px) {
			grid-template-columns: 50px 60%;
		}

			:hover {
				box-shadow: 0 0 20px rgba(${({ theme }) => theme.shadows}, 0.6);
				transition: all 200ms ease;
			}

			.arrow-icon {
				position: absolute;
				width: 20px;
				height: 20px;
				top: calc(50% - 10px);
				right: 20px;
				color: rgba(${({ theme }) => theme.primary}, 0.5);
			}

			.image-container {
				padding: 5px;
				img {
					border-radius: 12px;
          width: 50px;
					:hover {
						transform: scale(1.1);
						transition: all 200ms ease;
					}
				}
			}

			.info-container {
				h4,
				h3 {
					position: relative;
					font-size: 0.9rem;
					font-weight: 500;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;

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
				h3 {
					font-size: 1rem;
				}
			}
		}
	}
`;
