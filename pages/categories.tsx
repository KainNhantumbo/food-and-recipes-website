import { NextPage } from 'next';
import { BiCategoryAlt, BiRestaurant } from 'react-icons/bi';
import Footer from '../components/Footer';
import HeadPage from '../components/Head';
import Header from '../components/Header';
import { CategoriesContainer as Container } from '../styles/categories';
import cakes from '../assets/cakes.jpg';
import cocktails from '../assets/cocktails.jpg';
import cupcakes from '../assets/cupcakes.jpg';
import fitness_meal from '../assets/fitness.jpg';
import fitness_soup from '../assets/light-soups.jpg';
import shellfish from '../assets/shellfish.jpg';
import biscuits from '../assets/biscuits.jpg';
import other from '../assets/variants.jpg';
import vegetarian from '../assets/vegetarian.jpg';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import PageLayout from '../components/PageLayout';
import { motion } from 'framer-motion';

interface CategoriesProps {
	label: string;
	image_alt: string;
	image: StaticImageData;
	destination_url: string;
	appear_delay: number;
}

const Categories: NextPage = (): JSX.Element => {
	const categoriesData: CategoriesProps[] = [
		{
			label: 'Biscoitos',
			image: biscuits,
			image_alt: 'imagem de biscoitos',
			destination_url: '/categories/category=biscuits',
			appear_delay: 0,
		},
		{
			label: 'Bolos',
			image: cakes,
			image_alt: 'imagem de bolos',
			destination_url: '/categories/category=cakes',
			appear_delay: 0.2,
		},
		{
			label: 'Cocktails',
			image: cocktails,
			image_alt: 'imagem de cocktails',
			destination_url: '/categories/category=cocktails',
			appear_delay: 0.4,
		},
		{
			label: 'Comida diversa',
			image: other,
			image_alt: 'imagem de comida diversa',
			destination_url: '/categories/category=other',
			appear_delay: 0.6,
		},
		{
			label: 'Comida leve e saudável',
			image: fitness_meal,
			image_alt: 'imagem de comida fitness',
			destination_url: '/categories/category=fitness_meal',
			appear_delay: 0.8,
		},
		{
			label: 'Comida vegetariana',
			image: vegetarian,
			image_alt: 'imagem de comida vegetariana',
			destination_url: '/categories/category=vagetarian',
			appear_delay: 1,
		},
		{
			label: 'Cupcakes',
			image: cupcakes,
			image_alt: 'imagem de cupcakes',
			destination_url: '/categories/category=cupcakes',
			appear_delay: 1.2,
		},
		{
			label: 'Mariscos',
			image: shellfish,
			image_alt: 'imagem de mariscos',
			destination_url: '/categories/category=shellfish',
			appear_delay: 1.4,
		},
		{
			label: 'Sopas leves e saudáveis',
			image: fitness_soup,
			image_alt: 'imagem de sopas fitness',
			destination_url: '/categories/category=fitness_soup',
			appear_delay: 1.6,
		},
	].sort((a, b) => {
		if (a.label.toLowerCase() > b.label.toLowerCase()) return 1;
		return -1;
	});

	return (
		<>
			<HeadPage />
			<Header />
			<PageLayout />
			<Container>
				<section className='upper-container'>
					<h2>
						<BiCategoryAlt />
						<span>Receitas por categoria</span>
					</h2>
				</section>
				<article className='base-container'>
					{categoriesData.map(
						(
							{ image, image_alt, label, destination_url, appear_delay },
							index
						) => {
							return (
								<motion.section
									transition={{
										type: 'spring',
										duration: 0.5,
										delay: appear_delay,
									}}
									initial={{ scale: 0 }}
									animate={{ scale: 1 }}
									className='category'
									key={index}
								>
									<Link href={destination_url}>
										<motion.div
											whileTap={{ scale: 0.8 }}
											whileHover={{ scale: 1.05 }}
											className='image-container'
										>
											<Image
												src={image}
												alt={image_alt}
												placeholder='blur'
												width={200}
												height={200}
											/>
										</motion.div>
									</Link>
									<Link href={destination_url}>
										<h3>
											<BiRestaurant />
											<span>{label}</span>
										</h3>
									</Link>
								</motion.section>
							);
						}
					)}
				</article>
			</Container>
			<Footer />
		</>
	);
};

export default Categories;
