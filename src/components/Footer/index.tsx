import React from 'react';

const Footer = () => {
    const copyrightName = ' Marcus Eubanks';
    const newDate = new Date()
	const year = newDate.getFullYear();

    return (
        <footer>
            <small>
                &copy;{year} 
                {copyrightName}
            </small>
        </footer>
    );
}

export default Footer;