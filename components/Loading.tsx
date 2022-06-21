import * as React from 'react';
import {LoadingContainer as Container} from '../styles/components/loading'

interface Props {
	icon: JSX.Element;
	message: string;
}

export const Loading: React.FC<Props> = ({ icon, message }): JSX.Element => {
	return (
		<Container className='loading-container'>
			<section className='loading-wrapper'>
				<div>{icon}</div>
				<h2>{message}</h2>
			</section>
		</Container>
	);
};
