import styles from '../styles/Home.module.css';
import FooterComponent from '../component/template/footer-component';
import UserSearch from '../component/template/user-search';
import Header from '../component/template/header';

const Home = ({list}) => {
  return (
    <div className={styles.container}>
        <Header title="Search User!!"/>
        <div className={styles.main}>
          <UserSearch list={list}/>
        </div>
        <FooterComponent/>
    </div>
  )
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch('http://jsonplaceholder.typicode.com/users')
  const json = await res.json()
  return { "list": Object.values(json) }
}

Home.displayName = 'Home';

export default Home;
