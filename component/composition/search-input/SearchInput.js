import {forwardRef} from 'react';
import styles from '../../../styles/Home.module.css';

const SearchInput = forwardRef(({className,...props},ref)=>{
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(props.onChange){

        }
    }
    return <div className={`${styles['search-box']} ${className}`}>
        <form name="search-input" onSubmit={handleSubmit}>
            <input ref={ref} {...props} maxLength="30"/>
            <button type="button">Search</button>
        </form>
    </div>
})

SearchInput.displayName = 'SearchInput';

export default SearchInput;