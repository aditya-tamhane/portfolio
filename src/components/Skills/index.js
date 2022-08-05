import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase';

const Skills = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    useEffect(() => {
        getPortfolio();
    }, []);

    const getPortfolio = async () => {
        const querySnapshot = await getDocs(collection(db, 'portfolio'));
        setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
    };

    console.log(portfolio);

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img
                                    src={port.image}
                                    className="portfolio-image"
                                    alt="portfolio" />
                                <div className="content">
                                    <p className="title">{port.name}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }


    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Skills & Experiences".split("")}
                        idx={9}
                    />

                    <p className="para">
                        I'm not a designer but I have a good sense of aesthetics. I put special
                        effort into optimizing my code and providing the best user
                        experience. I would love to give you any kind of support also after
                        the project's completion. I guarantee a commitment during work on
                        your project.
                    </p>
                    <p >
                        Some of SKILLS : HTML, CSS3, JavaScript, Angular, React, Bootstrap, ExpressJS, Git. 
                    </p>
                    <p className="skills">
                        INTERNSHIP : Twowaits Technologies Pvt. Ltd. (Duration 1 month) as Web Developer Intern
                        <br></br>▪ Utilized my web development skills
                        <br></br>▪ Assisted and contributed to the team
                        <br></br>▪ Deployed the websites for Realtime usage
                    </p>

                </h1>
                <div>{renderPortfolio(portfolio)}</div>
            </div>

            <Loader type="pacman" />
        </>

    );
}

export default Skills;