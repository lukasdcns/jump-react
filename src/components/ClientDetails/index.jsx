import { ClientDetails } from '../../styles/ClientDetails/Details';
import Alert from '../Alert';

function Details({ client, getClient }) {
	if (client.length === 0) {
		return (
			<Alert
				type={'info'}
				message={'Vous devez choisir un client pour afficher le détail'}
			/>
		);
	} else {
		return (
			<ClientDetails>
				<legend>Détails</legend>
				<div>Addresse : {client.address}</div>
			</ClientDetails>
		);
	}
}

export default Details;
