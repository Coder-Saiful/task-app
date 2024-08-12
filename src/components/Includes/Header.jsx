'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

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

    return (
        
        <nav className="navbar navbar-expand-lg bg-dark py-0">
            <div className="container-fluid">
                <Link className="navbar-brand text-white fs-4 py-0" href={'/'}>Task Manager</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                {/* <span className="navbar-toggler-icon"></span> */}
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link text-white ${activeLink(currentPath, '/')}`} href={'/'}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link text-white ${activeLink(currentPath, '/tasks')}`} href={'/tasks'}>Tasks</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link text-white ${activeLink(currentPath, '/accounts/profile')}`} href={'/accounts/profile'}>Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link text-white ${activeLink(currentPath, '/accounts/change-password')}`} href={'/accounts/change-password'}>Change Password</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link text-white ${activeLink(currentPath, '/accounts/logout')}`} href={'/accounts/logout'}>Logout</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link text-white ${activeLink(currentPath, '/accounts/login')}`} href={'/accounts/login'}>Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link text-white ${activeLink(currentPath, '/accounts/register')}`} href={'/accounts/register'}>Register</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Header;