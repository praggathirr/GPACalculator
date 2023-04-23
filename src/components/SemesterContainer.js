import React, { useState, useContext } from 'react';
import ClassColumn from './ClassColumn';

const SemesterContainer = ({ semObj, setSemObj }) => {
	const [ termObj, setTermObj ] = useState([]);
	const [ courses, setCourses ] = useState([ <ClassColumn termObj={termObj} setTermObj={setTermObj} /> ]);
	const [ semGPA, setSemGPA ] = useState(0);

	const calculateSemesterGPA = () => {
		let gradePoints = 0;
		let creditHours = 0;
		let qualityPoints = 0;
		if (termObj.length > 0) {
			for (let i = 0; i < termObj.length; i++) {
				gradePoints += termObj[i].gradePoint;
				creditHours += termObj[i].credits;
				qualityPoints += termObj[i].gradePoint * termObj[i].credits;
			}

			setSemGPA((qualityPoints / creditHours).toFixed(1));
			setSemObj((oldArray) => [ ...oldArray, { gpa: (qualityPoints / creditHours).toFixed(1) } ]);
		}
	};

	return (
		<div className="semester-container">
			<div className="semester-heading">Semester 1</div>
			{courses.map((course) => course)}
			<div className="buttons">
				<input
					type="button"
					value="Add Course"
					id="add-course"
					onClick={() =>
						setCourses((oldArray) => [
							...oldArray,
							<ClassColumn termObj={termObj} setTermObj={setTermObj} />
						])}
				/>
				<input type="submit" value="Calculate GPA" id="calculate" onClick={calculateSemesterGPA} />
			</div>
			<div className="sem-gpa-div">
				<input type="button" value={semGPA} id="sem-gpa" />
			</div>
		</div>
	);
};

export default SemesterContainer;
