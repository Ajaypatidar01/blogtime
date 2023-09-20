import Classes from '../styles/style.module.css';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <div className={Classes.footer_box}>
            <div className={Classes.footer}>
                <ul>
                    <li><Link to='#'>home</Link></li>
                    <li><Link to='#'>about us</Link></li>
                    <li><Link to='#'>contact us</Link></li>
                </ul>
                <ul>
                    <li><Link to='#'>Privacy policy</Link></li>
                    <li><Link to='#'>Company policy</Link></li>
                </ul>
                <ul>
                    <li><Link to='#'>Careers</Link></li>
                    <li><Link to='#'>Investor</Link></li>
                    <li><Link to='#'>employees</Link></li>
                    <li><Link to='#'>portfolio</Link></li>
                </ul>
            </div>
            <p>Copyright 2023 @ Blogtime.com</p>
        </div>
    );
}

export default Footer;