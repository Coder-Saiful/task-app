"use client"

import React, { useState, useEffect } from 'react';
import {httpAxios} from "@/helper/httpAxios";
import dateFormat from "dateformat";
import Spinner from "@/components/LoadingAnimation/Spinner"; 

const SubCategoryDetails = ({id}) => {
    const [subcategory, setSubcategory] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        httpAxios.get("/api/sub-categories/"+id+"?nasted-subcategory-id=true&parent-category=true")
        .then(response => {
            setLoading(false);
            setError(null);
            setSubcategory(response.data);
        })
        .catch(error => {
            setLoading(false);

            if (error.response)  {
                setError(error.response.data);
            } else {
            setError({message: "Something went wrong. Please try again later or refresh the web/app."}); 
            }
        });    
    }, [id]);
 
    return (
        <div className="category_details category_card">
            {subcategory?.name && (
                <div className='card text-white p-3'>
                    <p><span>ID:</span> <b>{id}</b></p>
                    <p><span>Subategory Name:</span> <b>{subcategory.name}</b></p>
                    <p><span>Parent Category:</span> <b>{subcategory.parentCategory?.name}</b></p>
                    <p><span>Total nasted subcategory under the subcategory:</span> <b>{subcategory.nasted_subcategories?.length}</b></p>
                    <p><span>Created At:</span> <b>{dateFormat(subcategory.createdAt, "mmmm, dd yyyy 'at' h:MM tt")}</b></p>
                    <p className="mb-0"><span>Last Updated At:</span> <b>{dateFormat(subcategory.updatedAt, "mmmm, dd yyyy 'at' h:MM tt")}</b></p>
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

export default SubCategoryDetails;