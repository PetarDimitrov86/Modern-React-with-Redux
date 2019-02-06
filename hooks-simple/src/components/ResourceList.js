import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState('resources');

  const fetchResource = async (resource) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);

    setResources(response.data);
  }

  useEffect(() => {
    fetchResource(resource);
  }, [])

  return (
    <div>{resources.length}</div>
  );
}

export default ResourceList;