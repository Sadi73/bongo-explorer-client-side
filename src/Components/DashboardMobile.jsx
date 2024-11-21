
import React, { useEffect, useRef, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { adminItems, guideItems, userItems } from '../utils/MenuItems';
import { VscThreeBars } from 'react-icons/vsc';

const DashboardMobile = ({ role }) => {
    const [isDrawerVisible, setIsDrawerVisible] = useState(false);
    const drawerRef = useRef(null);

    const handleClickOutside = (event) => {
        if (drawerRef.current && !drawerRef.current.contains(event.target)) {
            setIsDrawerVisible(false);
        }
    };

    useEffect(() => {
        // Add event listener to detect clicks outside the drawer
        document.addEventListener('mousedown', handleClickOutside);

        // Toggle body scroll when the drawer is open
        if (isDrawerVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Clean up event listener and body overflow style on unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'auto';
        };
    }, [isDrawerVisible]); // Include isDrawerVisible in the dependency array

    return (
        <>
            <div className=' flex items-center justify-between px-5 md:px-10 mt-5 pb-8 border-b relative '>

                {/* Menu Icon */}
                <div
                    className='lg:hidden'
                    onClick={() => setIsDrawerVisible(!isDrawerVisible)}
                >
                    <button><VscThreeBars /></button>
                </div>

                {/* Drawer */}
                <div
                    ref={drawerRef}
                    className={`fixed top-0 left-0 h-full w-42 bg-gray-800 text-white transform ${isDrawerVisible ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50 p-5 flex flex-col justify-between`}
                >
                    <ul className='space-y-4 font-mono'>
                        {role === 'USER' && userItems.map((item, index) => <li key={index}><Link to={item?.path}>{item?.label}</Link></li>)}
                        {role === 'ADMIN' && adminItems.map((item, index) => <li key={index}><Link to={item?.path}>{item?.label}</Link></li>)}
                        {role === 'GUIDE' && guideItems.map((item, index) => <li key={index}><Link to={item?.path}>{item?.label}</Link></li>)}
                    </ul>

                    {/* Close Button at Bottom */}
                    <button
                        onClick={() => setIsDrawerVisible(false)}
                        className="text-lg font-bold mb-5"
                    >
                        Close
                    </button>
                </div>

            </div>

            <div>
                <Outlet />
            </div>
        </>
    );
};

export default DashboardMobile;
