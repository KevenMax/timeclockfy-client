function hasErrorArray(error, arrayError) {
  const result = arrayError.filter((item) => error === item);
  return result.length > 0;
}

export default hasErrorArray;
