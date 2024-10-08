"use client"

import React, { useState, useEffect } from 'react';
import {httpAxios} from "@/helper/httpAxios";
import dateFormat from "dateformat";
import Spinner from "@/components/LoadingAnimation/Spinner"; 

const NastedSubCategoryDetails = ({id}) => {
    const [nastedSubcategory, setNastedSubcategory] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        httpAxios.get("/api/nasted-sub-categories/"+id+"?parent-category=true")
        .then(response => {
            setLoading(false);
            setError(null);
            setNastedSubcategory(response.data);
        })
        .catch(error => {
            setLoading(false);

            if (error.response)  {
                setError(error.response.data);
            } else {
            setError({message: "Something went wrong. Please refresh the browser/app or try again later."}); 
            }
        });    
    }, [id]);
 
    return (
        <div className="category_details category_card">
            {nastedSubcategory?.name && (
                <div className='card text-white p-3'>
                    <p><span>ID:</span> <b>{id}</b></p>
                    <p><span>Nasted Subategory Name:</span> <b>{nastedSubcategory.name}</b></p>
                    <p><span>Parent Subategory:</span> <b>{nastedSubcategory.parentCategory?.name}</b></p> 
                    <p><span>Created At:</span> <b>{dateFormat(nastedSubcategory.createdAt, "mmmm, dd yyyy 'at' h:MM tt")}</b></p>
                    <p className="mb-0"><span>Last Updated At:</span> <b>{dateFormat(nastedSubcategory.updatedAt, "mmmm, dd yyyy 'at' h:MM tt")}</b></p>
                </div>
            )}
            {error?.message && (
                <h4 className='text-center'>{error.message}</h4>
            )}
            {error?.notFoundError && (
                <h4 className='text-center'>{error.notFoundError}</h4>
            )}
            {loading && <Spinner />}
        </div>
    );
};

export default NastedSubCategoryDetails;