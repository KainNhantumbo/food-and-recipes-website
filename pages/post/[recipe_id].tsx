import { NextPage } from 'next';
import { useRouter } from 'next/router';
import HeadPage from '../../components/Head';
import { PostContainer as Container } from '../../styles/post';
import Header from '../../components/Header';
import PageLayout from '../../components/PageLayout';
import Footer from '../../components/Footer';

const Post: NextPage = (): JSX.Element => {
	const router = useRouter();

	return (
		<>
			<HeadPage />
			<Header />
			<PageLayout />
			<Container></Container>
			<Footer />
		</>
	);
};

export default Post;
