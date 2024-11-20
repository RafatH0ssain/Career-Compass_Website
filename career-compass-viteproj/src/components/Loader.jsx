// src/loaders/servicesLoader.js
export const Loader = async () => {
    const response = await fetch('../../public/ServiceData.json');
    const data = await response.json();
    return { data };  // Return the data as an object with a key 'data'
};

export default Loader;
