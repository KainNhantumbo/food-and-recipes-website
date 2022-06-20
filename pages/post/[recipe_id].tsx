import { NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import HeadPage from '../../components/Head';
import { PostContainer as Container } from '../../styles/post';
import Header from '../../components/Header';
import PageLayout from '../../components/PageLayout';
import Footer from '../../components/Footer';
import { base_api_url } from '../../utils/utils';
import Image from 'next/image';
import {
	FaFacebook,
	FaLightbulb,
	FaPinterest,
	FaQuestionCircle,
	FaTwitter,
	FaUser,
	FaWhatsapp,
} from 'react-icons/fa';
import {
	HiClock,
	HiBookmark,
	HiUser,
	HiUserCircle,
	HiUsers,
	HiInformationCircle,
	HiViewGrid,
} from 'react-icons/hi';
import { BiAlarm, BiRestaurant } from 'react-icons/bi';
import Link from 'next/link';

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
				<article>
					<section className='intro'>
						<h1>
							<span>
								<strong>{post.title}</strong>
							</span>
						</h1>
						<h3>
							<span>{post.description}</span>
						</h3>
						<section className='post-details'>
							<div className='category'>
								<HiBookmark />
								<span>{post.category}</span>
							</div>
							<div>
								<HiClock />
								<span>{post.cook_time}</span>
							</div>
							<div>
								<HiUsers />
								<span>{post.serving_yield} pessoas</span>
							</div>
						</section>
					</section>

					<section className='upper-container'>
						<section title={post.image_alt} className='illustration'>
							<img src={post.image} alt={post.image_alt} />
						</section>
					</section>

					<section className='base-container'>
						<section className='post-section'>
							<h3 className='label'>
								<HiViewGrid />
								<span>
									<strong>Ingredientes</strong>
								</span>
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
								<HiInformationCircle />
								<span>
									<strong>Modo de Preparo</strong>
								</span>
							</h3>
							<section className='body'>
								{post.instructions.includes('\n') ? (
									post.instructions.split('\n').map((phrase) => <p>{phrase}</p>)
								) : (
									<p>{post.instructions}</p>
								)}
							</section>
						</section>

						<section className='post-section hints'>
							<h3 className='label'>
								<FaLightbulb />
								<span>
									<strong>Dicas</strong>
								</span>
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
								<span>
									<strong>Você sabia?</strong>
								</span>
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
					<section className='share-container'>
						<h3>
							<span>
								<strong>Compartilhe nas redes sociais</strong>
							</span>
						</h3>
						<section className='social-container'>
							<Link href={'/'}>
								<div>
									<FaWhatsapp />
								</div>
							</Link>
							<Link href={'/'}>
								<div>
									<FaFacebook />
								</div>
							</Link>
							<Link href={'/'}>
								<div>
									<FaPinterest />
								</div>
							</Link>
							<Link href={'/'}>
								<div>
									<FaTwitter />
								</div>
							</Link>
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
