import { FC } from 'react';
import { BiSun, BiUpArrowAlt } from 'react-icons/bi';
import { useAppContext } from '../context/AppContext';
import { AppContainer as Container } from '../styles/app';

const PageLayout: FC = (): JSX.Element => {
	const { themeSwitcher, slidePageUp } = useAppContext();
	return (
		<Container>
			<section className='fluent-buttons'>
				<div>
					<button title='Trocar o tema' onClick={themeSwitcher}>
						<BiSun />
					</button>
					<button title='Ir ao topo' onClick={slidePageUp}>
						<BiUpArrowAlt />
					</button>
				</div>
			</section>
		</Container>
	);
};

export default PageLayout;
