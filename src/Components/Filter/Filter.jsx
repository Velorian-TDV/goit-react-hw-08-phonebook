import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

export default function Filter() {
    const dispatch = useDispatch();
    const searchContact = event => dispatch(setFilter(event.target.value.toLowerCase()))

    return (
        <section className="search">
            <input
                type="text"
                id='search'
                onChange={searchContact}
                placeholder="Find contact by name"
                autoComplete="off"
            />
        </section>
    )
}