import { useContext, useState } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	NavItem,
	NavLink,
	NavbarText,
	Nav,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Header = () => {
	const context = useContext(UserContext);
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);
	return (
		<Navbar color="info" light expand="md">
			<NavbarBrand>
				<Link to="/" className="text-white">
					Git Fire App
				</Link>
			</NavbarBrand>
			<NavbarText className="text-white">
				{context.user?.email ? context.user.email : ''}
			</NavbarText>
			<NavbarToggler onClick={toggle} />
			<Collapse navbar isOpen={isOpen}>
				<Nav className="ml-auto" navbar>
					{context.user ? (
						<NavItem>
							<NavLink
								onClick={() => {
									context.setUser(null);
								}}
								className="text-white"
							>
								Logout
							</NavLink>
						</NavItem>
					) : (
						<>
							<NavItem>
								<NavLink tag={Link} to="/signup" className="text-white">
									Signup
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink tag={Link} to="/signin" className="text-white">
									SingIn
								</NavLink>
							</NavItem>
						</>
					)}
				</Nav>
			</Collapse>
		</Navbar>
	);
};

export default Header;
