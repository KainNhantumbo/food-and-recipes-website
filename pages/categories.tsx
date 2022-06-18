import { NextPage } from 'next';
import { BiCategory, BiCategoryAlt, BiGrid, BiGridAlt } from 'react-icons/bi';
import Footer from '../components/Footer';
import HeadPage from '../components/Head';
import Header from '../components/Header';
import { CategoriesContainer as Container} from '../styles/categories';

const Categories: NextPage = (): JSX.Element => {
	return (
		<>
			<HeadPage />
			<Header />
			<Container>
				<section className='upper-container'>
					<h2>
						<BiCategoryAlt/>
						<span>Receitas por categoria</span></h2>
				</section>
				<article className='base-container'>

				</article>
				
			</Container>
			<Footer />
		</>
	);
};

export default Categories;
