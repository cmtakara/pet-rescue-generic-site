import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav >
            <div class="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient">
                <div class="container-fluid"> 
                <Link class='navbar-brand' to='/'>Home</Link>
                <div>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 flex-cont">
                        <li class="nav-item flex-row"><Link class="nav-link active" to='login'>Login</Link></li>
                        <li class="nav-item flex-row"><Link class="nav-link active" to='dogs'>Dogs</Link></li>
                        <li class="nav-item flex-row"><Link class="nav-link active" to='cats'>Cats</Link></li>
                        <li class="nav-item flex-row dropdown text-dark">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Get Involved
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li class="nav-item text-dark"><Link class="nav-link active text-dark" to='volunteer'>Volunteer</Link></li>
                                <li class="nav-item"><Link class="nav-link active text-dark" to='foster'>Foster</Link></li>
                                <li class="nav-item"><Link class="nav-link active text-dark" to='donate'>Donate</Link></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li class="nav-item"><Link class="nav-link text-dark" to='cat-list'>Cat List</Link></li>
                                <li class="nav-item"><Link class="nav-link text-dark" to='dog-list'>Dog List</Link></li>
                                <li class="nav-item"><Link class="nav-link text-dark" to='people-list'>People List</Link></li>
                                {/* <li class="nav-item"><Link class="nav-link disabled" to='cat-list'>Cat List</Link></li> */}
                            </ul>
                        </li>
                        {/* <li class="nav-item"><Link class="nav-link active" to='volunteer'>Volunteer</Link></li>
                        <li class="nav-item"><Link class="nav-link active" to='foster'>Foster</Link></li>
                        <li class="nav-item"><Link class="nav-link active" to='donate'>Donate</Link></li> */}
                    </ul>
                </div>
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