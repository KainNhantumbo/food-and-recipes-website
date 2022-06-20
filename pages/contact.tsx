import { ContactContainer as Container } from '../styles/contact';
import { BiEnvelope, BiMap, BiMailSend } from 'react-icons/bi';
import { useState } from 'react';
import { FaConnectdevelop, FaEnvelope } from 'react-icons/fa';
import HeadPage from '../components/Head';
import PageLayout from '../components/PageLayout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const Contact = () => {
	const [messageStatus, setMessageStatus] = useState(
		'Receberá a sua resposta em seu email assim que possível.'
	);

	return (
		<>
			<HeadPage />
			<Header />
			<PageLayout />
			<Container>
				<section className='intro'>
					<h1>
						Contacto <FaConnectdevelop />
					</h1>
					<h2>Como podemos ajudar?</h2>
					<p>
						Por favor use uma das formas de contacto descritas abaixo, clicando
						no <em>link</em> de e-mail ou use o<strong> formulário</strong> de
						contacto mais abaixo se tiver questões de sobre os nossos serviços.
					</p>
				</section>
				<div className='contacts'>
					<h3>
						<BiEnvelope />
						<span>E-mail</span>
					</h3>
					<span>
						<a
							target='_blank'
							rel='noreferrer'
							href='mailto:nhantumbok@gmail.com'
						>
							nhantumbok@gmail.com
						</a>
					</span>
					<h3>
						<BiMap />
						<span>Endereço</span>
					</h3>
					<address>Matola, São Damaso - Maputo, Moçambique.</address>
				</div>
				<article className='messageForm'>
					<h1>
						Formulário <FaEnvelope />
					</h1>
					<form>
						<section className='form-control'>
							<div className='form-item'>
								<label htmlFor='assunto'>Assunto</label>
								<input
									type='text'
									id='assunto'
									name='subject'
									maxLength={120}
									required
									placeholder='Escreva o assunto'
									onChange={(e) => {}}
								/>
							</div>
							<div className='form-item'>
								<label htmlFor='email'>E-mail</label>
								<input
									type='text'
									id='email'
									name='email'
									autoComplete='.com'
									required
									placeholder='Coloque o seu e-mail'
									maxLength={30}
									onChange={(e) => {}}
								/>
							</div>
						</section>
						<label htmlFor='message'>Mensagem</label>
						<textarea
							id='message'
							name='message'
							cols={30}
							rows={10}
							maxLength={2500}
							required
							placeholder='Escreva a sua mensagem'
							onChange={(e) => {}}
						/>
						<span className='errorMessage'>{messageStatus}</span>
						<motion.button
							whileTap={{ scale: 0.8 }}
							whileHover={{ scale: 1.1 }}
							type='submit'
						>
							<BiMailSend />
							<span>Enviar mensagem</span>
						</motion.button>
					</form>
				</article>
			</Container>
			<Footer />
		</>
	);
};

export default Contact;
