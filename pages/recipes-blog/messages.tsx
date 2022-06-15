import { NextPage } from 'next';
import { useRouter } from 'next/router';
import IndexPage from '../../components/Head';
import Header from '../../components/Header';
import Aside from '../../components/Aside';
import { MessagesContainer as Container } from '../../styles/recipes-blog/messages';
import * as React from 'react';
import { useState } from 'react';
import { FaEnvelopeOpenText, FaPlus } from 'react-icons/fa';
import { TiTrash } from 'react-icons/ti';
import { Toolbar } from '../../components/toolbar';

interface MessagesProps {
	_id: string;
	title: string;
	message: string;
	createdAt: string;
}

const Messages: NextPage = () => {
	const [messages, setMessages] = useState<MessagesProps[]>([
		{
			_id: 'sdhfioshndofihsodifj',
			message: 'shdiansdnasdnaiosnd',
			title: 'Comer macas',
			createdAt: '2022-10-23',
		},
		{
			_id: 'sdhfioshndofihdfdasasodifj',
			message: 'shdiansdnasdnaiosnd',
			title: 'Comer macas',
			createdAt: '2022-10-23',
		},
		{
			_id: 'sdhfioshndofihsoddfsdfifj',
			message: 'shdiansdn\nAsd naiospodfjopsjdoif.\nsnd',
			title: 'Comer macas',
			createdAt: '2022-10-23',
		},
	]);

	const router = useRouter();

	return (
		<>
			<IndexPage />
			<Container>
				<Header location='Mensagens Enviadas' />
				<Aside />
				<main>
					<Toolbar
						icon={<FaPlus />}
						link={'/recipes-blog/create-message'}
						label={'Nova Mensagem'}
					/>

					<article className='messages-container'>
						{messages.map(({ _id, message, title, createdAt }) => (
							<section className='message' key={_id}>
								<h3>{title}</h3>
								<span className='date'>{createdAt}</span>
								<FaEnvelopeOpenText className='icon' />
								<>
									{message.includes('\n') ? (
										message
											.split('\n')
											.map((phrase, index) => <p key={index}>{phrase}</p>)
									) : (
										<p>{message}</p>
									)}
								</>
								<button>
									<TiTrash />
									<span>Eliminar Mensagem</span>
								</button>
							</section>
						))}
					</article>
				</main>
			</Container>
		</>
	);
};

export default Messages;
