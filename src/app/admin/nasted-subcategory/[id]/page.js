import React from 'react';
import { getToken } from "@/helper/getToken";
import { fetchNastedSubcategoryDetails } from "@/services/categoryService";
import NastedSubCategoryDetails from '@/components/NastedSubCategory/NastedSubCategoryDetails';

export const generateMetadata = async ({ params: { id } }) => {
    const { data } = await fetchNastedSubcategoryDetails(id, getToken());
    return {
        title: data ? data?.name + " | Nasted Subcategory | Details" : "Category Details",
    };
};
const NastedSubCategoryDetailsPage = ({ params: { id } }) => {
    return (
        <section>
            <div className="container my-4">
                <div className="row">
                    <div className="col-sm-4 col-lg-5 m-auto">
                        <NastedSubCategoryDetails id={id} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NastedSubCategoryDetailsPage;