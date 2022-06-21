import * as React from 'react';
import { LoadingContainer as Container } from '../styles/components/loading';
import { motion } from 'framer-motion';
import { BiLoaderCircle } from 'react-icons/bi';

export const Loading: React.FC= (): JSX.Element => {
	return (
		<Container className='loading-container'>
			<section className='loading-wrapper'>
				<motion.div
					transition={{ duration: 2, repeat: Infinity, type: 'tween' }}
					animate={{ rotate: 360 }}
				>
					<BiLoaderCircle/>
				</motion.div>
				<h2>Carregado...</h2>
			</section>
		</Container>
	);
};
