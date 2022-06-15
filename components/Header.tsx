import { FC } from 'react';
import { FaPlus } from 'react-icons/fa';
import { HeaderContainer as Container } from '../styles/components/header';
import { useRouter } from 'next/router';

interface Props {}
const Header: FC<Props> = (): JSX.Element => {
	const router = useRouter();
	return (
		<Container>
			<h2 className='brand' onClick={() => router.push('/')}>
				<FaPlus />
				<span>Receitas do Kaynee</span>
			</h2>
		</Container>
	);
};

export default Header;
