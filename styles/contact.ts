import styled from 'styled-components';

export const ContactContainer = styled.div`
	width: 100%;
	max-width: 750px;
	margin: 0 auto;
	padding: 80px 10px;
	display: flex;
	flex-direction: column;
	gap: 20px;
	font-family: Inter, 'Open Sans', Montserrat, Poppins, 'PT Sans';

	line-height: 1.6rem;

	i,
	em {
		font-style: italic;
	}

	h1 {
		font-size: 1.8rem;
		font-weight: 500;
		position: relative;
	}

	h2,
	h3,
	label {
		font-weight: 500;
	}

	a {
		color: rgb(${({ theme }) => theme.primary});
	}

	h3 {
		position: relative;
		padding-left: 20px;

		svg {
			color: rgb(${({ theme }) => theme.primary});
			position: absolute;
			width: 18px;
			height: 18px;
			top: 3px;
			left: 0;
		}
	}

	.intro {
		p {
			padding-top: 10px;
		}
		svg {
			position: absolute;
			width: 30px;
			height: 30px;
			left: 130px;
			top: 0px;
		}
	}

	.errorMessage {
		color: rgb(${({ theme }) => theme.alter});
		font-size: 0.9rem;
		font-weight: 500;
	}

	.contacts {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}

	.messageForm {
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
		gap: 10px;

		h1 {
			svg {
				position: absolute;
				width: 30px;
				height: 30px;
				left: 160px;
				top: 0px;
			}
		}

		form {
			display: flex;
			justify-content: flex-start;
			flex-direction: column;
			gap: 10px;

			span {
				font-size: 0.9rem;
				font-weight: 500;
			}

			button {
				width: fit-content;
			}

			input,
			textarea {
				border: 2px solid rgb(${({ theme }) => theme.primary});
				border-radius: 5px;
				padding: 5px;
				resize: none;
				background: rgb(${({ theme }) => theme.inner});

				::placeholder {
					font-size: 1rem;
					font-style: italic;
				}

				:focus {
					box-shadow: 0 0 10px rgb(${({ theme }) => theme.primary});
					border: 2px solid rgb(${({ theme }) => theme.primary});
					outline-color: rgb(${({ theme }) => theme.primary});
				}
			}
		}
	}
`;
