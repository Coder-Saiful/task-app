import SubCategoryList from "@/components/SubCategory/SubCategoryList";
import { Suspense } from "react";
import Spinner from "@/components/LoadingAnimation/Spinner";

export const metadata = {
    title: "Manage all subcategories"
}


export default function() {
    return (
        <Suspense fallback={<Spinner />}>
            <SubCategoryList />
        </Suspense>
    )
}