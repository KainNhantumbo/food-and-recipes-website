import { FC, useState } from 'react';
import { FaBars, FaCoffee } from 'react-icons/fa';
import { HeaderContainer as Container } from '../styles/components/header';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface Props {}

const Header: FC<Props> = (): JSX.Element => {
	const router = useRouter();
	const [isMenu, setIsMenu] = useState(false);

	const toggleMenu = (): void => {
		console.log(isMenu);
		setIsMenu((prevValue) => !prevValue);
	};

	return (
		<Container>
			<h2 className='brand' onClick={() => router.push('/')}>
				<FaCoffee />
				<span>MealBlast</span>
			</h2>
			<button className='menu-btn' onClick={toggleMenu}>
				<FaBars />
			</button>
			<nav className='navbar'>
				<ul style={{ display: isMenu ? 'none' : 'flex' }}>
					<Link href={'/recipes-blog'}>
						<li>
							<span>Início</span>
						</li>
					</Link>
					<Link href={'/recipes-blog'}>
						<li>
							<span>Receitas</span>
						</li>
					</Link>
					<Link href={'/recipes-blog'}>
						<li>
							<span>Categorias</span>
						</li>
					</Link>
					<Link href={'/recipes-blog'}>
						<li>
							<span>Contato</span>
						</li>
					</Link>
					<Link href={'/recipes-blog'}>
						<li>
							<span>Sobre</span>
						</li>
					</Link>
				</ul>
			</nav>
		</Container>
	);
};

export default Header;
