import { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = (resource) => {
  const [resources, setResources] = useState([]);

  const fetchResource = async (resource) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
    setResources(response.data);
  }

  // if we pass empty array, it will work exactly as using componentDidMount 
  // if we dont use second argument, the function will be called non-stop
  // if the values in the array remain the same, the function will be called only once
  // we cannot directly place the body of the fetchResource function, as useEffect function would not allow it
  useEffect(() => {
    fetchResource(resource);
  }, [resource]);

  return resources;
};

export default useResources;