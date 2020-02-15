import Layout from '../../components/layout'
import fetch from 'isomorphic-unfetch'
import { useRouter } from 'next/router'

const show = props => {
    const router = useRouter()
    return(
        <Layout>
            <h1 style={{textAlign:'center'}}>TITLE : {props.show.name}</h1>
            <div style={{textAlign:'center'}}>
                {props.show.image ? <img src={props.show.image.medium}/> : null}
            </div>
            <div style={{padding:'50px'}}>
                    { props.show.summary.replace(/<[/]?[pb]>/g, '') }
            </div>
                
            
        </Layout>
    )
}

show.getInitialProps = async (context)=>{
    const {id} = context.query
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
    const show = await res.json()

    return {
        show
    }
}

export default show