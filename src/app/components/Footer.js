import React from 'react';
import footerStyles from '@/app/styles/footer.module.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
            <div className={footerStyles.content}>
                <div className={footerStyles.top}>
                    <div className={footerStyles['logo-details']}>
                        <span className={footerStyles.logo_name}>Movies Hub</span>
                    </div>
                    <div className={footerStyles['media-icons']}>
                        <Link href="#"><FaFacebookF /></Link>
                        <Link href="#"><FaTwitter /></Link>
                        <Link href="https://www.instagram.com/thapatechnical/" target="_blank"><FaInstagram /></Link>
                        <Link href="#"><FaLinkedinIn /></Link>
                        <Link href="#"><FaYoutube /></Link>
                    </div>
                </div>
                <div className={footerStyles['link-boxes']}>
                    <ul className={footerStyles.box}>
                        <li className={footerStyles.link_name}>Company</li>
                        <li><Link href="#">Home</Link></li>
                        <li><Link href="#">Contact us</Link></li>
                        <li><Link href="#">About us</Link></li>
                        <li><Link href="#">Get started</Link></li>
                    </ul>
                    <ul className={footerStyles.box}>
                        <li className={footerStyles.link_name}>Categories</li>
                        <li><Link href="#">Thriller</Link></li>
                        <li><Link href="#">Horror</Link></li>
                        <li><Link href="#">Romantic</Link></li>
                        <li><Link href="#">Kids</Link></li>
                    </ul>
                    <ul className={footerStyles.box}>
                        <li className={footerStyles.link_name}>Account</li>
                        <li><Link href="#">Profile</Link></li>
                        <li><Link href="#">My account</Link></li>
                        <li><Link href="#">Preferences</Link></li>
                        <li><Link href="#">Purchase</Link></li>
                    </ul>
                    <ul className={`${footerStyles.box} ${footerStyles['input-box']}`}>
                        <li className={footerStyles.link_name}>Subscribe</li>
                        <li><input type="text" placeholder="Enter your email" /></li>
                        <li><input type="button" value="Subscribe" /></li>
                    </ul>
                </div>
            </div>
            <div className={footerStyles['bottom-details']}>
                <div className={footerStyles.bottom_text}>
                    <span className={footerStyles.copyright_text}>Copyright © 2023
                        <Link href="/"> Thapa Technical.</Link> All rights reserved
                    </span>
                    <span className={footerStyles.policy_terms}>
                        <Link href="/">Privacy policy</Link>
                        <Link href="/">Terms & condition</Link>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
