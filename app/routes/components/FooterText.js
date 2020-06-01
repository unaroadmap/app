import React from 'react';
import PropTypes from 'prop-types';

const FooterText = (props) => (
	<React.Fragment>
		2020 All Rights Reserved. 
		<a
			href="http://www.unaroadmap.com.br"
			target="_blank"
			rel="noopener noreferrer"
			className="sidebar__link"
		> www.unaroadmap.com.br
		</a>
	</React.Fragment>
)
FooterText.propTypes = {
    year: PropTypes.node,
	name: PropTypes.node,
	desc: PropTypes.node,
};
FooterText.defaultProps = {
    year: "2018",
    name: "Admin Theme",
    desc: "Bootstrap 4, React 16 (latest) & NPM"
};

export { FooterText };
