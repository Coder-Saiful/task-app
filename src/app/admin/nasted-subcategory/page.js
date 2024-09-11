import NastedSubCategoryList from "@/components/NastedSubCategory/NastedSubCategoryList";
import { Suspense } from "react";
import Spinner from "@/components/LoadingAnimation/Spinner";

export const metadata = {
    title: "Manage all nasted subcategories"
}


export default function NastedSubcategoryPage() {
    return (
        <Suspense fallback={<Spinner />}>
            <NastedSubCategoryList />
        </Suspense>
    )
}