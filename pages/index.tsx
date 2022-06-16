import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import HeadPage from '../components/Head';
import { BiCog } from 'react-icons/bi';
import { FaArrowRight } from 'react-icons/fa';
import { HomeContainer as Container } from '../styles/home';
import Header from '../components/Header';
import PageLayout from '../components/PageLayout';

const Home: NextPage = () => {
	const router = useRouter();

	return (
		<>
			<HeadPage />
			<Container>
				<Header />
				<PageLayout />
				<main>
					<article className='actions-container'>
						<div className='action'>
							<BiCog className='icon' />
							<span>Gerenciar Recipes Blog</span>
							<button onClick={() => router.push('/recipes-blog')}>
								<FaArrowRight />
								<span>Gerenciar</span>
							</button>
						</div>
						<div className='action'>
							<BiCog className='icon' />
							<span>Gerenciar Usuários</span>
							<button onClick={() => router.push('/users')}>
								<FaArrowRight />
								<span>Gerenciar</span>
							</button>
						</div>
					</article>
				</main>
			</Container>
		</>
	);
};

export default Home;
