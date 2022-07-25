import { useState } from 'react';
import List from './ClientList';
import Details from './ClientDetails';

function App() {
	const [client, getClient] = useState([]);

	return (
		<div>
			<List client={client} getClient={getClient} />
			<Details client={client} getClient={getClient} />
		</div>
	);
}

export default App;
