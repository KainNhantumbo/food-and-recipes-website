import styled from 'styled-components';

export const HomeContainer = styled.main`
	width: 100%;
	height: 100%;
	margin: 0 auto;
	padding: 90px 10px;
	display: flex;
	flex-direction: column;
	gap: 30px;
	font-family: Inter, 'Open Sans', Montserrat, Poppins, 'PT Sans';
	line-height: 1.6rem;
	/* background: rgb(${({ theme }) => theme.background_alter}); */

	.main-container {
		.posts-container {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			max-width: 850px;
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

						section {
							display: flex;
							flex-direction: column;
							align-items: center;
						}

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

						}
					}
				}
			}
		}
	}
`;
