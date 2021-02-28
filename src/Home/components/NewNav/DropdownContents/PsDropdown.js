import React from "react";
import { Heading, HeadingLink, LinkList, DropdownSection, Icon } from "./Components";
import { Link } from "react-router-dom";

const PsDropdown = () => {
	return (
		<div style={{ width: "14.5rem" }}>
			<DropdownSection data-first-dropdown-section>
				<ul>
					<HeadingLink>
						<Link to="/ProsStud/visa">
							<Icon /> Visa Process
						</Link>
					</HeadingLink>
					<HeadingLink>
						<Link to="/ProsStud/places">
							<Icon /> Places To Visit
						</Link>
					</HeadingLink>
					<HeadingLink>
						<a href="https://academic.iiti.ac.in/" target="_blank">
							<Icon /> Academic
						</a>
					</HeadingLink>
					<HeadingLink>
						<Link to="/ProsStud/programs">
							<Icon /> Programs
						</Link>
					</HeadingLink>
					<HeadingLink noMarginBottom>
						<Link to="/ProsStud/admission">
							<Icon /> Admission
						</Link>
					</HeadingLink>
				</ul>
			</DropdownSection>
		</div>
	);
};

export default PsDropdown;
