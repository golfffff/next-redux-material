import Layout from '../components/layout'
import Link from 'next/link';


const Postlink = props => (
  <li>
    <Link href={`/post/?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const PostPage = props => (
  <li>
  <Link href="/p/[id]" as={`/p/${props.id}`}>
    <a>{props.id}</a>
  </Link>
  </li>
)

const Contact = () => {
  return(
    <Layout>
      All Post
      <ul>
        <Postlink title="title 1" />
        <Postlink title="title 2" />
        <Postlink title="title 3" />
      </ul>
      All dinamic link
      <ul>
        <PostPage id="1" />
        <PostPage id="2" />
        <PostPage id="3" />
      </ul>
    </Layout>
  )
}

export default Contact
