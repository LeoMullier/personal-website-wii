import { Outlet, Link } from "react-router-dom";

function Layout() {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="Error">Error</Link>
					</li>
					<li>
						<Link to="WiiMenu">WiiMenu</Link>
					</li>
				</ul>
			</nav>

			<Outlet />
		</>
	);
}

export default Layout;
