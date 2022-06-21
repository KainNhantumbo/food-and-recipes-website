import styled from 'styled-components';

export const LoadingContainer = styled.section`
	display: grid;
	place-content: center;

	.loading-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;

		svg {
			width: 80px;
			height: 80px;
		}
	}
`;
