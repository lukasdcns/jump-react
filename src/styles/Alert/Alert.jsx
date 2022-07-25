import styled from 'styled-components';

export const AlertMessage = styled.div`
	padding: 1.5rem;
	color: white;
	width: calc(40% - 1.5rem);
	margin: 1rem auto;

	&.info {
		background-color: #2196f3;
	}

	&.error {
		background-color: #f44336;
	}

	&.warn {
		background-color: #ff9800;
	}
`;
