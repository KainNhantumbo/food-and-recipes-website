import type { NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import HeadPage from '../components/Head';
import { HomeContainer as Container } from '../styles/home';
import Header from '../components/Header';
import PageLayout from '../components/PageLayout';
import Footer from '../components/Footer';
import { base_api_url } from '../utils/utils';
import Image from 'next/image';
import Link from 'next/link';
import { FaBox, FaFeather, FaTimes, FaUser } from 'react-icons/fa';
import {
	BiAlarm,
	BiDotsHorizontal,
	BiLoader,
	BiLoaderAlt,
	BiLoaderCircle,
	BiRestaurant,
	BiSearch,
} from 'react-icons/bi';
import { FormEvent, useState } from 'react';
import Error from 'next/error';
import axios from 'axios';
import { Loading } from '../components/Loading';
import { HiDownload } from 'react-icons/hi';

interface PostData {
	cook_time: string;
	title: string;
	image_alt: string;
	image_url: string;
	serving_yield: string;
	description: string;
	image: string;
	_id: string;
}

interface Props {
	initialData: { posts: PostData[]; results: number };
}

interface dataProps {
	results: number;
	posts: PostData[];
}

const Home: NextPage<Props> = ({ initialData }) => {
	const router = useRouter();
	if (!initialData) {
		return <Error statusCode={500} />;
	}
	const [data, setData] = useState<dataProps>(initialData);
	const posts = data.posts;

	const [searchValue, setSearchValue] = useState('');
	const [isClearButton, setIsClearButton] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isMessage, setIsMessage] = useState(true);
	const [LoadData, setLoadData] = useState({
		icon: <BiLoaderCircle />,
		message: '',
	});

	async function searchData(e: FormEvent<HTMLFormElement>) {
		try {
			e.preventDefault();
			const response = await axios({
				method: 'get',
				url: `${base_api_url}/recipes/posts?title=${searchValue}`,
			});

			setData(response.data);
		} catch (err) {
			console.log(err);
		}
	}

	const displayMessages = (message: string, icon: JSX.Element): void => {};
	return (
		<>
			<HeadPage />
			<Header />
			<PageLayout />
			<Container>
				<section className='slide-container'></section>
				<section className='toolbar-container'>
					<h2>
						<BiRestaurant />
						<span>Receitas</span>
					</h2>
					<form onSubmit={searchData}>
						<BiSearch className='search-icon' />
						<input
							type='text'
							placeholder='Pesquisar receita'
							onChange={(e) => {
								if (e.target.value.length > 0) {
									setIsClearButton(true);
								} else {
									setIsClearButton(false);
								}
								setSearchValue(e.target.value);
							}}
						/>
						{isClearButton ? (
							<button type='reset'>
								<FaTimes />
							</button>
						) : null}
					</form>
				</section>
				<div className='main-container'>
					{!isMessage ? (
						<div></div>
					) : isLoading ? (
						<Loading />
					) : (
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
									<Link key={_id} href={`/post/${_id}`}>
										<section className='post'>
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
					)}
				</div>
			</Container>
			<Footer />
		</>
	);
};

export async function getServerSideProps(context: NextPageContext) {
	try {
		const response = await fetch(
			`${base_api_url}/recipes/posts?fields=cook_time,serving_yield,description,title,image,image_alt,image_url`
		);
		const initialData = await response.json();

		return {
			props: { initialData },
		};
	} catch (err) {
		console.log(err);
		return {
			props: {},
		};
	}
}
export default Home;
