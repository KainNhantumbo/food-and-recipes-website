import { NextPage } from 'next';
import { FaEnvelope, FaUser } from 'react-icons/fa';
import { TiTrash } from 'react-icons/ti';
import IndexPage from '../components/Head';
import { UsersContainer as Container } from '../styles/users';

const Users: NextPage = () => {
	return (
		<>
			<IndexPage />
			<Container>
				<header>
					<h1>Usuários do Sistema</h1>
					<h2>
						Como está o seu dia? Se não estiver bem, tenha fé que vai melhorar
						;)
					</h2>
				</header>
				<main>
					<article className='actions-container'>
						<div className='action'>
							<div>
								<h3>
									<FaUser />
									<span>Nome: Kain Nhantumbo</span>
								</h3>
								<h3>
									<FaEnvelope />
									<span>E-mail: nhantumbok@gmail.com</span>
								</h3>
							</div>

							<button>
								<TiTrash />
								<span>Deletar</span>
							</button>
						</div>
						<div className='action'>
							<div>
								<h3>
									<FaUser />
									<span>Nome: Kain Nhantumbo</span>
								</h3>
								<h3>
									<FaEnvelope />
									<span>E-mail: nhantumbok@gmail.com</span>
								</h3>
							</div>

							<button>
								<TiTrash />
								<span>Deletar</span>
							</button>
						</div>
					</article>
				</main>
			</Container>
		</>
	);
};

export default Users;
