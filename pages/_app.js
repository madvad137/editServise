
import Layout from '../components/Layout/Layout'
import { AppWrapper, useAppContext } from '../context/dataContext'
import '../styles/globals.scss'


function MyApp({Component, pageProps}) {

  return(
      <AppWrapper>
        <Layout>
           <Component {...pageProps} /> 
        </Layout>
      </AppWrapper>

  ) 
}

export default MyApp
