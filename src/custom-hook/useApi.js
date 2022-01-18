// This hook is used to fetch data from the NAsa Api

import { useState, useEffect } from 'react';

export default function useApi(api) {
  const [apiData, setApiData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const getApiData = async () => {
      try {
        const datafromApi = await fetch(`${api}&count=6`);
        const result = await datafromApi.json();

        setApiData(result);
      } catch (error) {
        setError(error);
      }
    };
    getApiData();
  }, [api]);

  return [error, apiData];
}
