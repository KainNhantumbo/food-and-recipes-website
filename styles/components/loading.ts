import styled from 'styled-components';

export const LoadingContainer = styled.section`
	display: grid;
	place-content: center;
	min-height: 50vh;

	.loading-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
		padding: 50px 0;

		svg {
			width: 80px;
			height: 80px;
			color: rgb(${({ theme }) => theme.secondary});
		}

		h2 {
			font-size: 1.2rem;
			font-weight: 500;
		}
	}
`;
