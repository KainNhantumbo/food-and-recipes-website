import { NextPage } from 'next';
import IndexPage from '../../components/Head';
import { BiCarousel, BiStats, BiSun } from 'react-icons/bi';
import { FaChartBar, FaEdit, FaPlus, FaUsers } from 'react-icons/fa';
import { DashboardContainer as Container } from '../../styles/recipes-blog/dashboard';
import Aside from '../../components/Aside';
import Header from '../../components/Header';
import { useRouter } from 'next/router';
import { useAppContext } from '../../context/AppContext';

const DashBoard: NextPage = () => {
	const router = useRouter();
	const { themeSwitcher } = useAppContext();

	return (
		<>
			<IndexPage />
			<Container>
				<Header location='Dashboard' />
				<Aside />

				<main>
					<section className='cards-container'>
						<h2>
							<BiStats className='icon' />
							<span>Visão Geral</span>
						</h2>
						<section className='cards'>
							<div className='card'>
								<h3>
									<FaChartBar />
									<span>Domínio</span>
								</h3>
								<div>recipes-blog.com</div>
							</div>
							<div className='card'>
								<h3>
									<FaChartBar />
									<span>Publicações</span>
								</h3>
								<div>10</div>
							</div>
							<div className='card'>
								<h3>
									<FaUsers />
									<span>Visitantes</span>
								</h3>
								<div>7000</div>
							</div>
							<div className='card'>
								<h3>
									<FaUsers />
									<span>Subscritores</span>
								</h3>
								<div>10000</div>
							</div>
							<div className='card'>
								<h3>
									<FaUsers />
									<span>Mensagens Enviadas</span>
								</h3>
								<div>500</div>
							</div>
							<div className='card'>
								<h3>
									<BiCarousel />
									<span>Imagens no Caroussel</span>
								</h3>
								<div>5</div>
							</div>
						</section>
					</section>
					<section className='actions-container'>
						<div
							className='action-runner'
							onClick={() => router.push('/recipes-blog/create-post')}
						>
							<FaPlus />
							<span>Nova Publicação</span>
						</div>
						<div
							className='action-runner'
							onClick={() => router.push('/recipes-blog/create-message')}
						>
							<FaEdit />
							<span>Nova Mensagem</span>
						</div>
						<div className='action-runner' onClick={(e) => themeSwitcher()}>
							<BiSun />
							<span>Trocar Tema</span>
						</div>
					</section>
				</main>
			</Container>
		</>
	);
};

export default DashBoard;
