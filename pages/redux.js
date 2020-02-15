import React from "react";
import {connect,useDispatch} from "react-redux";
import Layout from "../components/layout";

const Redux = props => {
    const dispatch = useDispatch()
    const test = ()=>{
        props.foo === 'foo' ? dispatch({type:'FOO',payload:'BAR'}) : dispatch({type:'FOO',payload:'foo'})
        dispatch({type:'ADD'})
    }
    return (
        <Layout>  
            <div>
                <div>Prop from Redux {props.foo}</div>
                <div>Prop from getInitialProps {props.custom}</div>
                <div>{props.counter}</div>
                <br/>
                <button onClick={test}>test ( {props.counter} )</button>
            </div>
        </Layout>
    )
    }

Redux.getInitialProps = ({store, isServer, pathname, query}) => {
    store.dispatch({type: 'FOO', payload: 'foo'}); // The component can read from the store's state when rendered
    return {custom: 'custom'}; // You can pass some custom props to the component from here
}

export default connect(state => state)(Redux);
