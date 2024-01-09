import "./Navigation.styles.scss";
const Navigation = () => {
    return (
        <div className="nav-container">
            <div className="nav-logo">Navigation</div>
            <ul className="nav-links">
                <li className="nav-link-item">Home</li>
                <li className="nav-link-item">SignUp</li>
                <li className="nav-link-item">Explore</li>
                <li className="nav-link-item">Contact</li>
            </ul>
        </div>
    );
};

export default Navigation;
