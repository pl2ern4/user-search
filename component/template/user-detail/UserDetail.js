import { Suspense, useState, lazy } from "react";
import styles from '../../../styles/Home.module.css';
const UserComments = lazy(() => import('../user-comments'));

const UserDetail = ({ userData }) => {
    const [showComment, setShowComment] = useState(false);
    const handleClick = () => setShowComment(!showComment);
    return (
        <section className={styles['user-detail']}>
            <div className={styles.details}>
                <div className={styles['detail-heading']}>Contact Info</div>
                <div className={styles['detail-content']}>
                    <span>Username:</span> <span>{userData.username}</span>
                </div>
                <div className={styles['detail-content']}>
                    <span>Email:</span>
                    <span>
                        <a href={`mailto:${userData.email}`} target="_blank">{userData.website}</a>
                    </span>
                </div>
                <div className={styles['detail-content']}>
                    <span>Phone:</span>
                    <span>
                        <a href={`tel:${userData.phone}`} target="_blank">{userData.phone}</a>
                    </span>
                </div>
                <div className={styles['detail-content']}>
                    <span>Website:</span>
                    <span>
                        <a href={userData.website} target="_blank">{userData.website}</a>
                    </span>
                </div>
            </div>
            <div className={styles.details}>
                <div className={styles['detail-heading']}>Address</div>
                <div className={styles['detail-content']}>
                    <b>
                        <span>{userData.address.suite}</span>
                        <span>{userData.address.street}</span>,<br/>
                        <span>{userData.address.city}</span>
                        <span>{userData.address.zipcode}</span>
                    </b>
                </div>
            </div>
            <div className={styles.details}>
                <div className={styles['detail-heading']}>Company Details</div>
                <div className={styles['detail-content']}>
                    <p>{userData.company.name}</p>
                    <p>{userData.company.bs}</p>
                    <p><i>&quot;{userData.company.catchPhrase}&quot;</i></p>
                </div>
            </div>
            <div className={styles.details}>
                <span className={styles['content-type']} onClick={handleClick}>
                    {showComment && `less` ||  `More...`}
                </span>
            </div>
            {
                showComment && 
                <Suspense fallback={<div>Fetching...</div>}>
                    <UserComments id={userData.id}/>
                </Suspense>
            }
        </section>
    )
}

UserDetail.displayName = 'UserDetail';

export default UserDetail;