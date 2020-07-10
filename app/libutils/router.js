const navigateTo = (path) => {
  // validate
  path = (path === `/`) ? '' : path;
  window.location.hash = `${path}`;
  return this;
};

export const navTo = navigateTo;

