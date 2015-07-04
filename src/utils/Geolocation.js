const Geolocation = (
  typeof window !== 'undefined' && navigator && navigator.geolocation || {
    getCurrentPosition: (success, failure) => {
      failure(new Error("Your browser doesn't support geolocation."));
    },
  }
);

export default Geolocation;
