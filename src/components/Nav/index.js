import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <div>
                <Link to='/'>Home</Link>
                <div>
                    <ul>
                        <li><Link to='login'>Login</Link></li>
                        <li><Link to='dogs'>Dogs</Link></li>
                        <li><Link to='cats'>Cats</Link></li>
                        <li><Link to='volunteer'>Volunteer</Link></li>
                        <li><Link to='foster'>Foster</Link></li>
                        <li><Link to='donate'>Donate</Link></li>
                    </ul>
                </div>
            </div>
                 
            {/* start of the nav
            <div>

                {/* <div>
                    <ul>
                        <li><Link to='login'>Login</Link></li>
                        <li><Link to='dogs'>Dogs</Link></li>
                        <li><Link to='cats'>Cats</Link></li>
                        <li><Link to='volunteer'>Volunteer</Link></li>
                        <li><Link to='foster'>Foster</Link></li>
                        <li><Link to='donate'>Donate</Link></li>
                    </ul>
                </div> */}
            {/* </div>  */}
        </nav>
    )
}

export default Nav