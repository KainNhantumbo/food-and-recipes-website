import styled from 'styled-components';

export const FooterContainer = styled.footer`
	width: 100vw;
	height: min-content;
	position: relative;
	font-family: Inter, 'Open Sans', Montserrat, Poppins, 'PT Sans';
	display: flex;
	flex-direction: column;
	gap: 50px;

	.newsletter {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		gap: 12px;
		margin: 0 10px;

		.container {
			display: flex;
			justify-content: space-between;
			width: 100%;
			flex-direction: row;
			max-width: 700px;
			align-items: center;
			gap: 10px;
			background: rgb(${({ theme }) => theme.hover});
			padding: 20px 50px;
			border-radius: 10px;

			@media screen and (max-width: 715px) {
				flex-direction: column;
			}
			@media screen and (max-width: 420px) {
				padding: 20px 10px;
			}

			.content {
				display: flex;
				flex-flow: column nowrap;
				gap: 10px;

				h2 {
					font-size: 1.2rem;
					font-weight: 500;
					position: relative;
					span {
						padding-left: 25px;
					}
					svg {
						position: absolute;
						width: 20px;
						height: 20px;
						top: 0px;
						left: 0;
						color: rgb(${({ theme }) => theme.primary});
					}
				}
				p {
					line-height: 1.2rem;
				}
			}

			.form {
				form {
					display: flex;
					justify-content: flex-start;
					flex-flow: row nowrap;

					button {
						border: none;
						position: relative;
						background: rgb(${({ theme }) => theme.secondary});
						font-size: 1rem;
						padding: 0 10px;
						color: rgb(${({ theme }) => theme.text});
						border-radius: 0 5px 5px 0;
						cursor: pointer;
						span,
						svg {
							pointer-events: none;
						}

						span {
							padding-left: 16px;
						}

						svg {
							color: rgb(${({ theme }) => theme.text});
							position: absolute;
							top: 10px;
							left: 5px;
							width: 16px;
							height: 16px;
						}
						:hover {
							background: rgb(${({ theme }) => theme.primary});
							transition: all 300ms ease;
						}
					}

					input {
						border: none;
						padding: 10px;
						line-height: 1.2rem;
						outline: none;
						background: rgb(${({ theme }) => theme.inner});
						border-radius: 5px 0 0 5px;
						::placeholder {
							font-size: 0.9rem;
							font-weight: 500;
						}
						@media screen and (max-width: 360px) {
							width: 175px;
						}
						@media screen and (max-width: 310px) {
							width: 145px;
							::placeholder {
								font-size: 0.8rem;
							}
						}
					}
				}
			}
		}
	}

	.footer-components {
		display: grid;
		grid-template-columns: repeat(2, 1fr) 1.5fr;
		gap: 30px 20px;
		padding: 20px;
		border-radius: 20px 20px 0 0;
		background: rgb(${({ theme }) => theme.hover});
		color: rgb(${({ theme }) => theme.font});

		@media screen and (max-width: 810px) {
			grid-template-columns: repeat(2, 1fr);
		}
		@media screen and (max-width: 485px) {
			grid-template-columns: 1fr;
		}

		section {
			h2 {
				font-weight: 500;
				font-size: 1.2rem;
				line-height: 2.2rem;
			}

			li {
				line-height: 1.6rem;
				width: fit-content;
				:hover {
					color: rgb(${({ theme }) => theme.primary});
				}
			}
		}

		.copyright {
			text-transform: uppercase;
			font-weight: 500;
			font-size: 0.8rem;
			letter-spacing: 1px;
			grid-column: 1/3;
			line-height: 1.2rem;

			@media screen and (max-width: 485px) {
				grid-column: 1/1;
			}
		}
	}
`;
