import { useState } from "react";
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


const GifExpertApp = () => {

    const [categorys, setcategory] = useState(['One Punch'])



    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setcategory={setcategory} />
            <hr />
            <ol>
                {
                    categorys.map(category => (
                        <GifGrid key={category} category={category} />
                    ))
                }
            </ol>
        </>
    );
};

export default GifExpertApp;