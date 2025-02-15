import React from "react";

function Loading() {
    return (
        <div className="product-loading-skeleton p-4">
            <div className="image-skeleton skeleton bg-gray-300 h-64 w-full mb-4" />
            <div className="info-skeleton">
                <div className="title-skeleton skeleton bg-gray-300 h-6 w-3/4 mb-2" />
                <div className="price-skeleton skeleton bg-gray-300 h-6 w-1/4 mb-2" />
                <div className="description-skeleton skeleton bg-gray-300 h-4 w-full mb-2" />
                <div className="description-skeleton skeleton bg-gray-300 h-4 w-full mb-2" />
                <div className="description-skeleton skeleton bg-gray-300 h-4 w-full" />
            </div>
        </div>
    );
}

export default Loading;
