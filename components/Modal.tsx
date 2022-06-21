import { ConfirmModalContainer as Container } from '../styles/components/confirm-modal';
import { FC } from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface Props {
	prompt_title: string;
	prompt_message: string;
	closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ConfirmDialog: FC<Props> = ({
	prompt_title,
	prompt_message,
	closeModal,
}): JSX.Element => {
	return (
		<Container onClick={(e) => closeModal(false)}>
			<section className='dialog-modal' onClick={(e) => e.stopPropagation()}>
				<div className='dialog-prompt'>
					<div className='prompt-info'>
						<span className='prompt-title'>{prompt_title}</span>
						<p className='prompt-message'>{prompt_message}</p>
					</div>
					<div className='prompt-actions'>
						<motion.button
							whileTap={{ scale: 0.8 }}
							whileHover={{ scale: 1.1 }}
							className='prompt-cancel'
							onClick={(e) => closeModal(false)}
						>
							<FaTimesCircle />
							<span>Fechar</span>
						</motion.button>
					</div>
				</div>
			</section>
		</Container>
	);
};
