function isMappedError(error) {
  if (
    !!error?.response?.data?.error?.message ||
    !!error?.response?.status !== 500
  ) {
    return !!error;
  } else {
    return !error;
  }
}

export default isMappedError;
