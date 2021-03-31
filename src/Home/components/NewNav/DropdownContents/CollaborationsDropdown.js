import React from "react";
import { Heading, HeadingLink, LinkList, DropdownSection, Icon } from "./Components";
import { Link } from "react-router-dom";

const CollaborationsDropdown = () => {
	return (
		<div style={{ width: "21rem" }}>
			<DropdownSection data-first-dropdown-section>
				<ul>
					<HeadingLink>
						<Icon /> MOU
					</HeadingLink>
					<div className="d-flex mobDropdown">
						<DropdownSection>
							<li>
								<Link to="/mou/asia">Asian Universities</Link>
							</li>
							<li>
								<Link to="/mou/australia">Australian Universities</Link>
							</li>
							<li>
								<Link to="/mou/america">American Universities</Link>
							</li>
							<li>
								<Link to="/mou/europe">European Universities</Link>
							</li>
						</DropdownSection>
					</div>
					<HeadingLink>
						<Icon /> Mobility Exchange
					</HeadingLink>
					<div className="d-flex mobDropdown">
						<DropdownSection>
							<li>
								<Link to="/mobility/student">Student</Link>
							</li>
							<li>
								<Link to="/mobility/faculty">Faculty</Link>
							</li>
						</DropdownSection>
					</div>
					<HeadingLink>
						<Icon /> International Students
					</HeadingLink>
					<div className="d-flex mobDropdown">
						<DropdownSection>
							<li>
								<Link to="/int/students">Students List</Link>
							</li>
							<li>
								<Link to="/int/testimonials">Testimonials</Link>
							</li>
						</DropdownSection>
					</div>
					<HeadingLink noMarginBottom>
						<Link to="/">
							<Icon /> Grants
						</Link>
					</HeadingLink>
				</ul>
			</DropdownSection>
		</div>
	);
};

export default CollaborationsDropdown;
