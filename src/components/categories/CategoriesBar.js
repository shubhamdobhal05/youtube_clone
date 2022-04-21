import React, { useState } from "react";
import "./_categoriesbar.scss";


const keywords = [
    "All",
    "React Js",
    "Angular Js",
    "Redux",
    "Html",
    "CSS",
    "Cricket",
    "Football",
    "Coding",
    "Music",
    "API",
    "Garhwali Songs",
    "Tech",
    "Movies"
]

const CategoriesBar = () => {

    const [activeElement, setActiveElement] = useState("All")

    const handleClick = (value) => {
        setActiveElement(value);
    }
    return (
        <div className="categoriesBar">
            {
                keywords.map((value, i) => (<span
                onClick={()=> handleClick(value)}
                 key = {i}
                 className={activeElement === value? "active" : ''}>
                    {value}
                </span>))
            }
        </div>
    )
};

export default CategoriesBar;