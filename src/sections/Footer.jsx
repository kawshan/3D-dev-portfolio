import React from 'react'
import {socialImgs} from "../constants/index.js";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center items-center">
                    <a href="/">visit my blog</a>
                </div>

                <div className="socials">
                    {socialImgs.map((img)=>(
                        <a className="icon" target="_blank" href={img.url} key={img.url}>
                            <img src={img.imgPath} alt="logo" />
                        </a>
                    ))}
                </div>

                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end">© {new Date().getFullYear()} Kawshan | All rights reserved.</p>
                </div>


            </div>
        </footer>
    )
}
