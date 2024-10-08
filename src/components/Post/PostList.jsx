"use client"

import React, { useContext, useState, useEffect } from "react";
import dateFormat from "dateformat";
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";
import { httpAxios } from "@/helper/httpAxios";
import Spinner from "@/components/LoadingAnimation/Spinner";
import { useRouter } from 'next/navigation';

const PostList = () => {
    const { user } = useContext(AuthContext);
    const [postData, setPostData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();

    // show all post
    const showAllPost = () => {
        setLoading(true);

        httpAxios.get("/api/posts")
            .then(response => {
                setLoading(false);
                if (response.data.message) {
                    setError(response.data.message);
                } else {
                    setError(null);
                    setPostData(response.data);
                }
                console.log(response.data)
            })
            .catch(error => {
                setLoading(false);

                if (error.response) {
                    if (error.response.status == 401) {
                        router.push('/accounts/login')
                    } else {
                        setError(error.response.data.message);
                    }
                } else {
                    setError("Something went wrong. Please try again later or refresh the web/app");
                }
            });
    }

    useEffect(() => {
        showAllPost()
    }, []);

    if (!user) {
        return (
            <section className="hero text-center mb-4">
                <div className="hero-content">
                    <h2 className="mb-4">Stay Organized &amp; Productive</h2>
                    <p className="m-auto">Manage your tasks effortlessly and never miss a deadline. Start using TaskApp today to boost your productivity!</p>
                    <div className="cta-buttons">
                        <Link href="/accounts/register" className="primary-btn">Sign Up Now</Link>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="my-4">
            <div className="container-fluid">
                <div className="row">
                    {Object.keys(postData).length > 0 && postData.posts.map(post => (
                        <div className="col-xl-3 col-lg-4 col-sm-6 mb-4" key={post._id}>
                            <div className="task_card">
                                <div className="card">
                                    <div className="card-header d-flex justify-content-between text-white">
                                        <div className="author d-flex align-items-center">
                                            <div className="image me-2"> 
                                                {post.author?.profile?.avatar ? (
                                                    <img src={post.author.profile.avatar} alt="avatar" />
                                                ) : (
                                                    <img src="/nophoto.webp" alt="avatar" />
                                                )}
                                            </div>
                                            <div className="name_and_date">
                                                <h4>{post.author?.name}</h4>
                                                <h6>
                                                    {dateFormat(post.createdAt, "mmmm dd 'at' h:MM TT")}
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="bookmark_or_menu_icon">
                                            <div className="bookmark">

                                                {(post.author?._id == user._id) ? (
                                                    <div className="dropdown">
                                                        <div
                                                            className="dotted_menu_icon dropdown-toggle"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="true"
                                                        >
                                                            <span></span>
                                                            <span></span>
                                                            <span></span>
                                                        </div>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <Link className="text-decoration-none edit" href={`/tasks/${post._id}/edit`}>
                                                                    <i className="fa-regular fa-pen-to-square text-primary"></i>{" "}
                                                                    Edit
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <button className="delete" href="#">
                                                                    <i className="fa-solid fa-trash text-danger"></i>{" "}
                                                                    Delete
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                ) : (
                                                    <>
                                                        <i className="fa-regular fa-bookmark"></i>
                                                        {/* <i className="fa-solid fa-bookmark"></i> */}
                                                    </>
                                                )}

                                            </div>
                                        </div>
                                    </div>
                                    <Link href={`/tasks/${post._id}`} className={`text-decoration-none`}>
                                        <div className="card-body p-0">
                                            <div className="blog_image">
                                                <img
                                                    src={post.images[0]}
                                                    alt="post image"
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div className="blog_text">
                                                <h2>{post.title}</h2>
                                                <p>{post.description}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                    {loading && !error && (
                        <Spinner />
                    )}
                    {error && (
                        <h5 className="text-center mb-0">{error}</h5>
                    )}
                </div>
            </div>
        </section>
    );


};

export default PostList;
