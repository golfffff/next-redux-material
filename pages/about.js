import Layout from '../components/layout'
import {useState} from 'react'
import { Button } from '@material-ui/core'

const About = () => {
  const [state,setState] = useState({counter:0})
  return(
    <Layout>
      About page
      <div>
        <Button color="primary" variant="contained" onClick={()=>setState({...state,counter:state.counter+1})}>no redux ({state.counter})</Button>
      </div>
    </Layout>
  )
}

export default About
