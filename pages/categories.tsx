import { NextPage } from 'next';
import Footer from '../components/Footer';
import HeadPage from '../components/Head';
import Header from '../components/Header';

const Categories: NextPage = (): JSX.Element => {
	return (
		<>
			<HeadPage />
			<Header />
			<Footer />
		</>
	);
};

export default Categories;
