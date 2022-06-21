import { ContactContainer as Container } from '../styles/contact';
import { BiEnvelope, BiMap, BiMailSend } from 'react-icons/bi';
import { ChangeEvent, FormEvent, useState } from 'react';
import { FaConnectdevelop, FaEnvelope } from 'react-icons/fa';
import HeadPage from '../components/Head';
import PageLayout from '../components/PageLayout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { ConfirmDialog } from '../components/Modal';

const Contact = () => {
	const [messageStatus, setMessageStatus] = useState(
		'Receberá a sua resposta em seu email assim que possível.'
	);
	const [isModalActive, setIsModalActive] = useState(false);

	const [formData, setFormData] = useState({
		name: 'Recipes [App Latte]',
		email: 'nhantumbok@gmail.com',
		subject: '',
		message: '',
		from_email: '',
	});

	// picks form data
	const formDataPicker = (
		e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
	) => {
		setFormData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value,
		}));
	};

	// sends email
	const emailSender = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// email sender transport
		// emailjs
		// 	.send(
		// 		'service_sjw9i8b',
		// 		'template_eso630j',
		// 		formData,
		// 		'z3FUpU83GBFJyGXVF'
		// 	)
		// 	.then(
		// 		(result) => {
		// 			console.log(result.text);
		// 			alert('Message sent sucessfully!');
		// 		},
		// 		(error) => {
		// 			console.log(error.text);
		// 			alert('An error ocurred, try again later!');
		// 		}
		// 	);
	};

	return (
		<>
			<HeadPage />
			<Header />
			<PageLayout />
			<Container>
				{isModalActive ? (
					<ConfirmDialog
						prompt_title='Mensagem enviada.'
						prompt_message='Receberá a resposta para sua mensagem em breve. Obrigado!'
						closeModal={setIsModalActive}
					/>
				) : null}
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
					<form onSubmit={emailSender}>
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
									onChange={(e) => formDataPicker(e)}
								/>
							</div>
							<div className='form-item'>
								<label htmlFor='email'>E-mail</label>
								<input
									type='email'
									id='email'
									name='from_email'
									required
									placeholder='Coloque o seu e-mail'
									maxLength={30}
									onChange={(e) => formDataPicker(e)}
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
							onChange={(e) => formDataPicker(e)}
						/>
						<span className='errorMessage'>{messageStatus}</span>
						<motion.button
							whileTap={{ scale: 0.8 }}
							whileHover={{ scale: 1.05 }}
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
