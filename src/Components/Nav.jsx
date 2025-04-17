import { NavLink } from "react-router";
import Logo from "../logo/logo";
import 'animate.css';
const Nav = () => {
    return (
        <div className="py-5 flex justify-between items-center glass px-4">

            {/* Logo */}
            <div className="flex justify-center items-end gap-1">
                <Logo></Logo>
                <h1 className="text-accent-foreground text-3xl h-full font-bold">afiu</h1>
            </div>

            {/* Menu */}
            <div className="flex justify-center items-center gap-5 text-lg">
                <NavLink href="#" className="animated-hover">💼 Experience</NavLink>
                <NavLink href="#" className="animated-hover">🛠 Skills</NavLink>
                <NavLink href="#" className="animated-hover">🖥 Projects</NavLink>
                <NavLink href="#" className="animated-hover">📚 Education</NavLink>
                <NavLink href="#" className="animated-hover">🏆 Awards</NavLink>
            </div>


        </div>
    );
};

export default Nav;