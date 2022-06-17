import { FooterContainer } from '../styles/components/footer';
import { useState } from 'react';
import Link from 'next/link';
import { FaNewspaper } from 'react-icons/fa';

const Footer = () => {
	return (
		<FooterContainer>
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
						<form>
							<input
								type='email'
								name='email'
								autoComplete='email'
								required
								placeholder='Digite o seu e-mail aqui...'
								onChange={(e) => {}}
							/>
							<button type='submit'>
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
						<li>
							<Link href='/'>Início</Link>
						</li>
						<li>
							<Link href='/recipes'>Receitas</Link>
						</li>
						<li>
							<Link href='/categories'>Categorias</Link>
						</li>
						<li>
							<Link href='/about'>Sobre nós</Link>
						</li>
					</ul>
				</section>
				<section>
					<h2>Suporte</h2>
					<ul>
						<li>
							<Link href='/hire-me'>Contratar serviços</Link>
						</li>
						<li>
							<Link href='/contact'>Contacto</Link>
						</li>
						<li>
							<Link href='/privacy-policy'>Política de Privacidade</Link>
						</li>
						<li>
							<Link href='/terms-and-conditions'>Termos e Condições</Link>
						</li>
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
		</FooterContainer>
	);
};

export default Footer;
