import type { NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import HeadPage from '../components/Head';
import { HomeContainer as Container } from '../styles/home';
import Header from '../components/Header';
import PageLayout from '../components/PageLayout';
import Footer from '../components/Footer';
import { base_api_url } from '../utils/utils';

interface PostData {
	cook_time: string;
	title: string;
	image_alt: string;
	image_url: string;
	serving_yield: string;
	category: string;
	description: string;
	image: string;
}

interface Props {
	locale: [];
	data: { post: PostData };
}

const Home: NextPage<Props> = ({ data }) => {
	const router = useRouter();
	const post = data.post;
	console.log(post);

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

export async function getServerSideProps(context: NextPageContext) {
	try {
		const response = await fetch(`${base_api_url}/recipes/posts}`);
		const data = await response.json();

		return {
			props: { locale: context.query, data },
		};
	} catch (err) {
		console.log(err);
	}
}
export default Home;
