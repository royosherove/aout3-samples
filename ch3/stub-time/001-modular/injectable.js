const moduleInject = (originalDeps) => {
    let dependecies ={};
    const reset = () => Object.assign(dependecies, originalDeps);

    function inject(fakes) {
        Object.assign(dependecies, fakes);
        return reset;
    }

    return {dependecies, inject}
};

module.exports = moduleInject;

