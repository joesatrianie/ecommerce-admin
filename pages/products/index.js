import React from "react";
import Layout from "@/components/Layout";
import Link from "next/link";

function Products() {
  return (
    <Layout>
      <Link
        href={"/products/new"}
        className="bg-blue-900 text-white rounded-md py-1 px-2"
      >
        add new
      </Link>
    </Layout>
  );
}

export default Products;
