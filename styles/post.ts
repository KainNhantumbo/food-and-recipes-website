import styled from 'styled-components';

export const PostContainer = styled.main`
	width: 100%;
	max-width: 750px;
	margin: 0 auto;
	padding: 100px 10px;
	display: flex;
	flex-direction: column;
	gap: 30px;
	font-family: Inter, 'Open Sans', Montserrat, Poppins, 'PT Sans';
	line-height: 1.6rem;

	article {
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
		gap: 20px;

		.intro {
			display: flex;
			flex-direction: column;
			gap: 10px;

			h1 {
				font-size: 2rem;
				line-height: 1.8rem;
				font-weight: 500;
				margin: 0;
			}

			.post-details {
				display: flexbox;
				justify-content: flex-start;
				flex-flow: row wrap;
				gap: 20px;

				.category {
					background: rgb(${({ theme }) => theme.secondary});
				}

				div {
					position: relative;
					padding: 3px 10px;
					border-radius: 20px;
					font-size: 0.9rem;
					font-weight: 500;
					color: rgb(${({ theme }) => theme.text});
					background: rgb(${({ theme }) => theme.alter});

					svg {
						position: absolute;
						width: 18px;
						height: 18px;
						top: 6px;
						left: 5px;
					}

					span {
						padding-left: 15px;
					}
				}
			}
		}

		.upper-container {
			display: flex;
			justify-content: flex-start;
			gap: 20px;

			img {
				border-bottom: 5px solid rgb(${({ theme }) => theme.shadows});
				border-radius: 20px;
				aspect-ratio: 16/9;
				object-fit: cover;
				margin: 0;
				padding: 0;
			}
		}

		.base-container {
			display: flex;
			justify-content: flex-start;
			flex-direction: column;
			gap: 25px;

			.post-section {
				line-height: 1.6rem;
				display: flex;
				flex-direction: column;
				gap: 10px;
				justify-content: flex-start;
				background: rgb(${({ theme }) => theme.background_alter});
				padding: 20px;
				border-radius: 20px;

				.label {
					position: relative;
					padding: 3px 10px;
					border-radius: 20px;
					width: fit-content;
					color: rgb(${({ theme }) => theme.text});
					background: rgb(${({ theme }) => theme.secondary});

					svg {
						position: absolute;
						width: 18px;
						height: 18px;
						top: 6px;
						left: 8px;
					}

					span {
						padding-left: 20px;
					}
				}
			}

			.hints {
				background: rgba(${({ theme }) => theme.primary}, 0.2);
			}
		}

		.share-container {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 10px;
			flex-direction: column;

			.social-container {
				display: flex;
				gap: 15px;
				justify-content: space-evenly;

				div {
					padding: 8px;
					background: rgb(${({ theme }) => theme.secondary});
					color: rgb(${({ theme }) => theme.text});
					border-radius: 10px;
					display: grid;
					place-content: center;
					cursor: pointer;

					svg {
						width: 20px;
						height: 20px;
					}
				}
			}
		}
	}
`;
