import React, { useEffect } from "react";
import { useReviews } from "../context/ReviewContext";
import ProductDetails from "../components/ProductDetails";
import ReviewList from "../components/ReviewList";

function ReviewAnalytics({ productUrl }) {
    const { productDetails, setProductDetails, reviews, setReviews } = useReviews();

    useEffect(() => {
        if (productUrl) {
            fetch(`/api/product-details/?url=${productUrl}`)
                .then((res) => res.json())
                .then(setProductDetails);

            fetch(`/api/product-reviews/?url=${productUrl}`)
                .then((res) => res.json())
                .then(setReviews);
        }
    }, [productUrl, setProductDetails, setReviews]);

    if (!productDetails || reviews.length === 0) {
        return <div > Loading... < /div>;
    }

    return ( <
        div >
        <
        ProductDetails details = { productDetails }
        /> <
        ReviewList reviews = { reviews }
        /> <
        /div>
    );
}

export default ReviewAnalytics;