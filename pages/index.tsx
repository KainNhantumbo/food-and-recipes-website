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
import { FaTimes, FaUser, FaWind } from 'react-icons/fa';
import { VscError } from 'react-icons/vsc';

import { BiAlarm, BiErrorCircle, BiRestaurant, BiSearch } from 'react-icons/bi';
import { FormEvent, useState } from 'react';
import Error from 'next/error';
import axios from 'axios';
import { Loading } from '../components/Loading';

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
	const [searchValue, setSearchValue] = useState('');
	const [isClearButton, setIsClearButton] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isMessage, setIsMessage] = useState(false);
	const [loadState, setLoadState] = useState({
		icon: <FaWind />,
		info: 'Nenhuma postagem corresponde a sua pesquisa.',
	});
	if (!initialData) {
		return <Error statusCode={500} />;
	}
	const [data, setData] = useState<dataProps>(initialData);
	const posts = data.posts;

	// gets data from the server after a query
	async function searchData(e: FormEvent<HTMLFormElement>): Promise<void> {
		try {
			e.preventDefault();
			setIsMessage(false);
			setIsLoading(true);
			const response = await axios({
				method: 'get',
				url: `${base_api_url}/recipes/posts?fields=cook_time,serving_yield,description,title,image,image_alt,image_url&title=${searchValue}`,
			});
			setData(response.data);
			if (response.data.posts.length === 0) {
				setIsMessage(true);
			}
			setIsLoading(false);
		} catch (err: any) {
			console.log(err.message);
			setIsLoading(false);
			setIsMessage(true);

			if (err.code === 'ERR_NETWORK') {
				setLoadState(() => ({
					icon: <BiErrorCircle />,
					info: 'Erro de conexão. Veja as suas configurações de internet.',
				}));
			} else {
				setLoadState(() => ({
					icon: <VscError />,
					info: 'Parece que algo está errado. Tente recarregar a página.',
				}));
			}
		}
	}

	// gets data from the server
	const revalidateData = async (): Promise<void> => {
		try {
			setIsMessage(false);
			setIsLoading(true);
			const response = await axios({
				method: 'get',
				url: `${base_api_url}/recipes/posts?fields=cook_time,serving_yield,description,title,image,image_alt,image_url`,
			});
			setData(response.data);
			if (response.data.posts.length === 0) {
				setIsMessage(true);
			}
			setIsLoading(false);
		} catch (err: any) {
			console.log(err.message);
			setIsLoading(false);
			setIsMessage(true);

			if (err.code === 'ERR_NETWORK') {
				setLoadState(() => ({
					icon: <BiErrorCircle />,
					info: 'Erro de conexão. Veja as suas configurações de internet.',
				}));
			} else {
				setLoadState(() => ({
					icon: <VscError />,
					info: 'Parece que algo está errado. Tente recarregar a página.',
				}));
			}
		}
	};

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
								if (e.target.value.length >= 0) {
									setIsClearButton(true);
								} else {
									setIsClearButton(false);
								}
								if (e.target.value.length < 1) {
									revalidateData();
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
					{isMessage ? (
						<article className='empty-message'>
							<section>
								{loadState.icon}
								<h2>{loadState.info}</h2>
							</section>
						</article>
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
