
import Layout from '../components/layout'
import {useRouter} from 'next/router'

const Post = ()=> {
    const router = useRouter()
    return(
        <Layout>
            <h1>TITLE : {router.query.title}</h1>
            <p>
                BODY: this is content
            </p>
        </Layout>    
    )
}

export default Post
    
