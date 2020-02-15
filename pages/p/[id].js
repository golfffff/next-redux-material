import {useRouter} from 'next/router'
import Layout from '../../components/layout'

const page = props => { 
    const router = useRouter()
    return(
        <Layout>
            <h1>{router.query.id}</h1>
        </Layout>
    )
}

export default page