import CategoryList from "@/components/Category/CategoryList";
import Spinner from "@/components/LoadingAnimation/Spinner";
import React, { Suspense } from "react";

export const metadata = {
  title: "Manage All Category"
}

const CategoriesPage = () => {
  return (
    <Suspense fallback={<Spinner/>}>
      <CategoryList />
    </Suspense>
  );
};

export default CategoriesPage;
