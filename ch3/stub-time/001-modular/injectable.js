const moduleInject = (originalDeps) => {
  const dependencies = {};
  const inject = fakes => Object.assign(dependencies, fakes);
  const reset = () => Object.assign(dependencies, originalDeps);

  return {
    dependencies,
    inject,
    reset
  };
};

module.exports = moduleInject;
