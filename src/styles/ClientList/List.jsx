import styled from 'styled-components';

export const ClientList = styled.ul`
	display: block;
	overflow-y: scroll;
	height: 200px;
	width: calc(40% - 1rem);
	margin: 1rem auto;
	list-style: none;

	li {
		display: flex;
		justify-content: space-around;
	}

	li div {
		display: flex;
		justify-content: space-between;
		width: 60%;
		padding: 1rem;
	}

	li div p:nth-child(1) {
		text-align: left;
	}

	li div p:nth-child(2) {
		text-align: right;
	}
`;

export const HeaderListItem = styled.li`
	background-color: #c5c5c5;
`;

export const ListItem = styled.li`
	background-color: #ecebeb;
	cursor: pointer;

	div {
		border-bottom: 2px solid #fefefe;
	}

	&:last-child div {
		border-bottom: none;
	}
`;
