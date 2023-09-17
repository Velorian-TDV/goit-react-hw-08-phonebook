import Form from '../../Form/Form'
import Filter from '../../Filter/Filter'
import ContactList from '../../ContactList/ContactList'
import { Wrapper } from './Contacts.styled'

export default function Contacts() {
    return (
        <Wrapper>
            <Form />
            <Filter />
            <ContactList />
        </Wrapper>
    )
}