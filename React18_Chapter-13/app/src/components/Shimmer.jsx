import React from 'react'
const items = 14;

const Shimmer = () => {
    return (
        <div data-testid="shimmer">
            {[...Array(items)].map((item, index) => <div key={`${item}.${index}_shimmer`} className="shimmerCardContainer"></div>)}
        </div>
    )
}

export default Shimmer