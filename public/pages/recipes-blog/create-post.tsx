import { CreatePostContainer as Container } from '../../styles/recipes-blog/create-post';
import IndexPage from '../../components/Head';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import Aside from '../../components/recipes-blog/Aside';
import Header from '../../components/Header';
import {
	FaClock,
	FaCoffee,
	FaCubes,
	FaEdit,
	FaFileImage,
	FaLayerGroup,
	FaList,
	FaSeedling,
	FaShare,
	FaSortAlphaDown,
	FaUpload,
} from 'react-icons/fa';
import { useState, ChangeEvent } from 'react';
import { Toolbar } from '../../components/toolbar';

interface PostProps {
	title: string;
	description: string;
	category: string;
	serving_yield: string;
	ingredients: string;
	cook_time: string;
	instructions: string;
	image_alt: string;
	image: File | {};
}

const CreatePost: NextPage = (): JSX.Element => {
	const router = useRouter();
	const [formData, setFormData] = useState<PostProps>({
		title: '',
		description: '',
		category: '',
		serving_yield: '',
		instructions: '',
		ingredients: '',
		image_alt: '',
		cook_time: '',
		image: {},
	});

	const [errorMessage, setErrorMessage] = useState('');
	const handleChange = (
		e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
	): void => {
		setFormData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value,
		}));
	};
	const [files, setFiles] = useState<File[]>([]);
	const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
		const fileList: FileList | null = e.target.files;
		const fileArr: File[] = [];
		Object.values(fileList || {}).forEach((value) => {
			fileArr.push(value);
		});
		setFiles(fileArr);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		if (files.length === 0) {
			setErrorMessage('Carregue a imagem da publicação.');
			setTimeout(() => {
				setErrorMessage('');
			}, 3000);
			return;
		}
		formData.image = files[0];
		console.log(formData);
	};

	return (
		<>
			<IndexPage />
			<Container>
				<Header location='Nova Publicação' />
				<Aside />

				<main>
					<Toolbar
						label='Publicações'
						icon={<FaLayerGroup />}
						link={'/recipes-blog/posts'}
					/>

					<article>
						<div className='form-container'>
							<section className='message'>
								<h2>
									<span>Nova Publicação</span>
								</h2>
							</section>
							<form onSubmit={handleSubmit}>
								<label htmlFor='title'>
									<FaEdit />
									<span>Título</span>
								</label>
								<input
									type='text'
									placeholder='Escreva o título da receita'
									name='title'
									required
									maxLength={250}
									onChange={(e) => handleChange(e)}
								/>
								<label htmlFor='description'>
									<FaSeedling />
									<span>Descrição</span>
								</label>
								<input
									type='text'
									name='description'
									required
									placeholder='Descrição da receita'
									onChange={(e) => handleChange(e)}
								/>
								<label htmlFor='serving'>
									<FaCoffee />
									<span>Pratos</span>
								</label>
								<input
									type='number'
									min={1}
									name='serving_yield'
									required
									placeholder='Quantidade de pratos a servir'
									onChange={(e) => handleChange(e)}
								/>
								<label htmlFor='cook_time'>
									<FaClock />
									<span>Tempo de Preparo</span>
								</label>
								<input
									type='text'
									placeholder='Tempo de preparo da receita'
									name='cook_time'
									required
									onChange={(e) => handleChange(e)}
								/>
								<label htmlFor='category'>
									<FaCubes />
									<span>Categoria</span>
								</label>
								<input
									type='text'
									name='category'
									placeholder='Categoria da receita. Ex: doces e salgados'
									required
									onChange={(e) => handleChange(e)}
								/>
								<label htmlFor='description'>
									<FaList />
									<span>Ingredientes</span>
								</label>
								<textarea
									name='ingredients'
									placeholder='Escreva os ingredientes da receita'
									rows={5}
									required
									onChange={(e) => handleChange(e)}
								/>
								<label htmlFor='instructions'>
									<FaSortAlphaDown />
									<span>Instruções</span>
								</label>
								<textarea
									name='instructions'
									placeholder='Escreva as instruções para o preparo da receita'
									rows={12}
									required
									onChange={(e) => handleChange(e)}
								/>
								<label htmlFor='category'>
									<FaFileImage />
									<span>Descrição da imagem (alt)</span>
								</label>
								<input
									type='text'
									name='image_alt'
									required
									placeholder='Texto do atributo alt da imagem'
									onChange={(e) => handleChange(e)}
								/>
								<label htmlFor='image_file' className='file-label'>
									<FaUpload />
									<span>Carregar imagem da publicação</span>
								</label>
								<input
									type='file'
									id='image_file'
									accept='image/*'
									onChange={(e) => handleFiles(e)}
								/>
								<span className='errorMessage'>{errorMessage}</span>
								<section className='ections'>
									<button type='submit'>
										<FaShare />
										<span>Publicar</span>
									</button>
								</section>
							</form>
						</div>
					</article>
				</main>
			</Container>
		</>
	);
};

export default CreatePost;
