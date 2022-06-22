import styled from 'styled-components';

export const HomeContainer = styled.main`
	width: 100%;
	height: 100%;
	margin: 0 auto;
	padding: 70px 10px 50px 10px;
	display: flex;
	flex-direction: column;
	gap: 30px;
	font-family: Inter, 'Open Sans', Montserrat, Poppins, 'PT Sans';
	line-height: 1.6rem;
	background: rgb(${({ theme }) => theme.background_alter});
	border-radius: 30px;
	margin-bottom: 50px;

	.empty-message {
		display: grid;
		place-content: center;
		min-height: 70vh;
		text-align: center;

		h2 {
			font-size: 1.2rem;
			font-weight: 500;
		}

		svg {
			width: 80px;
			height: 80px;
			color: rgb(${({ theme }) => theme.secondary});
		}
	}

	.toolbar-container {
		display: flex;
		justify-content: flex-start;
		flex-flow: row wrap;
		gap: 50px;
		padding: 0 10px;

		@media screen and (max-width: 750px) {
			gap: 15px;
		}

		h2 {
			font-size: 1.4rem;
			font-weight: 500;
			position: relative;

			svg {
				position: absolute;
				width: 25px;
				height: 25px;
				left: 0px;
				top: 0px;
				color: rgba(${({ theme }) => theme.primary}, 0.9);
			}

			span {
				padding-left: 35px;
			}
		}

		/* max-width: 850px; */

		form {
			position: relative;
			display: flex;
			justify-content: flex-start;

			input {
				border: none;
				border: 2px solid rgba(${({ theme }) => theme.font}, 0.2);
				background: rgb(${({ theme }) => theme.background_alter});
				padding: 5px;
				padding-left: 35px;
				line-height: 1.2rem;
				border-radius: 20px;
				width: 400px;
				outline: none;
			}

			.search-icon {
				position: absolute;
				width: 16px;
				height: 16px;
				left: 10px;
				top: 8px;
				color: rgba(${({ theme }) => theme.font}, 0.5);
			}

			button {
				position: absolute;
				width: 16px;
				height: 16px;
				top: 8px;
				right: 10px;
				border: none;
				padding: 5px;
				background: rgb(${({ theme }) => theme.secondary});
				color: rgb(${({ theme }) => theme.text});
				display: grid;
				place-content: center;
				border-radius: 50%;
			}
		}
	}

	.main-container {
		display: flex;
		justify-content: center;

		.posts-container {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 20px;
			align-items: center;
			justify-content: center;
			justify-items: center;

			@media screen and (max-width: 750px) {
				grid-template-columns: 1fr;
				grid-template-rows: repeat(2, 1fr);
			}

			.post {
				display: grid;
				width: 350px;
				grid-template-columns: 150px calc(100% - 150px);
				border-radius: 12px;
				height: 160px;
				position: relative;
				background: rgb(${({ theme }) => theme.backgroundAlt});
				box-shadow: 0 0 25px rgba(${({ theme }) => theme.shadows}, 0.6);
				user-select: none;

				img {
					aspect-ratio: 4/3;
					width: 160px;
					height: 100%;
					max-height: 160px;
					object-fit: cover;
					border-radius: 12px 0 0 12px;
					cursor: pointer;
				}

				.details-container {
					padding: 5px 8px;
					display: flex;
					justify-content: flex-start;
					flex-direction: column;
					gap: 5px;

					.title {
						white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;
						font-weight: 500;
						color: rgb(${({ theme }) => theme.secondary});
						cursor: pointer;
					}

					p {
						font-size: 0.9rem;
						line-height: 1.2rem;
					}

					.chors {
						display: flex;
						justify-content: space-around;
						font-size: 0.9rem;
						cursor: pointer;

						h5 {
							position: relative;
						}
						svg {
							position: absolute;
							width: 14px;
							height: 14px;
							top: 5px;
							left: -2px;
						}

						span {
							font-weight: 500;
							padding-left: 15px;
							text-align: center;
						}
					}
				}

				@media screen and (max-width: 370px) {
					display: flex;
					flex-direction: column;
					height: fit-content;
					width: 220px;

					img {
						width: 100%;
						border-radius: 12px 12px 0 0;
					}

					.chors {
						section {
							display: flex;
							flex-direction: column;
							align-items: center;
						}
					}
				}
			}
		}
	}

	.share-container {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 10px;
		flex-direction: column;

		.btn-container {
			display: flex;
			gap: 15px;
			justify-content: space-evenly;

			div {
				padding: 3px 10px;
				background: rgb(${({ theme }) => theme.secondary});
				color: rgb(${({ theme }) => theme.text});
				border-radius: 15px;
				display: grid;
				place-content: center;
				cursor: pointer;
				position: relative;

				.text {
					padding-left: 25px;
				}

				.icon0, .icon1 {
					position: absolute;
					top: 3px;
					left: 2px;
					width: 20px;
					height: 20px;
				}

				.icon1 {
					left: 8px;
					top: 5px;
				}
			}
		}
	}
`;
