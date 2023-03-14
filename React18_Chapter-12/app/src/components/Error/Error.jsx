import React from 'react'
import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
        <div>{`OOPS - ${err.status} : ${err.statusText}, Something went wrong!`}</div>
    )
}

export default Error