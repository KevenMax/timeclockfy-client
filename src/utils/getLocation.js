function getLocation() {
  let location = { latitude: -3.79333, longitude: -38.519617 };

  navigator.geolocation.getCurrentPosition((position) => {
    location = {
      latitude: position?.coords?.latitude,
      longitude: position?.coords?.longitude,
    };
  });

  return location;
}

export default getLocation;
