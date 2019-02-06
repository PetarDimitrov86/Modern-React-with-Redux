import { useState, useEffect } from 'react';

export default () => {
  const [latitude, setLatitude] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLatitude(position.coords.latitude),
      err => setErrorMessage(err.message)
    );
  }, []);

  return [latitude, errorMessage];
}