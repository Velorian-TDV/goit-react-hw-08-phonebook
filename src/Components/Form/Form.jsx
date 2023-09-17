import { useSelector, useDispatch } from 'react-redux';
import { contactList } from '../../redux/contacts/contactsSlice';
import { addContact } from '../../redux/contacts/operations';
import FormSection from '../FormSection/FormSection'

export default function Form() {
    const contactsFromStore = useSelector(contactList)
    const dispatch = useDispatch();

    const handleSubmit = async event => {
        event.preventDefault();

        const { name, phone } = event.target;
        const exist = contactsFromStore.find(contact => contact.name === name.value);

        if (exist) alert('contact exist')
        else {
            const newContact = {
                "name": name.value,
                "number": phone.value
            };
            dispatch(addContact(newContact))
        }
    }

    return (
        <form className='form' onSubmit={handleSubmit} >
            <FormSection
                type="text"
                name="name"
                placeholder='Name'
                pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            />
            <FormSection
                type="text"
                name="phone"
                placeholder='Number'
                pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            />
            <button type="submit">Add Contact</button>
        </form>
    )
}