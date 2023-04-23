import React, { useState, useContext, useEffect } from 'react';

const ClassColumn = ({ termObj, setTermObj }) => {
	const [ gradePoint, setGradePoint ] = useState(0);
	const [ credits, setCredits ] = useState(0);
	const [ className, setClassName ] = useState('');
	const [ courseObj, setCourseObj ] = useState({});

	useEffect(
		() => {
			const addCourseObj = () => {
				setCourseObj({ className: className, gradePoint: gradePoint, credits: credits });
			};

			addCourseObj();
		},
		[ gradePoint, credits, className ]
	);

	const gradeMapper = {
		A: 4.0,
		'A-': 3.7,
		'B+': 3.3,
		B: 3.0,
		'B-': 2.7,
		'C+': 2.3,
		C: 2.0,
		'C-': 1.7,
		'D+': 1.3,
		D: 1.0,
		'D-': 0.7,
		F: 0.0
	};

	const handleClassNameChange = (nameInput) => {
		setClassName(nameInput);
	};

	const handleGradePointChange = (grade) => {
		setGradePoint(gradeMapper[grade]);
	};

	const handleCreditChange = (creditInput) => {
		setCredits(Number(creditInput));
	};

	const handleSubmit = () => {
		if (Object.keys(courseObj).length > 0) {
			setTermObj((oldArray) => [ ...oldArray, courseObj ]);
		}
	};

	return (
		<React.Fragment>
			<div className="class-column-container">
				<div className="class">
					<label htmlFor="course" id="course-label">
						Course:{' '}
					</label>
					<input
						type="text"
						placeholder="e.g. CS 152"
						name="course"
						id="course"
						onChange={(e) => handleClassNameChange(e.target.value)}
					/>
				</div>
				<div className="grade">
					<label htmlFor="grade-selection" id="grade-label">
						Grade:{' '}
					</label>
					<select
						name="grade-selection"
						id="grade-selection"
						onChange={(e) => handleGradePointChange(e.target.value)}>
						<option value="none">-</option>
						<option value="A">A</option>
						<option value="A-">A-</option>
						<option value="B+">B+</option>
						<option value="B">B</option>
						<option value="B-">B-</option>
						<option value="C+">C+</option>
						<option value="C">C</option>
						<option value="C-">C-</option>
						<option value="D+">D+</option>
						<option value="D">D</option>
						<option value="D">D-</option>
						<option value="F">F</option>
					</select>
				</div>
				<div className="credits">
					<label htmlFor="enter-credits" id="credits-label">
						Credits:
					</label>
					<input
						type="text"
						name="enter-credits"
						id="enter-credits"
						placeholder="Enter credits"
						onChange={(e) => handleCreditChange(e.target.value)}
					/>
				</div>
				<div>
					<input type="submit" onClick={handleSubmit} />
				</div>
			</div>
		</React.Fragment>
	);
};

export default ClassColumn;
