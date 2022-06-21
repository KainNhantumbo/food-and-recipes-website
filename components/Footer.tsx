import { FooterContainer as Container } from '../styles/components/footer';
import { FC, FormEvent, useState } from 'react';
import Link from 'next/link';
import { FaNewspaper, FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import axios from 'axios';
import { base_api_url } from '../utils/utils';
import { ConfirmDialog } from './Modal';

const Footer: FC = ({}): JSX.Element => {
	const [subscriptor, setSubscriptor] = useState<string>('');
	const [isModalActive, setIsModalActive] = useState(false);

	const sendNewsletterSubscriber = async (
		e: FormEvent<HTMLFormElement>
	): Promise<void> => {
		try {
			e.preventDefault();
			axios({
				method: 'post',
				url: `${base_api_url}/recipes/newsletter`,
				data: { email: subscriptor },
			});
			setIsModalActive(true);
			console.log(subscriptor);
		} catch (err: any) {
			console.log(err.response.message);
		}
	};

	return (
		<Container>
			{isModalActive ? (
				<ConfirmDialog
					prompt_title='Obrigado por se juntar à nós!'
					prompt_message='Você receberá as novidades do nosso site em seu e-mail. Caso não queira mais receber os e-mails, pode cancelar a sua subscrição a qualquer momento.'
					closeModal={setIsModalActive}
				/>
			) : null}
			<section className='newsletter'>
				<div className='container'>
					<div className='content'>
						<h2>
							<FaNewspaper />
							<span>Newsletter</span>
						</h2>
						<p>
							Seja notificado com as últimas novidades em seu e-mail ao se
							inscrever em nossa newsletter.
						</p>
					</div>
					<section className='form'>
						<form onSubmit={sendNewsletterSubscriber}>
							<input
								type='email'
								name='email'
								autoComplete='email'
								required
								placeholder='Digite o seu e-mail...'
								onChange={(e) => setSubscriptor(e.target.value)}
							/>
							<button type='submit'>
								<FaPaperPlane />
								<span>Enviar</span>
							</button>
						</form>
					</section>
				</div>
			</section>
			<section className='footer-components'>
				<section>
					<h2>Navegação</h2>
					<ul>
						<motion.li whileTap={{ scale: 0.7 }}>
							<Link href='/'>Início</Link>
						</motion.li>
						<motion.li whileTap={{ scale: 0.7 }}>
							<Link href='/recipes?page=1'>Receitas</Link>
						</motion.li>
						<motion.li whileTap={{ scale: 0.7 }}>
							<Link href='/categories'>Categorias</Link>
						</motion.li>
						<motion.li whileTap={{ scale: 0.7 }}>
							<Link href='/about'>Sobre nós</Link>
						</motion.li>
					</ul>
				</section>
				<section>
					<h2>Suporte</h2>
					<ul>
						<motion.li whileTap={{ scale: 0.7 }}>
							<Link href='/hire-me'>Contratar serviços</Link>
						</motion.li>
						<motion.li whileTap={{ scale: 0.7 }}>
							<Link href='/contact'>Contacto</Link>
						</motion.li>
						<motion.li whileTap={{ scale: 0.7 }}>
							<Link href='/privacy-policy'>Política de Privacidade</Link>
						</motion.li>
						<motion.li whileTap={{ scale: 0.7 }}>
							<Link href='/terms-and-conditions'>Termos e Condições</Link>
						</motion.li>
					</ul>
				</section>

				<div className='copyright'>
					<p>&copy; Copyright 2022 MealBlast and Umino Plus.</p>
					<span>
						Todos os Direitos Reservados.{' '}
						<address>Maputo - Moçambique.</address>
					</span>
				</div>
			</section>
		</Container>
	);
};

export default Footer;
