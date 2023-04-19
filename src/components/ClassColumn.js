import React from 'react';

const ClassColumn = () => {
	return (
		<React.Fragment>
			<div className="class-column-container">
				<div className="class">
					<label htmlFor="course" id="course-label">
						Course:{' '}
					</label>
					<input type="text" placeholder="e.g. CS 152" name="course" id="course" />
				</div>
				<div className="grade">
					<label htmlFor="grade-selection" id="grade-label">
						Grade:{' '}
					</label>
					<select name="grade-selection" id="grade-selection">
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
						<option value="F">F</option>
					</select>
				</div>
				<div className="credits">
					<label htmlFor="enter-credits" id="credits-label">
						Credits:
					</label>
					<input type="text" name="enter-credits" id="enter-credits" placeholder="Enter credits" />
				</div>
			</div>
			<div className="buttons">
				<input type="button" value="Add Course" id="add-course" />
				<input type="submit" value="Calculate GPA" id="calculate" />
			</div>
		</React.Fragment>
	);
};

export default ClassColumn;
