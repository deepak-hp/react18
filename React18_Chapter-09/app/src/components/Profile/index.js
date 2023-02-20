import React, { useEffect, useState } from 'react'

const Profile = (props) => {
    const [count, setCount] = useState(0)
    const [count2] = useState(0)

    useEffect(() => {
        console.log("child - userEffect " + props.name);
        const timer = setInterval(() => {
            console.log("hello from setInterval " + props.name);
        }, 1000);
        return () => {
            clearInterval(timer);
            console.log("child - useEffect return " + props.name);
        }

    }, [])

    console.log("child - render " + props.name)
    return (
        <div>
            <h1>This is a profile functional component</h1>
            <h3>Name: {props.name}</h3>
            <h4>Count: {count}</h4>
            <button onClick={() => setCount(1)
            }>click</button>
        </div>
    )
}

export default Profile;