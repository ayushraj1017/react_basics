import React ,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

const Person = () => {

    const [name, setName] = useState('data')
   

  

    return (
        <div>
            <h1>{name}</h1>
            <Link to='/contextapi'>
                Back to contextAPI List
            </Link>
        </div>
    )
}

export default Person
