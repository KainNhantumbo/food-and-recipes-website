import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import HeadPage from '../components/Head';
import { HomeContainer as Container } from '../styles/home';
import Header from '../components/Header';
import PageLayout from '../components/PageLayout';
import Footer from '../components/Footer';

const Home: NextPage = () => {
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

export default Home;
