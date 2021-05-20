import React from 'react'
import {Link} from 'react-router-dom'
import Person from './Person'

const Nav = () => {
    return (
        <div>
        <Link to='/'>Home</Link>
        <hr />
        <Link to="/counter">Counter</Link>
        <hr />
        <Link to="/contextapi">ContextApiList</Link>
        <hr />
        <Link to="/person">
           Person
        </Link>
        <hr />
            
        </div>
    )
}

export default Nav
