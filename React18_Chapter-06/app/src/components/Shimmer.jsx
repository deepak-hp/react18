import React from 'react'
const items = 14;

const Shimmer = () => {
    return (
        [...Array(items)].map((item, index) => <div key={`${item}.${index}_shimmer`} class="shimmerCardContainer"></div>)
    )
}

export default Shimmer