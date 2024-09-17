import React from "react";

function ReviewList({ reviews }) {
    return ( <
        ul > {
            reviews.map((review, index) => ( <
                li key = { index } >
                <
                strong > { review.title } < /strong>: {review.content} (Rating: {review.rating}) <
                /li>
            ))
        } <
        /ul>
    );
}

export default ReviewList;