import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import IndexPage from '../components/Head';
import { BiCog } from 'react-icons/bi';
import { FaArrowRight } from 'react-icons/fa';
import { HomeContainer as Container } from '../styles/home';

const Home: NextPage = () => {
	const router = useRouter();

	return (
		<>
			<IndexPage />
			<Container>
				<header>
					<h1>Administração</h1>
					<h2>O que vamos fazer hoje?</h2>
				</header>
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
