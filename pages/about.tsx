import { NextPage } from 'next';
import HeadPage from '../components/Head';
import Header from '../components/Header';
import { PrivacyPolicyContainer as Container } from '../styles/privacy-policy';
import PageLayout from '../components/PageLayout';
import Footer from '../components/Footer';

const About: NextPage = (): JSX.Element => {
	return (
		<>
			<HeadPage />
			<Header />
			<PageLayout />
			<Container>
				<section>
					<h1>Sobre nós</h1>
				</section>
				<main>
					<article>
						<p>
							Talvez a primeira pergunta nesta página seria... Quém somos nós?
							Na verdade, para ser sincero, somos um só. Isso mesmo! Sou um
							humilde aventureiro de paladares inspirado pela (advinha só,
							advinha só...) minha grande mãe cozinheira, que desde pequeno vem
							me mimando com o fruto de suas habilidades na cozinha.
						</p>
						<p>
							Sou desenvolvedor web e sempre quis ter o meu próprio website de
							receitas, onde poderia partilhar os meus gostos e preferências e,
							sem deixar de lado, o meu conhecimento sobre a área.
						</p>
						<p>
							O meu objetivo é divulgar as minhas receitas e as receitas que eu
							gosto com os meus queridos leitores. Para conseguir isso, pretendo
							continuar escrevendo artigos aqui, não só como criandor de
							conteúdo, mas por que amo cozinhar.
						</p>
						<p>
							Espero que goste das receitas que for a encontrar neste site e que
							Deus abençoe.
						</p>
					</article>
				</main>
			</Container>
			<Footer />
		</>
	);
};

export default About;
