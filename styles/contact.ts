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
			color: rgb(${({ theme }) => theme.secondary});
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
	.contacts {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}

	.errorMessage {
		color: rgb(${({ theme }) => theme.alter});
		font-size: 0.9rem;
		font-weight: 500;
	}

	.messageForm {
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
		gap: 10px;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 0 25px rgba(${({ theme }) => theme.shadows}, 0.6);
		background: rgb(${({ theme }) => theme.backgroundAlt});

		h1 {
			svg {
				position: absolute;
				width: 30px;
				height: 30px;
				left: 160px;
				top: -1px;
			}
		}

		.form-control {
			display: flex;
			gap: 10px;

			@media screen and (max-width: 520px) {
				flex-flow: row wrap;
			}

			.form-item {
				display: flex;
				flex-direction: column;
				width: 100%;
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
				border: none;
				background: none;
				border-radius: 5px;
				position: relative;
				padding: 7px 10px;
				color: rgb(${({ theme }) => theme.text});
				background: rgb(${({ theme }) => theme.secondary});
				width: fit-content;
				cursor: pointer;

				:hover {
					transform: scale(1.05);
					transition: all 200ms ease-in-out;
				}

				svg {
					width: 18px;
					height: 18px;
					position: absolute;
					top: 7px;
					right: 7px;
					pointer-events: none;
				}
				span {
					padding-right: 20px;
					font-weight: 500;
					pointer-events: none;
				}
			}

			input,
			textarea {
				border: none;
				border-radius: 5px;
				padding: 10px;
				resize: none;
				background: rgb(${({ theme }) => theme.inner});
				outline: none;

				::placeholder {
					font-size: 0.9rem;
					font-weight: 500;
				}
			}
		}
	}
`;
