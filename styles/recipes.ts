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
			padding: 5px 10px;
			background: rgb(${({ theme }) => theme.backgroundAlt});
			box-shadow: 0 0 2px rgba(${({ theme }) => theme.shadows}, 0.6);
			cursor: pointer;
			align-items: center;

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

			img {
				width: 50px;
				height: 50px;
				border-radius: 8px;
				object-fit: cover;
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

	.pagination-container {
		display: flex;
		justify-content: center;
		flex-direction: row;

		.pagination {
			display: flex;
			justify-content: flex-start;
			gap: 10px;
		}

		button {
			width: 32px;
			height: 32px;
			margin-top: 8px;
			border: none;
			display: grid;
			background: rgba(${({ theme }) => theme.secondary}, 0.2);
			border-radius: 10px;
			backdrop-filter: blur(10px);
			place-content: center;
			position: relative;
			cursor: pointer;
			outline: none;

			svg {
				width: 24px;
				height: 24px;
				color: rgb(${({ theme }) => theme.secondary});
				pointer-events: none;
			}
		}
		span {
			padding: 0;
			color: rgb(${({ theme }) => theme.secondary});
		}
	}
`;
