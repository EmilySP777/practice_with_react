import { Outlet, Link } from 'react-router-dom';
const Layout = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link active" to="/">Home </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="./crud_unicorns">Crud Unicorns</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/currency">Currency</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/weather">Weather</Link>
                </li>
            </ul>
        </nav>
        <hr />
        <Outlet />
    </div>
  );
}

export default Layout