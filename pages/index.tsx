import type { NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import HeadPage from '../components/Head';
import { HomeContainer as Container } from '../styles/home';
import Header from '../components/Header';
import PageLayout from '../components/PageLayout';
import Footer from '../components/Footer';
import { base_api_url } from '../utils/utils';
import Image from 'next/image';
import { FaSearch, FaTimes, FaUser } from 'react-icons/fa';
import { BiAlarm } from 'react-icons/bi';
import Link from 'next/link';
import { FormEvent } from 'react';

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

	async function searchData(e: FormEvent<HTMLFormElement>) {
		try {
			e.preventDefault();
			console.log(e);
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<>
			<HeadPage />
			<Header />
			<PageLayout />
			<Container>
				<section className='illustration-container'></section>
				<section className='toolbar-container'>
					<form onSubmit={searchData}>
						<input type='text' placeholder='Pesquisar receita' />
						<button type='submit'>
							<FaSearch />
						</button>
						<button type='reset'>
							<FaTimes />
						</button>
					</form>
				</section>
				<div className='main-container'>
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
								<Link href={`/post/${_id}`}>
									<section key={_id} className='post'>
										<section className='image'>
											<img src={image} alt={image_alt} />
										</section>
										<section className='details-container'>
											<h3 className='title' title={title}>
												<span>{title}</span>
											</h3>
											<p title={description}>
												{description.length > 70
													? description.slice(0, 70) + '...'
													: description}
											</p>
											<div className='chors'>
												<section>
													<h5>Pessoas</h5>
													<h5>
														<FaUser />
														<span>{serving_yield} </span>
													</h5>
												</section>
												<section>
													<h4>Tempo</h4>
													<h5>
														<BiAlarm />
														<span>14h 30min</span>
													</h5>
												</section>
											</div>
										</section>
									</section>
								</Link>
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
