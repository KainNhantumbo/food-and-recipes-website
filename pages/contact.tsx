import { ContactContainer } from '../styles/contact';
import { BiMessageCheck, BiEnvelope, BiMap, BiMailSend } from 'react-icons/bi';
import { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';

const Contact = () => {
	const [messageStatus, setMessageStatus] = useState(
		'Receberá a sua resposta em seu email assim que possível.'
	);

	return (
		<ContactContainer>
			<section className='intro'>
				<h1>
					Contacto <BiMessageCheck />
				</h1>
				<h2>Esteja sempre ligado.</h2>
				<p>
					Por favor use uma das formas de contacto descritas abaixo, clique no{' '}
					<em>link</em> de e-mail ou use o<strong> formulário</strong> de
					contacto mais abaixo se tiver questões de sobre os nossos produtos e
					serviços.
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
					<label htmlFor='assunto'>Assunto</label>
					<input
						type='text'
						id='assunto'
						maxLength={120}
						placeholder='Escreva o assunto'
						onChange={(e) => {}}
					/>
					<label htmlFor='message'>Mensagem</label>
					<textarea
						id='message'
						cols={30}
						rows={10}
						maxLength={2500}
						placeholder='Escreva a sua mensagem'
						onChange={(e) => {}}
					></textarea>
					<label htmlFor='email'>E-mail</label>
					<input
						type='text'
						id='email'
						placeholder='Coloque o seu e-mail'
						maxLength={30}
						onChange={(e) => {}}
					/>

					<span className='errorMessage'>{messageStatus}</span>
					<button type='submit'>
						<BiMailSend />
						<span>Enviar mensagem</span>
					</button>
				</form>
			</article>
		</ContactContainer>
	);
};

export default Contact;
