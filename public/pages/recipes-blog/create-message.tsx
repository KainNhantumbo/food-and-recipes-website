import { CreateMessageContainer as Container } from '../../styles/recipes-blog/create-message';
import IndexPage from '../../components/Head';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import Aside from '../../components/recipes-blog/Aside';
import Header from '../../components/Header';
import {
	FaEdit,
	FaEnvelopeOpen,
	FaPaperPlane,
	FaRegEnvelopeOpen,
} from 'react-icons/fa';
import { useState, ChangeEvent } from 'react';
import { Toolbar } from '../../components/toolbar';

interface MessageProps {
	title: string;
	message: string;
}

const CreateMessage: NextPage = (): JSX.Element => {
	const router = useRouter();
	const [formData, setFormData] = useState<MessageProps>({
		title: '',
		message: '',
	});
	const [errorMessage, setErrorMessage] = useState('');
	const handleChange = (
		e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
	): void => {
		setFormData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		console.log(formData);
	};

	return (
		<>
			<IndexPage />
			<Container>
				<Header location='Nova Mensagem' />
				<Aside />

				<main>
					<Toolbar
						label='Mensages Enviadas'
						icon={<FaEnvelopeOpen />}
						link={'/recipes-blog/messages'}
					/>

					<article>
						<div className='form-container'>
							<section className='message'>
								<h2>
									<span>Nova Mensagem</span>
								</h2>
							</section>
							<form onSubmit={handleSubmit}>
								<label htmlFor='title'>
									<FaEdit />
									<span>Título</span>
								</label>
								<input
									type='text'
									placeholder='Escreva o título da newsletter'
									name='title'
									required
									maxLength={250}
									onChange={(e) => handleChange(e)}
								/>
								<label htmlFor='message'>
									<FaRegEnvelopeOpen />
									<span>Mensagem</span>
								</label>
								<textarea
									name='message'
									placeholder='Escreva o conteúdo da newsletter'
									rows={12}
									required
									onChange={(e) => handleChange(e)}
								/>
								<span className='errorMessage'>{errorMessage}</span>
								<section className='ections'>
									<button type='submit'>
										<FaPaperPlane />
										<span>Enviar Mensagem</span>
									</button>
								</section>
							</form>
						</div>
					</article>
				</main>
			</Container>
		</>
	);
};

export default CreateMessage;
