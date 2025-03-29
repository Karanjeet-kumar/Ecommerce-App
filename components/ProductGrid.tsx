"use client";

import { Product } from '@/sanity.types'
import ProductThumbnail from "./ProductThumbnail";

function ProductGrid({ products }: { products?: Product[] }) {
    if (!products || products.length === 0) {
        return <p>No products available.</p>;
    }
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4'>
            {products.map((product) => {
                return <ProductThumbnail key={product._id} product={product} />
            })}
        </div>
    )
}

export default ProductGrid
