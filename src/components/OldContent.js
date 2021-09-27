import React from 'react';
import '../index.css';
import Typed from 'react-typed';
import pdf from '../docs/rae-one-pager.pdf';

/**
 * Renders the Nominations components which provides a list of the nominated movies found, their title, their year released, their poster as well as a button to remove the movie from their nominations list.
 */
export class OldContent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll(event) {
        console.log(document.getElementsByClassName(''))
        if (document.documentElement.scrollTop > 20) {
            document.getElementsByClassName('navbar')[0].className = "navbar sticky";
            document.getElementsByClassName('menu-btn')[0].className = "menu-btn sticky";
        } else {
            document.getElementsByClassName('navbar')[0].className = "navbar";
            document.getElementsByClassName('menu-btn')[0].className = "menu-btn";
        }
    }

    render () {
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
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="/design-projects"> Design </a></li>
                    <li><a href="/code-projects"> Code </a></li>
                    {/* <li><a href="#contact">Contact</a></li> */}
                    <li><a href={pdf} target="_blank" class="resume" without rel='noopener noreferrer'>Resume</a></li>
                    </ul>
                    <div className="menu-btn">
                    <i class="fas fa-bars"></i>
                    </div >
                </div>
            </nav>

            <section class="home" id="home">
            <div class="max-width">
                <div class="home-content">
                    <div class="text-1">Hello! My name is</div>
                    <div class="text-2">Rae Abunahla</div>
                    <div class="text-3">And I am a
                    <Typed class="text-3"
                    strings={[
                        "n experience designer.", 
                        "&nbsp;software developer.", 
                        "&nbsp;photographer."]}
                        typeSpeed={60}
                        backSpeed={60}
                        loop/>
                    </div>
            </div>
            </div>
            </section>

            <section class="about" id="about">
        <div class="max-width">
            <h2 class="title">About me</h2>
            <div class="about-content">
            <div class="text">👋🏼 I'm Rae and I love  <Typed class="text"
                    strings={[
                        "human-centered design.", 
                        "natural language processing.", 
                        "interaction design.", 
                        "analog photography.", 
                        "data analytics.",
                        "data-driven decisions.",
                        "rapid prototyping."]}
                        typeSpeed={60}
                        backSpeed={60}
                        loop/> </div>
            <p> After graduating with a Computer Science degree from York University in Toronto, Canada, Rae has spent just over a year working at Accenture within the Technology Consulting space. While his academic background was focused on software engineering, e-commere, big data and research, Rae has delivered work to several clients through data analytics, software development and design thinking workshops.
            Rae is eager to return back to his roots with a more technical role in the software engineering space.
            </p>
            <a href={pdf} target="_blank" class="resume" without rel='noopener noreferrer'>Download Resume</a>
            </div>
        </div>
            </section>
            </div>
        )
    }
}

  