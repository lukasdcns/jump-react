import { useState } from 'react';
import { clientsDatas } from '../../datas/clientsDatas';
import {
	ClientList,
	HeaderListItem,
	ListItem,
} from '../../styles/ClientList/List';

function List({ client, getClient }) {
	const [previousClickedClient, setPreviousClickedClient] = useState('');

	function handleClick(event, client) {
		if (previousClickedClient !== '') {
			previousClickedClient.style.backgroundColor = '#ecebeb';
		}

		const currentTarget = event.currentTarget.children[0];
		currentTarget.style.backgroundColor = '#8AB5F0';

		setPreviousClickedClient(currentTarget);
		getClient(client);
	}

	return (
		<ClientList>
			<HeaderListItem>
				<div>
					<p>Nom</p>
					<p>Prénom</p>
				</div>
			</HeaderListItem>
			{clientsDatas.map((client, index) => (
				<ListItem key={client.id} onClick={event => handleClick(event, client)}>
					<div>
						<p> {client.lastName} </p> <p> {client.firstName} </p>
					</div>
				</ListItem>
			))}
		</ClientList>
	);
}

export default List;
