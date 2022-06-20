import { NextPage } from 'next';
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
import { URL } from 'url';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface PostData {
	_id: string;
	title: string;
	image_alt: string;
	image_url: string;
	description: string;
	image: string;
}

const Recipes: NextPage = (): JSX.Element => {
	const router = useRouter();
	const [pageIndex, setPageIndex] = useState(1);

	const fetcher = (args: URL | RequestInfo) =>
		fetch(args).then((res) => res.json());

	const { data } = useSWR(
		`${base_api_url}/recipes/posts?fields=description,title,image,image_alt,image_url`,
		fetcher
	);
	if (!data) {
		return <Error statusCode={500} />;
	}

	const posts: PostData[] = data.posts;
	console.log(posts);

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
					{posts.map(({ _id, image, image_alt, title, description }) => {
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
							whileTap={{ scale: 0.5 }}
							transition={{ type: 'spring', duration: 0.5 }}
						>
							<BiLeftArrowAlt />
						</motion.button>
						<motion.button
							whileTap={{ scale: 0.5 }}
							transition={{ type: 'spring', duration: 0.5 }}
						>
							<span>{pageIndex}</span>
						</motion.button>
						<motion.button
							whileTap={{ scale: 0.5 }}
							transition={{ type: 'spring', duration: 0.5 }}
						>
							<span>{pageIndex + 1}</span>
						</motion.button>
						<motion.button
							whileTap={{ scale: 0.5 }}
							transition={{ type: 'spring', duration: 0.5 }}
						>
							<span>{pageIndex + 2}</span>
						</motion.button>
						<motion.button
							whileTap={{ scale: 0.5 }}
							transition={{ type: 'spring', duration: 0.5 }}
						>
							<span>{pageIndex + 3}</span>
						</motion.button>
						<motion.button
							whileTap={{ scale: 0.5 }}
							transition={{ type: 'spring', duration: 0.5 }}
						>
							<span>{data.results}</span>
						</motion.button>
						<motion.button
							whileTap={{ scale: 0.5 }}
							transition={{ type: 'spring', duration: 0.5 }}
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

export default Recipes;
