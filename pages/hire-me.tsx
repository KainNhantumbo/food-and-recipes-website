import { NextPage } from 'next';
import { HireContainer } from '../styles/hire-me';
import { FaJsSquare } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import HeadPage from '../components/Head';
import Header from '../components/Header';
import PageLayout from '../components/PageLayout';
import Footer from '../components/Footer';
import {
	BiCodeAlt,
	BiConversation,
	BiEnvelope,
	BiPlanet,
} from 'react-icons/bi';
import {
	DiGithubBadge,
	DiMongodb,
	DiNodejsSmall,
	DiReact,
	DiSass,
} from 'react-icons/di';

const HireMe: NextPage = (): JSX.Element => {
	return (
		<>
			<HeadPage />
			<Header />
			<PageLayout />
			<HireContainer>
				<section className='intro'>
					<h1>
						Contratar Serviços
						<BiCodeAlt />
					</h1>
					<h3>Precisa de um Desenvolvedor Web?</h3>
					<p>
						Gostaria de ter o seu próprio site, loja virtual ou aplicação web?
					</p>
					<p>
						Este website é um exemplo de trabalho feito inteiramente por mim.
						Este site foi desenvolvido com as melhores tecnologias para o
						desenvolvimento de aplicações Web, de forma a garantir estabilidade,
						rapidez e segurança para o cliente e seus usuários.
					</p>
					<p>
						Estou sempre aberto para novas oportunidades, parcerias e desafios.
						Se gostou e pretente contratar-me para um serviço, por favor entre
						em contacto através do e-mail abaixo ou use o{' '}
						<a href='/contact'>
							<strong>formulário</strong>
						</a>{' '}
						da página de contacto.
					</p>
				</section>

				<section className='contacts'>
					<h3>
						<BiConversation /> <span>Contacto</span>
					</h3>
					<h3>
						<BiEnvelope />
						<span>E-mail</span>
					</h3>
					<span>
						<a target='_blank' rel='noreferrer' href='mailto:nhantumbok.com'>
							nhantumbok@gmail.com
						</a>
					</span>
					<h3>
						<DiGithubBadge />
						<span>Repositórios do Github</span>
					</h3>
					<span>
						<a
							target='_blank'
							rel='noreferrer'
							href='https://www.github.com/KainNhantumbo'
						>
							github.com/KainNhantumbo
						</a>
					</span>
					<h3>
						<BiPlanet />
						<span>Portifólio</span>
					</h3>
					<span>
						<a
							target='_blank'
							rel='noreferrer'
							href='https://portifolio-dev-kainnhantumbo.vercel.app'
						>
							potifolio-dev-kainnhantumbo.vercel.app
						</a>
					</span>
				</section>
				<section>
					<h3>Tecnologias utilizadas para o trabalho</h3>
				</section>
				<section className='techs'>
					<div>
						<DiReact style={{ color: '#26BAF1' }} />
						<span>React.JS</span>
					</div>
					<div>
						<DiReact style={{ color: '#26BAF1' }} />
						<span>Next.JS</span>
					</div>
					<div>
						<DiSass style={{ color: '#D865A8' }} />
						<span>Sass</span>
					</div>
					<div>
						<FaJsSquare style={{ color: '#FFE400' }} />
						<span>Javascript</span>
					</div>
					<div>
						<SiTypescript style={{ color: '#26BAF1' }} />
						<span>Typescript</span>
					</div>
					<div>
						<DiNodejsSmall style={{ color: 'green' }} />
						<span>Node.JS</span>
					</div>
					<div>
						<DiMongodb style={{ color: 'green' }} />
						<span>MongoDB</span>
					</div>
				</section>
			</HireContainer>
			<Footer />
		</>
	);
};

export default HireMe;
