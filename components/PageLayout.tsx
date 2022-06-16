import { FC } from 'react';
import { FaArrowUp, FaSun } from 'react-icons/fa';
import { useAppContext } from '../context/AppContext';
import { AppContainer as Container } from '../styles/app';

const PageLayout: FC = (): JSX.Element => {
	const { themeSwitcher, slidePageUp } = useAppContext();
	return (
		<Container>
			<section className='fluent-buttons'>
				<div>
					<button title='Trocar o tema' onClick={themeSwitcher}>
						<FaSun />
					</button>
					<button title='Ir ao topo' onClick={slidePageUp}>
						<FaArrowUp />
					</button>
				</div>
			</section>
		</Container>
	);
};

export default PageLayout;
