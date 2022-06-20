import { NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import HeadPage from '../../components/Head';
import { PostContainer as Container } from '../../styles/post';
import Header from '../../components/Header';
import PageLayout from '../../components/PageLayout';
import Footer from '../../components/Footer';
import { base_api_url } from '../../utils/utils';
import Image from 'next/image';
import { FaLightbulb, FaQuestionCircle } from 'react-icons/fa';
import { BiHelpCircle } from 'react-icons/bi';
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
				<section className='title'>
					<h1>
						<span>{post.title}</span>
					</h1>
					<h3>
						<span>{post.description}</span>
					</h3>
				</section>
				<article>
					<section className='upper-container'>
						<section title={post.image_alt} className='illustration'>
							<img src={post.image} alt={post.image_alt} />
						</section>
						<section className='intro'></section>
					</section>
					<section className='base-container'>
						<section className='post-section'>
							<h3 className='label'>
								<span>Ingredientes</span>
							</h3>
							<section className='body'>
								{post.ingredients.includes('\n') ? (
									post.ingredients.split('\n').map((phrase) => <p>{phrase}</p>)
								) : (
									<p>{post.ingredients}</p>
								)}
							</section>
						</section>

						<section className='post-section'>
							<h3 className='label'>
								<span>Modo de Preparo</span>
							</h3>
							<section className='body'>
								{post.instructions.includes('\n') ? (
									post.instructions.split('\n').map((phrase) => <p>{phrase}</p>)
								) : (
									<p>{post.instructions}</p>
								)}
							</section>
						</section>

						<section className='post-section'>
							<h3 className='label'>
								<FaLightbulb />
								<span>Dicas</span>
							</h3>
							<section className='body'>
								{post.history.includes('\n') ? (
									post.history.split('\n').map((phrase) => <p>{phrase}</p>)
								) : (
									<p>{post.history}</p>
								)}
							</section>
						</section>

						<section className='post-section'>
							<h3 className='label'>
								<FaQuestionCircle />
								<span>Você sabia?</span>
							</h3>
							<section className='body'>
								{post.ingredients.includes('\n') ? (
									post.ingredients.split('\n').map((phrase) => <p>{phrase}</p>)
								) : (
									<p>{post.ingredients}</p>
								)}
							</section>
						</section>
					</section>
				</article>
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
