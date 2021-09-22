import React from 'react';
import '../index.css';

export function Projects(props) {

    return (
    <div>
            <script src="https:kit.fontawesome.com/a076d05399.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.11/typed.min.js"></script>
            <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    
            <nav className="navbar">
            <div class="max-width">
                <div class="logo">
                    <a href="#"> 
                    <span>Portfo</span>lio. 
                    </a>
                    </div>
                    <ul class="menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects </a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a onclick="window.open('./docs/Resume-Rae-Abunahla.pdf','_blank')" class="resume">Resume</a></li>
                    </ul>
                    <div className="menu-btn">
                    <i class="fas fa-bars"></i>
                    </div >
                </div>
            </nav>
    </div>
    )
}

  