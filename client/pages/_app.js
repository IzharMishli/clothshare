import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../components/header';

const  MyApp = ({ Component, pageProps, currentUser }) => {
  return(
    <div>
      <Header currentUser={currentUser} />
      <Component {...pageProps} />
    </div>
  )
  
}

MyApp.getInitialProps = async ctx => {
 
  return {currentUser: "izhar"}
}

export default MyApp
