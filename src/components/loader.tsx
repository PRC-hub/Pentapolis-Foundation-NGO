import React, { useEffect } from 'react';
import "./loader.css"; 

const Loader = () => {

useEffect(() => {
const loader = document.querySelector("#loader") as HTMLElement;

setTimeout(() => {
    if (loader) {
    loader.style.top = "-100%";
    }
}, 4200);
}, []);

return (
<div id="loader">
    <h1>WELCOME</h1>
    <h1>TO</h1>
    <h1>PENTAPOLIS FOUNDATION</h1>
</div>
);
};

export default Loader;
