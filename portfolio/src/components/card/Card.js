import React from 'react'
import style from './Card.module.css'
import blog from '../../img/blogPost.png'
import CardFront from './CardFront'
import CardBack from './CardBack'

const Card = () => {

    return(
        <div className={style.card}>
            <img src= {blog} alt="Avatar" />
            <div className={style.container}>
                <h4><b>Replicated Blog</b></h4> 
                <ul>
                    <li></li>
                    <li>React</li>
                    <li>React Bootstrap</li>
                </ul> 
                <button onClick={() => window.open("https://blog-replicate-react-app.netlify.app/")} target="_blank" rel="noopener noreferrer">Website</button><button onClick={() => window.open("https://github.com/WMorris-WebDev20/fsw-120/tree/master/week2/project-Blog")} target="_blank" rel="noopener noreferrer">GitHub</button>
            </div>
        </div>
    )
}

export default Card