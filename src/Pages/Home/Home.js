import React from 'react';
import './Home.css';
import profile from '../../Images/profile.jpeg';
import courses from '../../Images/Courses.png';
import projects from '../../Images/Projects.png';
import articles from '../../Images/Articles.png';
import { Link } from 'react-router-dom';

function Home(){
    return(
        <div className='home'>
            <div className='portfolio'>
                <img className='portfolio-image' src={profile}/>
                <h1>RITVIK G</h1>
                <h2>Optimist | Futurist</h2>
                <Link className='portfolio-link' to='/portfolio'><h3>Portfolio ></h3></Link>
            </div>

            <div className='courses'>
                <div className='course-box'><h1>Courses </h1>
                    <h2>Programming, Time Management & many more...</h2>
                    <Link className='courses-link' to='/courses'><h3>Courses ></h3></Link></div>
                    
                <img className='courses-image' src={courses}/>
                
            </div>

            <div className='projects'>
            <img className='projects-image' src={projects}/>
                <h1>Projects</h1>
                <h2>Few of my personal & client projects</h2>
                <Link className='projects-link' to='/projects'><h3>Projects ></h3></Link>
            </div>

            <div className='articles'>
            <div className='articles-box'><h1>Articles </h1>
                    <h2>Some self written & others found. But all are worth a visit!</h2>
                    <Link className='articles-link' to='/articles'><h3>Articles ></h3></Link></div>
                    
                <img className='articles-image' src={articles}/>
            </div>
        </div>
    );
}

export default Home;