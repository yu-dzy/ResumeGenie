import {Link} from "react-router";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <p className="text-2xl font-bold text-gradient">ResumeGenie</p>
            </Link>
            <div className="flex gap-3">
                <Link to="/auth" className="primary-button w-fit">
                    Sign In
                </Link>
                <Link to="/upload" className="primary-button w-fit">
                    Upload Resume
                </Link>
            </div>
        </nav>
    )
}
export default Navbar