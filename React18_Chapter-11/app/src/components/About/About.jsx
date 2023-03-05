import React from 'react'
import Profile from '../Profile';
import ProfileClass from '../ProfileClass';
import UserContext from '../../utils/UserContext';

// const About = () => {
//     return (
//         <div>
//             <h1>About Us page</h1>
//             <p>This is the Namaste react Live Course Chapter 07 - finding the Path 🚀</p>
//             <ProfileClass name="Deepak" />
//             <Profile name="Deepak" />
//         </div >
//     )
// }

// export default About;

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent - constructor");
    }


    componentDidMount() {
        console.log("Parent - ComponentDidMount");
    }

    componentWillUnmount() {
        console.log("Parent - componentWillUnmount");
    }

    render() {
        console.log("Parent - render");
        return (
            <div>
                <h1>About Us page</h1>
                <UserContext.Consumer>
                    {({ user }) => <h4 className='font-bold text-xl p-10'>{user.name} - {user.email}</h4>}
                </UserContext.Consumer>
                <p>This is the Namaste react Live Course Chapter 07 - finding the Path 🚀</p>
                <ProfileClass name="Deepak" />
                <Profile name="Deepak HP" />
            </div >
        )
    }
}

export default About