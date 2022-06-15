import { FC } from 'react';
import { FaPlus } from 'react-icons/fa';
import { HeaderContainer as Container } from '../styles/recipes-blog/components/header';
import { useRouter } from 'next/router';

interface Props {
	location: string;
}
const Header: FC<Props> = ({ location }): JSX.Element => {
	const router = useRouter();
	return (
		<Container>
			<h2 className='brand' onClick={() => router.push('/')}>
				<FaPlus />
				<span>Umino</span>
			</h2>

			<p>{location}</p>
		</Container>
	);
};

export default Header;
