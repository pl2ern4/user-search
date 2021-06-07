import { useCallback, useEffect, useState } from "react";
import SearchInput from "../../composition/search-input/SearchInput";
import { throttle } from "../../../utility/utility";
import styles from '../../../styles/Home.module.css';

const UserSearch = ({list}) => {
    const [input, setInput] = useState('');
    const [userList, setUserList] = useState(list);
    const [sortType, setSortType] = useState(true);
    const [sortBy, setSortBy] = useState('name');
    
    const handleChange = e => {
        setInput(e.target.value);
        e.preventDefault();
    }
    const handleSwitchChange=e=>{
        setSortType(e.target.checked);
        e.preventDefault();
    }
    const handleSortChange = e=>{
        setSortBy(e.currentTarget.value)
        
        e.preventDefault();
    }

    useEffect(()=>{
        const filteredList = list.filter(obj => !input || obj.name.indexOf(input) !== -1 ||
            obj.username.indexOf(input) !== -1 || 
            obj.email.indexOf(input) !== -1);

        const sortedList = filteredList.sort((a,b)=>{
            if(!a[sortBy] || !b[sortBy]){
                return 0;
            }
            if(sortType){
                return a[sortBy].toLowerCase()> b[sortBy].toLowerCase()?1:-1
            }
            if(!sortType){
                return a[sortBy].toLowerCase()> b[sortBy].toLowerCase()?-1:1;
            }
            return 0;
        });
        
        setUserList([...sortedList]);
    },[sortType, input, sortBy])

    const handleChangeCallback = useCallback(handleChange, [input]);

    const handleEmailClick = (param)  =>{
        window.location.href = `mailto:${param}`;
    }
    return <div>
        <div className={styles['form-wrapper']}>
            <SearchInput className={styles['text-center']} value={input} onChange={e => throttle(handleChangeCallback(e), 300)} />
            <div className={styles['text-center']}>
                <span>
                    Sort By: 
                    <select name="user-list-sort" defaultValue="name" onChange={handleSortChange}>
                        <option value="name">Name</option>
                        <option value="username">User Name</option>
                        <option value="email">Email</option>
                    </select>
                </span>
                <span>
                    <label className={`${styles['switch']} ${sortType ? styles['green'] :''}`}>
                        <input type="checkbox" onChange={handleSwitchChange} defaultChecked={sortType}/>
                        <span className={styles['switch-round']}></span>
                    </label>
                    <span className={styles['switch-text']}>
                        { sortType && 'Increasing' || 'Decreasing'}
                    </span>
                </span>
            </div>
        </div>
        <section className={styles['user-list']}>
            <div className={`${styles['user-list-item']} ${styles['heading']}`}>
                <span><b>Name</b></span>
                <span><b>UserName</b></span>
                <span><b>Email</b></span>
            </div>
            {
                userList.map(({email, id, name, username}, key) => (
                    <a key={`user-${key}`} href={`/user-detail?id=${id}`} target="_blank" rel="noopener noreferrer">
                            <div className={styles['user-list-item']}>
                                <span><span className={styles['sub-heading']}><b>Name :</b></span><span>{name}</span></span>
                                <span><span className={styles['sub-heading']}><b>User name: </b></span><span>{username}</span></span>
                                <span><span className={styles['sub-heading']}><b>Email: </b></span><span onClick={()=>handleEmailClick(email)}>{email}</span></span>
                            </div>
                        </a>
                    
                ))
            }
        </section>
    </div>
}

UserSearch.displayName = 'UserSearch';

export default UserSearch;