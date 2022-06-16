import styled from 'styled-components';

const tops = `
  z-index: 3000;
  position: fixed;
  bottom: 20px;
  left: 0;

  display: grid;
  place-content: center;
  width: 100%;
  height: 10vh;
`;

export const AppContainer = styled.div`
	.fluent-buttons {
		${() => tops}
		left: 97vw;
		bottom: 135px;
		width: 0;
		height: 0;

		@media screen and (max-width: 690px) {
			left: 95vw;
		}
		@media screen and (max-width: 480px) {
			left: 90vw;
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

			svg {
				width: 24px;
				height: 24px;
				color: rgb(${({ theme }) => theme.secondary});
			}
		}
		span {
			padding: 0;
		}
	}
	.advisor {
		${() => tops}

		div {
			background: rgba(${({ theme }) => theme.hover}, 0.5);
			backdrop-filter: blur(10px);
			box-shadow: 0 0 5px rgb(${({ theme }) => theme.shadows});
			padding: 10px 20px;
			border-radius: 10px;
			display: flex;
			justify-content: space-around;
			align-items: center;
			gap: 10px;

			a {
				color: rgb(${({ theme }) => theme.primary});
			}

			button {
				padding: 7px 10px;
				background: rgb(${({ theme }) => theme.secondary});
				border-style: none;
				border: none;
				border-radius: 15px;
				position: relative;
				cursor: pointer;

				:hover {
					background-color: rgb(${({ theme }) => theme.secondary});
					transition: all 200ms ease-out;
				}

				svg {
					position: absolute;
					width: 15px;
					height: 15px;
					left: 3px;
					top: 9px;
					color: rgb(${({ theme }) => theme.text});
				}

				span {
					font-weight: 400;
					color: rgb(${({ theme }) => theme.text});
				}
			}
		}
	}
`;
