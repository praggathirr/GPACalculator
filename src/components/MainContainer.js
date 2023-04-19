import React from 'react';
import SemesterContainer from './SemesterContainer';

const MainContainer = () => {
	return (
		<React.Fragment>
			<div className="main-container">
				<SemesterContainer />
			</div>
			<div id="input-container">
				<input type="button" value="Add Semester" id="add-semester" />
			</div>
		</React.Fragment>
	);
};

export default MainContainer;
