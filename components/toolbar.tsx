import { useRouter } from 'next/router';
import { FC } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { ToolbarContainer as Container } from '../styles/global/toolbar';

interface Props {
	icon: JSX.Element;
	label: string;
	link: string;
}

export const Toolbar: FC<Props> = ({ icon, label, link }): JSX.Element => {
	const router = useRouter();
	return (
		<Container>
			<div onClick={() => router.back()}>
				<FaArrowLeft />
				<span>Voltar</span>
			</div>
			<div onClick={() => router.push(link)}>
				{icon}
				<span>{label}</span>
			</div>
		</Container>
	);
};
