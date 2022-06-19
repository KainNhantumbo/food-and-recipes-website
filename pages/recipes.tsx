import { NextPage } from 'next';
import { FaArrowCircleRight, FaSortAlphaDown } from 'react-icons/fa';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import Footer from '../components/Footer';
import HeadPage from '../components/Head';
import Header from '../components/Header';
import { RecipesContainer as Container } from '../styles/recipes';
import cakes from '../assets/cakes.jpg';
import cocktails from '../assets/cocktails.jpg';
import cupcakes from '../assets/cupcakes.jpg';
import fitness_meal from '../assets/fitness.jpg';
import fitness_soup from '../assets/light-soups.jpg';
import shellfish from '../assets/shellfish.jpg';
import other from '../assets/variants.jpg';
import vegetarian from '../assets/vegetarian.jpg';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import Image from 'next/image';
import PageLayout from '../components/PageLayout';

interface CategoriesProps {
	title: string;
	description: string;
	image_alt: string;
	image: StaticImageData;
	destination_url: string;
}

const Recipes: NextPage = (): JSX.Element => {
	const categoriesData: CategoriesProps[] = [
		{
			title: 'Bolos',
			description: 'sdasd',
			image: cakes,
			image_alt: 'imagem de bolos',
			destination_url: '/categories/category=cakes',
		},
		{
			title: 'Cocktails',
			description: 'sdasd',
			image: cocktails,
			image_alt: 'imagem de cocktails',
			destination_url: '/categories/category=cocktails',
		},
		{
			title: 'Cupcakes',
			description: 'sdasd',
			image: cupcakes,
			image_alt: 'imagem de cupcakes',
			destination_url: '/categories/category=cupcakes',
		},
		{
			title: 'Comida leve e saudável',
			description: 'sdasd',
			image: fitness_meal,
			image_alt: 'imagem de comida fitness',
			destination_url: '/categories/category=fitness_meal',
		},
		{
			title: 'Sopas leves e saudáveis',
			description: 'sdasd',
			image: fitness_soup,
			image_alt: 'imagem de sopas fitness',
			destination_url: '/categories/category=fitness_soup',
		},
		{
			title: 'Mariscos',
			description: 'sdasd',
			image: shellfish,
			image_alt: 'imagem de mariscos',
			destination_url: '/categories/category=shellfish',
		},
		{
			title: 'Outros',
			description: 'sdasd',
			image: other,
			image_alt: 'imagem de comida diversa',
			destination_url: '/categories/category=other',
		},
		{
			title: 'Comida vegetariana',
			description:
				'sdasddgjdopfjpgdjkopfkdgpofkpgkodpofkgpodkfpgokdpofkgpodkpfogpdofkpgkd[fkpg][dal][fgd[lfg',
			image: vegetarian,
			image_alt: 'imagem de comida vegetariana',
			destination_url: '/categories/category=vagetarian',
		},
	].sort((a, b) => {
		if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
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
						<FaSortAlphaDown />
						<span>Todas as receitas</span>
					</h2>
				</section>
				<article className='base-container'>
					{categoriesData.map(
						(
							{ image, image_alt, title, description, destination_url },
							index
						) => {
							return (
								<section className='recipe' key={index}>
									<FaArrowCircleRight className='arrow-icon' />
									<div className='image-container'>
										<Link href={destination_url}>
											<Image
												title={image_alt}
												src={image}
												alt={image_alt}
												placeholder='blur'
												width={50}
												height={50}
											/>
										</Link>
									</div>
									<div className='info-container'>
										<Link href={destination_url}>
											<>
												<h3>
													<BiDotsVerticalRounded />
													<span>{title}</span>
												</h3>
												<h4>
													<BiDotsVerticalRounded />
													<span>{description}</span>
												</h4>
											</>
										</Link>
									</div>
								</section>
							);
						}
					)}
				</article>
			</Container>
			<Footer />
		</>
	);
};

export default Recipes;
