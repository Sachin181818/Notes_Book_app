import React from 'react';

const Header = ({ handleToggleThemeMode }) => {
	return (
		<div className='heading'>
			<h1>Notes Book</h1>
			<button
				onClick={() =>
					handleToggleThemeMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className='save'
			>
				Theme Change
			</button>
		</div>
	);
};

export default Header;
