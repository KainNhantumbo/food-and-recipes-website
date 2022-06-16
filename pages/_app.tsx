import '../styles/globals.css';
import type { AppProps } from 'next/app';
import AppContext from '../context/AppContext';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { BiCheckCircle } from 'react-icons/bi';
import { AppContainer as Container } from '../styles/app';

function MyApp({ Component, pageProps }: AppProps) {
	const [privacyAdvisor, setprivacyAdvisor] = useState<boolean>();
	// advisor management

	// controls the state of privacy advisor message
	const advisorController = () => {
		setprivacyAdvisor(() => false);
		localStorage.setItem('advisorState', JSON.stringify('false'));
	};

	useEffect(() => {
		const advisorState = JSON.parse(
			localStorage.getItem('advisorState') || 'false'
		);
		if (!advisorState) {
			localStorage.setItem('advisorState', JSON.stringify('true'));
			setprivacyAdvisor(() => true);
		}

		if (advisorState === 'true') {
			setprivacyAdvisor(() => true);
		} else {
			setprivacyAdvisor(() => false);
		}
	}, []);

	return (
		<AppContext>
			<Container>
				<Component {...pageProps} />
				{privacyAdvisor ? (
					<section className='advisor'>
						<div>
							<span>
								Ao navegar na <strong>MealBlast</strong>, você concorda com a
								nossa{' '}
								<a href='/privacy-policy'>
									<strong>política de privacidade</strong>
								</a>
								.
							</span>
							<button onClick={advisorController}>
								<span>Aceitar</span>
							</button>
						</div>
					</section>
				) : null}
			</Container>
		</AppContext>
	);
}

export default MyApp;
