import React, { useState } from 'react';
import SemesterContainer from './SemesterContainer';

const MainContainer = () => {
	const [ semObj, setSemObj ] = useState([]);
	const [ terms, setTerms ] = useState([ <SemesterContainer semObj={semObj} setSemObj={setSemObj} /> ]);
	const [ totalGPA, setTotalGPA ] = useState(0);

	const calculateOverallGPA = () => {
		if (semObj.length > 0) {
			let gpa = 0;
			for (let i = 0; i < semObj.length; i++) {
				gpa += Number(semObj[i].gpa);
			}
			setTotalGPA((gpa / semObj.length).toFixed(1));
		}
	};

	return (
		<React.Fragment>
			<div className="main-container">{terms.map((term) => term)}</div>
			<div id="input-container">
				<input
					type="button"
					value="Add Semester"
					id="add-semester"
					onClick={() =>
						setTerms((oldArray) => [
							...oldArray,
							<SemesterContainer semObj={semObj} setSemObj={setSemObj} />
						])}
				/>
				<input type="button" value="Calculate Overall" id="add-semester" onClick={calculateOverallGPA} />
			</div>
			<div className="sem-gpa-div">
				<input type="button" value={totalGPA} id="sem-gpa" />
			</div>
		</React.Fragment>
	);
};

export default MainContainer;
