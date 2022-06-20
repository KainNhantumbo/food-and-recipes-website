import { NextPage, NextPageContext } from 'next';
import { FaSortAlphaDown } from 'react-icons/fa';
import Footer from '../components/Footer';
import HeadPage from '../components/Head';
import Header from '../components/Header';
import { RecipesContainer as Container } from '../styles/recipes';
import Link from 'next/link';
import Image from 'next/image';
import PageLayout from '../components/PageLayout';
import { base_api_url } from '../utils/utils';
import { useRouter } from 'next/router';
import Error from 'next/error';
import {
	BiDotsVerticalRounded,
	BiLeftArrowAlt,
	BiRightArrowAlt,
} from 'react-icons/bi';
import { HiArrowCircleRight } from 'react-icons/hi';
import useSWR from 'swr';
import { URL, URLSearchParams } from 'url';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { initial } from 'lodash';
import { getURL } from 'next/dist/shared/lib/utils';
import _ from 'lodash';

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

const Recipes: NextPage = (): JSX.Element => {
	const router = useRouter();
	const [pageIndex, setPageIndex] = useState(1);
	const [data, setData] = useState<dataProps>({ results: 0, posts: [] });
	console.log(data);

	const posts = data.posts;
	const pages = _.range(1, Math.ceil(data.results / 5));

	const fetcher = async (page: string | number) => {
		try {
			const response = await axios({
				method: 'get',
				url: `${base_api_url}/recipes/posts?fields=description,title,image,image_alt,image_url&page=${page}`,
			});
			setData(response.data);
		} catch (err) {
			console.log(err);
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
						<span>Todas as receitas</span>
					</h2>
				</section>
				<article className='base-container'>
					{posts?.map(({ _id, image, image_alt, title, description }) => {
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
					})}
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
								whileTap={{ scale: 0.7 }}
								transition={{ type: 'spring', duration: 0.5 }}
								onClick={() => {
									router.push(`/recipes?page=${page}`);
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
								if (pageIndex === Math.ceil(data.results/10)) return;
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

// export async function getServerSideProps(context: NextPageContext) {
// 	try {
// 		const response = await fetch(
// 			`${base_api_url}/recipes/posts?fields=description,title,image,image_alt,image_url&page=1`
// 		);
// 		const initialData = await response.json();

// 		return {
// 			props: { initialData },
// 		};
// 	} catch (err) {
// 		console.log(err);
// 		return {
// 			props: {}, error: err
// 		};
// 	}
// }

export default Recipes;
