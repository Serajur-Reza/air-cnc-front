import React from 'react';


const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        
        <div class="container">

        <a class="navbar-brand" href="#">AirCNC</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="#"><button class="btn btn-light">Host your home</button></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"><button class="btn btn-light">Host your experience</button></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"><button class="btn btn-light">Maps</button></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"><button class="btn btn-light">Log in</button></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#"><button class="btn btn-success">Sign up</button></a>
            </li>
            </ul>
        </div>
        </div>

        </nav>
    );
};

export default Header;