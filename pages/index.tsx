import type { NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import HeadPage from '../components/Head';
import { HomeContainer as Container } from '../styles/home';
import Header from '../components/Header';
import PageLayout from '../components/PageLayout';
import Footer from '../components/Footer';
import { base_api_url } from '../utils/utils';
import Image from 'next/image';

interface PostData {
	cook_time: string;
	title: string;
	image_alt: string;
	image_url: string;
	serving_yield: string;
	category: string;
	description: string;
	image: string;
	_id: string;
}

interface Props {
	locale: [];
	data: { posts: PostData[] };
}

const Home: NextPage<Props> = ({ data }) => {
	const router = useRouter();
	const posts = data.posts;
	console.log(posts);

	return (
		<>
			<HeadPage />
			<Header />
			<PageLayout />
			<Container>
				<section className='illustration-container'></section>
				<section className='toolbar-container'></section>
				<div className='main-container'>
					<aside className='aside-container'></aside>
					<article className='posts-container'>
						{posts.map(
							({
								_id,
								title,
								cook_time,
								description,
								serving_yield,
								image,
								image_alt,
								image_url,
							}) => (
								<section key={_id} className='post'>
									<section className='image'>
										<img src={image} alt={image_alt} />
									</section>
									<section className='details-container'>
										<h3>
											<span>{title}</span>
										</h3>
										<p>{description}</p>
										<div className='chors'>
											<h4>
												<span>{serving_yield}</span>
											</h4>
											<h4>
												<span>{cook_time}</span>
											</h4>
										</div>
									</section>
								</section>
							)
						)}
					</article>
				</div>
			</Container>
			<Footer />
		</>
	);
};

export async function getServerSideProps(context: NextPageContext) {
	const response = await fetch(`${base_api_url}/recipes/posts`);
	const data = await response.json();

	return {
		props: { locale: context.query, data },
	};
}
export default Home;
