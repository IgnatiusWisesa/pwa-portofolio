import React from 'react'

function AdminNav() {
    return (
        <div>
            <nav>
                <div className="nav-wrapper teal lighten-3">
                <div className="center brand-logo">My Page</div>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="https://www.google.com/">
                            <i className="fa fa-book fa-fw" aria-hidden="true" /> Profile
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com/">
                            <i className="fa fa-book fa-fw" aria-hidden="true" /> Projects
                        </a>
                    </li>
                    <li>
                        <a href="https://www.google.com/">
                            <i className="fa fa-cog fa-fw" aria-hidden="true"/> Settings
                        </a>
                    </li>
                </ul>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><a href="https://www.google.com/"><i className="fas fa-sign-out-alt fa-lg" /> Logout</a></li>
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default AdminNav
