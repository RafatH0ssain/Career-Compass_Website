export const Loader = async () => {
    const response = await fetch('../../public/ServiceData.json');
    const data = await response.json();
    return { data };
};

export default Loader;
