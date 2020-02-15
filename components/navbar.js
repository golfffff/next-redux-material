import React from 'react'
import Link from 'next/link';

const Navbar = () => {
    return(
        <div id="mainmenu">
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/about">
            <a>About</a>
        </Link>
        <Link href="/contact">
            <a>Contact</a>
        </Link>
        <Link href="/tv">
            <a>TV</a>
        </Link>
        <Link href="/redux">
            <a>Redux</a>
        </Link>
        <style jsx>
            {
                `
                *{
                    margin:0;
                    padding:0;
                }
                #mainmenu {
                    display: flex;
                    background-color: #E87C46;
                    height:60px;
                    text-align:center;
                    align-items:stretch;
                }
                #mainmenu a{
                    color:white;
                    text-decoration:none;
                    margin: 0 2px;
                    width: 100px;
                    padding-top: 20px;
                }
                #mainmenu a:hover{
                    background-color:#FFAA58;
                    font-size:1.2em;
                }
                `
            }
        </style>
        </div>
    )
}

export default Navbar