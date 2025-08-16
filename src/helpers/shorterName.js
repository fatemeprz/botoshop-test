const shorterName = (name) => {
  const result = name.split(" ").splice(0, 4).join(" ")
  return result
};

export {shorterName}