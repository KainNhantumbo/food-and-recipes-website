import { FooterContainer } from '../styles/components/footer';
import { BiSend } from 'react-icons/bi';
import { useState } from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';

const Footer = () => {
	return (
		<FooterContainer>
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
			<section className='newsletter'>
				<h2>Newsletter</h2>
				<p>
					Subscreva-se à nossa newsletter <br></br>
					enviando o seu e-mail, para <br></br>
					saber quando um novo produto <br></br>
					tiver sido lançado em seu e-mail.
				</p>
				<section>
					<label htmlFor='email'>Email</label>
					<div>
						<input
							type='email'
							name='email'
							placeholder='Digite o e-mail aqui...'
							onChange={(e) => {}}
						/>

						<button>
              <FaArrowCircleRight/>
							<span>Enviar</span>
						</button>
					</div>
				</section>
			</section>
			<div className='copyright'>
				<span>&copy; Copyright 2022 MealBlast, Moçambique.</span>
			</div>
		</FooterContainer>
	);
};

export default Footer;
