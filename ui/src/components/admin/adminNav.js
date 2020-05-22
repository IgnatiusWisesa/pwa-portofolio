import React from 'react'
import { adminLogout } from '../../redux'
import { useDispatch } from 'react-redux'


function AdminNav() {
    //
    // dispatch action
    const dispatch = useDispatch()
    return (
        <div>
            <nav>
                <div className="nav-wrapper teal lighten-3">
                <div className="center brand-logo">My Page</div>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="#profile">
                            <i className="fa fa-book fa-fw" aria-hidden="true" /> Profile
                        </a>
                    </li>
                    <li>
                        <a href="#projects">
                            <i className="fa fa-book fa-fw" aria-hidden="true" /> Projects
                        </a>
                    </li>
                    <li>
                        <a href="#settings">
                            <i className="fa fa-cog fa-fw" aria-hidden="true"/> Settings
                        </a>
                    </li>
                </ul>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li
                        onClick={(e) => {
                            console.log('clicked logout')
                            e.preventDefault()
                            dispatch(adminLogout())
                        }
                    }
                    >
                        <a href="#logout">
                            <i className="fas fa-sign-out-alt fa-lg" />
                            Logout
                        </a>
                    </li>
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default AdminNav
