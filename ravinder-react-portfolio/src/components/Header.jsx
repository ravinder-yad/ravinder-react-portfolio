import { Link } from 'react-router-dom';
import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] pt-4 md:pt-0">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">

                {/* Logo */}
                <Link to="/">
                    <h1 className="text-3xl font-bold">
                        ravinder<span className="text-accent">.kumar</span>
                    </h1>
                </Link>

                {/* Socials */}
                <div className="flex items-center gap-x-5 text-lg">
                    <a href="https://www.linkedin.com/in/ravinder-yadav-809090321/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300"><FaLinkedin /></a>
                    <a href="https://github.com/ravinder-yad" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300"><FaGithub /></a>
                    <a href="#" className="hover:text-accent transition-all duration-300"><FaInstagram /></a>
                    <a href="#" className="hover:text-accent transition-all duration-300"><FaFacebook /></a>
                </div>

            </div>
        </header>
    );
};

export default Header;
