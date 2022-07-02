import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home =({currentUser}) => {
  console.log(currentUser);
  return currentUser? (
    <h1> welcome ! {currentUser} </h1>
  ) : (
    <h1>unkown </h1>
  )
}

Home.getInitialProps = async ctx =>{
  console.log("test");
  
  
  return {currentUser: "izhar"};
};

export default Home
