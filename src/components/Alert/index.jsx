import { AlertMessage } from '../../styles/Alert/Alert';

function Alert({ type, message }) {
	let messageType = '';
	switch (type) {
		case 'info':
			messageType = 'Info !';
			break;
		case 'error':
			messageType = 'Erreur !';
			break;
		case 'warn':
			messageType = 'Attention !';
			break;
		default:
			messageType = 'Info !';
	}

	return (
		<AlertMessage className={type + ' alert'}>
			<strong>{messageType}</strong> {message}
		</AlertMessage>
	);
}

export default Alert;
