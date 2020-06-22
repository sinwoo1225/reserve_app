import React from "react";
import SliderContainer from "../components/Slider";
import { sliderItems } from "../utils/tempData";

function Home(){
    return(
        <main>
            <SliderContainer sliderItems={sliderItems}/>
        </main>
    );
}

export default Home;