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

		.container {
			display: flex;
			justify-content: space-between;
			width: 100%;
			max-width: 700px;
			align-items: center;
			gap: 10px;
			background: rgb(${({ theme }) => theme.hover});
			padding: 20px 50px;
			border-radius: 10px;

			.content {
				display: flex;
				flex-direction: column;
				gap: 10px;

				h2 {
					font-size: 1.2rem;
					font-weight: 500;
				}
				p {
					line-height: 1.1rem;
				}
			}

			.form {
				div {
					display: flex;
					gap: 5px;
					justify-content: flex-start;
					flex-flow: row nowrap;

					input {
						border: 2px solid rgb(${({ theme }) => theme.primary});
						border-radius: 5px;
						padding: 5px;

						@media screen and (max-width: 305px) {
							width: 175px;
						}

						::placeholder {
							font-size: 1rem;
						}

						:focus {
							box-shadow: 0 0 10px rgb(${({ theme }) => theme.primary});
							border: 2px solid rgb(${({ theme }) => theme.primary});
							outline-color: rgb(${({ theme }) => theme.primary});
						}
					}
				}
			}
		}

		section {
			display: flex;
			justify-content: flex-start;
			flex-direction: column;
			gap: 15px;

			button {
				font-size: 1rem;
				border-radius: 5px;
				cursor: pointer;
				span,
				svg {
					pointer-events: none;
				}
				:hover {
					box-shadow: 0 0 5px 1px rgb(${({ theme }) => theme.shadows});
				}
			}
		}
	}

	.footer-components {
		display: grid;
		grid-template-columns: repeat(2, 1fr) 1.5fr;
		gap: 30px 20px;
		padding: 20px;
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
