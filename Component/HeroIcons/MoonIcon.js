import React from 'react';

const MoonIcon = ({ ClickHandleMoon }) => {
    return (
        <>
            <button onClick={ClickHandleMoon} className='w-7 h-7'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
            </button>

        </>
    );
};

export default MoonIcon;