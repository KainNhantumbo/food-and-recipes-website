import { FC } from 'react';
import { FaPlus } from 'react-icons/fa';
import { HeaderContainer as Container } from '../styles/components/header';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface Props {}

const Header: FC<Props> = (): JSX.Element => {
	const router = useRouter();
	return (
		<Container>
			<h2 className='brand' onClick={() => router.push('/')}>
				<FaPlus />
				<span>Umino Delicias</span>
			</h2>
			<nav className='navbar'>
				<ul>
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
