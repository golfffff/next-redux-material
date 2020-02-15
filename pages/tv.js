import Layout from '../components/layout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch';

const tv = props => {

    return(
        <Layout>
            <h1>Batman TV SHOW </h1>
            <ul>
                {
                    props.shows.map( show => (
                        <li key={show.id}>
                            <Link href="/show/[id]" as={`/show/${show.id}`}>
                                <a>{show.name}</a>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        <style jsx>
            {
                `
                ul li{
                    list-style:none;
                    padding:5px
                }
                ul li:hover{
                    font-size:1.2em;
                }
                `
            }
        </style>
        </Layout>
    )
}

tv.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();
  
    console.log(`Show data fetched. Count: ${data.length}`);
  
    return {
      shows: data.map(entry => entry.show)
    };
  };

export default tv