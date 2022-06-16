import { FooterContainer } from '../styles/components/footer';
import { BiSend } from 'react-icons/bi';
import { useState } from 'react';
import { FaArrowCircleRight, FaNewspaper } from 'react-icons/fa';

const Footer = () => {
	return (
		<FooterContainer>
			<section className='newsletter'>
				<div className='container'>
					<div className='content'>
						<h2>
              <FaNewspaper/>
              <span>Newsletter</span></h2>
						<p>
							Seja notificado com as últimas públicações em seu e-mail ao se inscrever em nossa newsletter.
						</p>
					</div>
					<section className='form'>
						<div>
							<input
								type='email'
								name='email'
								placeholder='Digite o e-mail aqui...'
								onChange={(e) => {}}
							/>
							<button>
								<span>Enviar</span>
							</button>
						</div>
					</section>
				</div>
			</section>
			<section className='footer-components'>
				<section>
					<h2>Loja</h2>
					<ul>
						<li>
							<a href='/'>Início</a>
						</li>
						<li>
							<a href='/about'>Sobre nós</a>
						</li>
						<li>
							<a href='/contact'>Contacto</a>
						</li>
						<li>
							<a href='/privacy-policy'>Política de Privacidade</a>
						</li>
						<li>
							<a href='/terms-and-conditions'>Termos e Condições</a>
						</li>
					</ul>
				</section>
				<section>
					<h2>Desenvolvedor</h2>
					<ul>
						<li>
							<a href='/login'>Entrar</a>
						</li>
						<li>
							<a href='/support'>Suporte</a>
						</li>
						<li>
							<a href='/request-service'>Contratar serviços</a>
						</li>
					</ul>
				</section>

				<div className='copyright'>
					<span>
						&copy; Copyright 2022 MealBlast and Umino Plus,{' '}
						<address>Maputo - Moçambique.</address>{' '}
					</span>
				</div>
			</section>
		</FooterContainer>
	);
};

export default Footer;
