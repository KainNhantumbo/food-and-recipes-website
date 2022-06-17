import { FC, useState, useEffect } from 'react';
import { FaBars, FaCoffee } from 'react-icons/fa';
import { HeaderContainer as Container } from '../styles/components/header';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface Props {}

const Header: FC<Props> = (): JSX.Element => {
	const router = useRouter();
	const [isMenu, setIsMenu] = useState(false);

	const toggleMenu = (): void => {
		setIsMenu(!isMenu);
	};

	const changeWidth = () => {
		if (window.innerWidth > 580) {
			setIsMenu(true);
		} else {
			setIsMenu(false);
		}
	};

	useEffect(() => {
		changeWidth();
		window.addEventListener('resize', changeWidth);
		return () => {
			window.removeEventListener('resize', changeWidth);
		};
	}, []);

	return (
		<Container>
			<h2 className='brand' onClick={() => router.push('/')}>
				<FaCoffee />
				<span>MealRaptor</span>
			</h2>
			<button className='menu-btn' onClick={toggleMenu}>
				<FaBars />
			</button>
			<nav className='navbar'>
				<ul style={{ display: isMenu ? 'flex' : 'none' }}>
					<Link href={'/'}>
						<li>
							<span>Início</span>
						</li>
					</Link>
					<Link href={'/recipes'}>
						<li>
							<span>Receitas</span>
						</li>
					</Link>
					<Link href={'/categories'}>
						<li>
							<span>Categorias</span>
						</li>
					</Link>
					<Link href={'/contact'}>
						<li>
							<span>Contato</span>
						</li>
					</Link>
					<Link href={'/about'}>
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
