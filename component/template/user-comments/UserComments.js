import fetch from "node-fetch";
import { useEffect, useState } from "react";
import styles from '../../../styles/Home.module.css';

const UserComments = ()=>{
    const [comments, setComments] = useState([]);
    useEffect(async ()=>{
        const res = await fetch('http://jsonplaceholder.typicode.com/posts?userId=1');
        const json = await res.json();
        setComments(json);
    },[]);
    if(comments.length=== 0){
        return <div>Fetching...</div>
    }
    return <div className={styles.comments}>
        <div className={styles['comments-heading']}>Comments given by the selected user:</div>
        {
            comments.map(obj=>(
            <div className={styles['comments-content']} key={`comment-detail-${obj.id}`}>
                <p className={styles["comments-title"]}>{obj.title}</p>
                <p className={styles["comments-body"]}>{obj.body}</p>
            </div>))
        }
    </div>
}

UserComments.displayName="UserComments";

export default UserComments;