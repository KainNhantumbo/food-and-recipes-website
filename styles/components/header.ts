import styled from 'styled-components';

export const HeaderContainer = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	min-height: 65px;
	padding: 20px 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 5px;
	background: rgba(${({ theme }) => theme.backgroundAlt}, 0.5);
	backdrop-filter: blur(10px);
	box-shadow: 0 0 20px rgba(${({ theme }) => theme.shadows}, 0.6);
	z-index: 5000;
	border-radius: 0 0 20px 20px;
	font-family: Inter, 'Open Sans', Montserrat, Poppins, 'PT Sans';

	@media screen and (max-width: 730px) {
		justify-content: flex-end;
	}
	@media screen and (max-width: 580px) {
		flex-direction: column;
	}

	button {
		border: none;
		background: none;
		border-radius: 3px;
		color: rgb(${({ theme }) => theme.secondary});
		width: fit-content;
		cursor: pointer;
		position: absolute;
		top: 20px;
		right: 20px;
		display: none;

		@media screen and (max-width: 580px) {
			display: block;
		}

		:hover {
			color: rgb(${({ theme }) => theme.alter});
			transition: all 200ms ease-in-out;
		}

		svg {
			width: 25px;
			height: 25px;
			pointer-events: none;
		}
	}

	.brand {
		position: absolute;
		top: 22px;
		left: 10px;
		color: rgb(${({ theme }) => theme.secondary});
		cursor: pointer;

		span {
			font-weight: 600;
			text-align: center;
			font-size: 1.4rem;
			padding-left: 50px;
		}
		svg {
			position: absolute;
			width: 38px;
			height: 38px;
			color: rgb(${({ theme }) => theme.alter});
			left: 5px;
			top: -8px;
		}
	}

	.navbar {
		ul {
			display: flex;
			flex-flow: row nowrap;
			justify-content: flex-start;
			font-weight: 500;
			padding: 0 10px;
			gap: 8px;

			@media screen and (max-width: 580px) {
				flex-direction: column;
				align-items: center;
				margin-top: 40px;
				display: none;
			}
			@media screen and (min-width: 580px) {
				display: flex;
			}

			li {
				position: relative;
				padding: 5px;

				@media screen and (max-width: 580px) {
					padding: 10px;
				}

				:hover {
					color: rgb(${({ theme }) => theme.alter});
					cursor: pointer;
					transform: scale(1.1);
					transition: all 200ms ease;
				}
			}
		}
	}
`;
