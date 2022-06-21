import { FC, useState, useEffect } from 'react';
import { FaBars, FaCoffee } from 'react-icons/fa';
import { HeaderContainer as Container } from '../styles/components/header';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Header: FC = (): JSX.Element => {
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
				<span>AweBacker</span>
			</h2>
			<motion.button
				whileTap={{ scale: 0.5 }}
				className='menu-btn'
				onClick={toggleMenu}
			>
				<FaBars />
			</motion.button>
			<nav className='navbar'>
				<ul style={{ display: isMenu ? 'flex' : 'none' }}>
					<Link href={'/'}>
						<motion.li
							whileTap={{ scale: 0.7 }}
							whileHover={{ scale: 1.05, y: 1 }}
						>
							<span>Início</span>
						</motion.li>
					</Link>
					<Link href={'/recipes?page=1'}>
						<motion.li
							whileTap={{ scale: 0.7 }}
							whileHover={{ scale: 1.05, y: 1 }}
						>
							<span>Receitas</span>
						</motion.li>
					</Link>
					<Link href={'/categories'}>
						<motion.li
							whileTap={{ scale: 0.7 }}
							whileHover={{ scale: 1.05, y: 1 }}
						>
							<span>Categorias</span>
						</motion.li>
					</Link>
					<Link href={'/contact'}>
						<motion.li
							whileTap={{ scale: 0.7 }}
							whileHover={{ scale: 1.05, y: 1 }}
						>
							<span>Contato</span>
						</motion.li>
					</Link>
					<Link href={'/about'}>
						<motion.li
							whileTap={{ scale: 0.7 }}
							whileHover={{ scale: 1.05, y: 1 }}
						>
							<span>Sobre</span>
						</motion.li>
					</Link>
				</ul>
			</nav>
		</Container>
	);
};

export default Header;
