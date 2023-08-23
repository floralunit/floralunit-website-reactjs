import React, { useEffect } from "react";

const ScrollListener = () => {
    useEffect(() => {
        const handleScroll = () => {
            const section1 = document.getElementById("section1");
            const section2 = document.getElementById("section2");
            const section3 = document.getElementById("section3");

            if (window.scrollY <= section1.offsetHeight) {
                document.body.style.backgroundImage = section1.style.backgroundImage;
            } else if (window.scrollY <= section1.offsetHeight + section2.offsetHeight) {
                document.body.style.backgroundImage = section2.style.backgroundImage;
            } else {
                document.body.style.backgroundImage = section3.style.backgroundImage;
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return null;
};

export default ScrollListener;