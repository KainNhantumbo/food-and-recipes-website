import { NextPage } from 'next';
import { FaBox, FaSortAlphaDown } from 'react-icons/fa';
import Footer from '../../components/Footer';
import HeadPage from '../../components/Head';
import Header from '../../components/Header';
import { RecipesContainer as Container } from '../../styles/recipes';
import Link from 'next/link';
import Image from 'next/image';
import PageLayout from '../../components/PageLayout';
import { base_api_url } from '../../utils/utils';
import { useRouter } from 'next/router';
import {
	BiDotsVerticalRounded,
	BiErrorCircle,
	BiLeftArrowAlt,
	BiRightArrowAlt,
} from 'react-icons/bi';
import { HiArrowCircleRight } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { getURL } from 'next/dist/shared/lib/utils';
import _ from 'lodash';
import { VscError } from 'react-icons/vsc';
import { Loading } from '../../components/Loading';

interface PostData {
	_id: string;
	title: string;
	image_alt: string;
	image_url: string;
	description: string;
	image: string;
}

interface dataProps {
	results: number;
	posts: PostData[];
}

const Filters: NextPage = (): JSX.Element => {
	const router = useRouter();
	const [pageIndex, setPageIndex] = useState(1);
	const [data, setData] = useState<dataProps>({ results: 0, posts: [] });

	const posts = data.posts;
	const pages = _.range(1, Math.ceil(data.results / 5));

	const [isLoading, setIsLoading] = useState(false);
	const [isMessage, setIsMessage] = useState(false);
	const [loadState, setLoadState] = useState({
		icon: <FaBox />,
		info: 'Nenhuma postagem corresponde a sua pesquisa.',
	});

	// gets data from the server
	const fetcher = async (page: string | number): Promise<void> => {
		try {
			setIsMessage(false);
			setIsLoading(true);
			const response = await axios({
				method: 'get',
				url: `${base_api_url}/recipes/posts?fields=description,title,image,image_alt,image_url&page=${page}`,
			});
			setData(response.data);
			setIsLoading(false);
		} catch (err: any) {
			console.log(err);
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

	useEffect(() => {
		const params = getURL().split('?')[1].slice(5);
		fetcher(params);
	}, []);

	return (
		<>
			<HeadPage />
			<Header />
			<PageLayout />
			<Container>
				<section className='upper-container'>
					<h2>
						<FaSortAlphaDown />
						<span>Receitas de {}</span>
					</h2>
				</section>
				<article className='base-container'>
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
						posts.map(({ _id, image, image_alt, title, description }) => {
							return (
								<section className='recipe' key={_id}>
									<HiArrowCircleRight className='arrow-icon' />
									<Link href={`/post/${_id}`}>
										<img title={image_alt} src={image} />
									</Link>
									<Link href={`/post/${_id}`}>
										<div className='info-container'>
											<h3>
												<BiDotsVerticalRounded />
												<span>{title}</span>
											</h3>
											<h4>
												<BiDotsVerticalRounded />
												<span>{description}</span>
											</h4>
										</div>
									</Link>
								</section>
							);
						})
					)}
				</article>

				<section className='pagination-container'>
					<section className='pagination'>
						<motion.button
							whileTap={{ scale: 0.7 }}
							transition={{ type: 'spring', duration: 0.5 }}
							onClick={() => {
								if (pageIndex === 1) return;
								setPageIndex(pageIndex - 1);
								router.push(`/recipes?page=${pageIndex - 1}`);
								fetcher(pageIndex - 1);
							}}
						>
							<BiLeftArrowAlt />
						</motion.button>

						{pages.map((page) => (
							<motion.button
								key={page}
								style={{
									borderColor:
										page === pageIndex ? 'rgb(77, 124, 95)' : 'transparent',
								}}
								whileTap={{ scale: 0.7 }}
								transition={{ type: 'spring', duration: 0.5 }}
								onClick={() => {
									router.push(`/recipes?page=${page}`);
									setPageIndex(page);
									fetcher(page);
								}}
							>
								<span>{page}</span>
							</motion.button>
						))}

						<motion.button
							whileTap={{ scale: 0.7 }}
							transition={{ type: 'spring', duration: 0.5 }}
							onClick={() => {
								if (pageIndex === Math.ceil(data.results / 10)) return;
								setPageIndex(pageIndex + 1);
								router.push(`/recipes?page=${pageIndex + 1}`);
								fetcher(pageIndex + 1);
							}}
						>
							<BiRightArrowAlt />
						</motion.button>
					</section>
				</section>
			</Container>
			<Footer />
		</>
	);
};

export default Filters;
