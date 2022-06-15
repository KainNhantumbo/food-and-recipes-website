import styled from 'styled-components';

export const MessagesContainer = styled.div`
	width: 100%;
	min-height: 100vh;
	position: relative;
	padding: 75px 0 0 160px;
	display: flex;
	justify-content: space-between;
	gap: 10px;

	button {
		border: none;
		background: none;
		border-radius: 15px;
		position: relative;
		padding: 5px 10px;
		color: rgb(${({ theme }) => theme.text});
		background: rgb(${({ theme }) => theme.alter});
		width: fit-content;
		cursor: pointer;

		:hover {
			box-shadow: 0 0 12px rgb(${({ theme }) => theme.shadows});
			background: rgb(${({ theme }) => theme.secondary});

			transition: all 200ms ease-in-out;
		}

		svg {
			width: 22px;
			height: 22px;
			position: absolute;
			top: 3px;
			left: 7px;
			pointer-events: none;
		}
		span {
			padding-left: 20px;
			font-weight: 500;
			font-size: 0.9rem;
			pointer-events: none;
		}
	}

	main {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: column;
		gap: 20px;

		.toolbar {
		
		}

		.messages-container {
			width: 100%;
			max-width: 700px;
			display: flex;
			gap: 20px;
			justify-content: flex-start;
			flex-direction: column;
			@media screen and (max-width: 340px) {
				padding: 40px 15px;
			}

			.icon {
				position: absolute;
				top: 10px;
				left: 9px;
				width: 18px;
				height: 18px;
				color: rgb(${({ theme }) => theme.alterAlt});
			}
			.message {
				display: flex;
				justify-content: flex-start;
				flex-direction: column;
				gap: 15px;
				border-radius: 10px;
				padding: 10px;
				margin: 0 10px;
				background-color: rgb(${({ theme }) => theme.backgroundAlt});
				box-shadow: 0 0 2px rgba(${({ theme }) => theme.shadows}, 0.9);
				position: relative;

				:hover {
					box-shadow: 0 0 25px rgba(${({ theme }) => theme.shadows}, 0.6);
					transition: all 200ms ease;
				}
				h3 {
					font-size: 1.2rem;
					font-weight: 500;
					padding-left: 25px;
				}

				.date {
					position: absolute;
					right: 10px;
					top: 10px;
					font-weight: 500;
					font-size: 0.9rem;
				}
			}
		}
	}
`;
