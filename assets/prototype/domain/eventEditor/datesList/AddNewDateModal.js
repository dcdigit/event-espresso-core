import DateForm from './DateForm';
import FormModal from '../../shared/FormModal';
// import useCreateDateMutation from '../containers/mutations/useCreateDateMutation';
import useEntityMutator from '../containers/mutations/useEntityMutator';

const AddNewDateModal = ({ tickets, handleClose, isOpen }) => {
	// const createDate = useCreateDateMutation({ eventId });
	const { createEntity } = useEntityMutator('Datetime');
	const formComponent = (props) => <DateForm {...props} tickets={tickets} title='New Date Details' />;

	return (
		<FormModal
			FormComponent={formComponent}
			initialValues={{}}
			onSubmit={createEntity}
			onClose={handleClose}
			isOpen={isOpen}
			tickets={tickets}
		/>
	);
};

export default AddNewDateModal;
