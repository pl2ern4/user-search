import UserDetail from '../../component/template/user-detail';
import Header from '../../component/template/header';
import FooterComponent from '../../component/template/footer-component';
import styles from '../../styles/Home.module.css';

const UserDetailComponent = ({userData})=>{
    return (
        <div className={styles.container}>
            <Header title="User Detail"/>
            <UserDetail userData={userData}/>
            <FooterComponent/>
        </div>
    )
}

UserDetailComponent.displayName = 'UserDetailComponent';

UserDetailComponent.getInitialProps = async (ctx) => {
    const { query:{id} = {} }  = ctx;
    const res = await fetch(`http://jsonplaceholder.typicode.com/users/${id}`)
    const json = await res.json()
    return { "userData": json }
}

export default UserDetailComponent;

