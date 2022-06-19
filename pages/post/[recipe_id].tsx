import { NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import HeadPage from '../../components/Head';
import { PostContainer as Container } from '../../styles/post';
import Header from '../../components/Header';
import PageLayout from '../../components/PageLayout';
import Footer from '../../components/Footer';
import { base_api_url } from '../../utils/utils';
interface PostData {
	cook_time: string;
	hints: string;
	title: string;
	history: string;
	image_alt: string;
	image_url: string;
	instructions: string;
	serving_yield: string;
	category: string;
	description: string;
	ingredients: string;
	image: string;
}

interface Props {
	locale: [];
	data: { post: PostData };
}

const Post: NextPage<Props> = ({ data }): JSX.Element => {
	const router = useRouter();
	const post = data.post;
	console.log(post);

	return (
		<>
			<HeadPage />
			<Header />
			<PageLayout />
			<Container>
				<section className='upper-container'>
					
				</section>
			</Container>
			<Footer />
		</>
	);
};

export async function getServerSideProps(context: NextPageContext) {
	try {
		const response = await fetch(
			`${base_api_url}/recipes/posts/${context.query.recipe_id}`
		);
		const data = await response.json();

		return {
			props: { locale: context.query, data },
		};
	} catch (err) {
		console.log(err);
	}
}
export default Post;
