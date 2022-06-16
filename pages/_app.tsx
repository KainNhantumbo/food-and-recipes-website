import '../styles/globals.css';
import type { AppProps } from 'next/app';
import AppContext from '../context/AppContext';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { BiCheckCircle } from 'react-icons/bi';

function MyApp({ Component, pageProps }: AppProps) {
	const [privacyAdvisor, setprivacyAdvisor] = useState();
	// advisor management

	// controls the state of privacy advisor message
	const advisorController = () => {
		setprivacyAdvisor(() => false);
		localStorage.setItem('advisorState', JSON.stringify('false'));
	};

	useEffect(() => {
		const advisorState = JSON.parse(localStorage.getItem('advisorState') || ``);
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
			<Component {...pageProps} />
			{privacyAdvisor ? (
				<section className='advisor'>
					<div>
						<span>
							Ao usar a <strong>Hagira Brands</strong>, você concorda com os a
							nossa{' '}
							<a href='/privacy-policy'>
								<strong>política de privacidade</strong>
							</a>
							.
						</span>
						<button onClick={advisorController}>
							<BiCheckCircle />
							<span>Aceitar</span>
						</button>
					</div>
				</section>
			) : null}
		</AppContext>
	);
}

export default MyApp;
