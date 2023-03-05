import React, { useState } from 'react'

const Section = ({ title, desc, isVisible, setIsVisible, id }) => {
    return (
        <div id={id} className='border border-black p-2 m-2'>
            <h3 className="font-bold text-xl">{title}</h3>
            <button id={id} className='cursor-pointer underline' onClick={(e) => setIsVisible(e.target.id === id ? isVisible === id ? "" : id : "")}>{isVisible === id ? "Hide" : "Show"}</button>
            {isVisible === id && <p>{desc}</p>}
        </div>
    )
}

const Instamart = () => {
    const [visibleSection, setVisibleSection] = useState("");
    return (
        <div>
            <div className='text-3xl p-2 m-2 font-bold'>Instamart</div>
            <Section id="about" isVisible={visibleSection} setIsVisible={setVisibleSection} title="About Instamart" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vitae sit odit modi nobis maxime consectetur tempore perferendis ad enim, molestias animi dignissimos? Nihil aliquid quaerat quod ex facere adipisci fugit vero unde magni, optio sapiente commodi suscipit sint, impedit accusantium, ad sit? Minus ipsam id aliquam doloribus odio. Esse aliquam voluptatibus, suscipit earum, iste nulla, eveniet id at officiis commodi hic excepturi alias et. Sequi iure temporibus voluptas. Rerum nemo voluptas mollitia similique quisquam ut nobis error asperiores esse ipsum recusandae possimus numquam voluptatum laborum assumenda vel porro minima magni, aut itaque, quam amet. Unde ab temporibus animi. Laudantium?" />
            <Section id="team" isVisible={visibleSection} setIsVisible={setVisibleSection} title="Team Instamart" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vitae sit odit modi nobis maxime consectetur tempore perferendis ad enim, molestias animi dignissimos? Nihil aliquid quaerat quod ex facere adipisci fugit vero unde magni, optio sapiente commodi suscipit sint, impedit accusantium, ad sit? Minus ipsam id aliquam doloribus odio. Esse aliquam voluptatibus, suscipit earum, iste nulla, eveniet id at officiis commodi hic excepturi alias et. Sequi iure temporibus voluptas. Rerum nemo voluptas mollitia similique quisquam ut nobis error asperiores esse ipsum recusandae possimus numquam voluptatum laborum assumenda vel porro minima magni, aut itaque, quam amet. Unde ab temporibus animi. Laudantium?" />
            <Section id="career" isVisible={visibleSection} setIsVisible={setVisibleSection} title="Careers at Instamart" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vitae sit odit modi nobis maxime consectetur tempore perferendis ad enim, molestias animi dignissimos? Nihil aliquid quaerat quod ex facere adipisci fugit vero unde magni, optio sapiente commodi suscipit sint, impedit accusantium, ad sit? Minus ipsam id aliquam doloribus odio. Esse aliquam voluptatibus, suscipit earum, iste nulla, eveniet id at officiis commodi hic excepturi alias et. Sequi iure temporibus voluptas. Rerum nemo voluptas mollitia similique quisquam ut nobis error asperiores esse ipsum recusandae possimus numquam voluptatum laborum assumenda vel porro minima magni, aut itaque, quam amet. Unde ab temporibus animi. Laudantium?" />
        </div>

    )
}

export default Instamart;