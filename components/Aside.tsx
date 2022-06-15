import React from 'react';
import { BiCarousel, BiGridAlt } from 'react-icons/bi';
import { FaEnvelopeOpen, FaLayerGroup, FaNewspaper } from 'react-icons/fa';
import { AsideContainer as Container } from '../styles/components/aside';
import Link from 'next/link';

const Aside: React.FC = (): JSX.Element => {
	return (
		<Container>
			<nav>
				<ul>
					<Link href={'/recipes-blog'}>
						<li>
							<BiGridAlt />
							<span>DashBoard</span>
						</li>
					</Link>
					<Link href={'/recipes-blog'}>
						<li>
							<FaLayerGroup />
							<span>Publicações</span>
						</li>
					</Link>
					<Link href={'/recipes-blog'}>
						<li>
							<BiCarousel />
							<span>Caroussel</span>
						</li>
					</Link>
					<Link href={'/recipes-blog'}>
						<li>
							<FaNewspaper />
							<span>Subscritores</span>
						</li>
					</Link>
					<Link href={'/recipes-blog/messages'}>
						<li>
							<FaEnvelopeOpen />
							<span>Mensagens</span>
						</li>
					</Link>
				</ul>
			</nav>
		</Container>
	);
};

export default Aside;
