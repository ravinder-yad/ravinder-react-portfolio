import { NavLink } from 'react-router-dom';
import {
    HiHome,
    HiUser,
    HiViewColumns,
    HiRectangleGroup,
    HiEnvelope,
    HiDocumentText,
    HiComputerDesktop,
    HiAcademicCap,
} from 'react-icons/hi2';

export const navData = [
    { name: 'home', path: '/', icon: HiHome },
    { name: 'about', path: '/about', icon: HiUser },
    { name: 'services', path: '/services', icon: HiComputerDesktop },
    { name: 'skills', path: '/skills', icon: HiRectangleGroup },
    { name: 'resume', path: '/resume', icon: HiDocumentText },
    { name: 'projects', path: '/projects', icon: HiViewColumns },
    { name: 'certificates', path: '/certificates', icon: HiAcademicCap },
    { name: 'contact', path: '/contact', icon: HiEnvelope },
];

const Navbar = () => {
    return (
        <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen pointer-events-none md:pointer-events-auto">
            {/* Container */}
            <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-20 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full pointer-events-auto">
                {navData.map((link, index) => (
                    <NavLink
                        key={index}
                        to={link.path}
                        className={({ isActive }) =>
                            `${isActive ? 'text-accent' : 'text-white'} relative flex items-center group hover:text-accent transition-all duration-300`
                        }
                    >
                        {/* Tooltip */}
                        <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                            <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                                <div className="text-[12px] leading-none font-semibold capitalize text-black">
                                    {link.name}
                                </div>
                                {/* Visual Triangle */}
                                <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                            </div>
                        </div>

                        {/* Icon */}
                        <div>
                            <link.icon aria-hidden="true" />
                        </div>
                    </NavLink>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
