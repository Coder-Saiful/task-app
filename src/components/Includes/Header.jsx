'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';

const activeLink = (currentPath, pathname) => {
    return currentPath === pathname ? "active" : "";
}

const Header = () => {
    const currentPath = usePathname();
    // const isAdminUrl = (currentPath) => {
    //     return currentPath.startsWith('/admin') ? true : false;
    // }
    if (currentPath.startsWith('/admin')) {
        return null;
    }

    const handleMainNavItem = (e) =>  {
        // console.log(e.target)
    }

    useEffect(() => {
        document.querySelector(".navbar-collapse.main_navbar_collapse").classList.remove("show");
    }, [currentPath]);

    return (
        
        <nav className="navbar navbar-expand-lg bg-dark main_nav py-1 py-lg-0">
            <div className="container-fluid">
                <Link className="navbar-brand text-white fs-4 py-0" href={'/'}>Task Manager</Link>
                <button className="navbar-toggler px-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                {/* <span className="navbar-toggler-icon"></span> */}
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className="collapse navbar-collapse main_navbar_collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className={`nav-link text-white ${activeLink(currentPath, '/')}`} href={'/'} onClick={handleMainNavItem}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link text-white ${activeLink(currentPath, '/tasks')}`} href={'/tasks'} onClick={handleMainNavItem}>Tasks</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link text-white ${activeLink(currentPath, '/accounts/profile')}`} href={'/accounts/profile'} onClick={handleMainNavItem}>Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link text-white ${activeLink(currentPath, '/accounts/change-password')}`} href={'/accounts/change-password'} onClick={handleMainNavItem}>Change Password</Link>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link text-white`}>Logout</button>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link text-white ${activeLink(currentPath, '/accounts/login')}`} href={'/accounts/login'} onClick={handleMainNavItem}>Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link text-white ${activeLink(currentPath, '/accounts/register')}`} href={'/accounts/register'} onClick={handleMainNavItem}>Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;