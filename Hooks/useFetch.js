import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';

const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});
  const letUsFetch = useCallback((options = {}) => {
    setOptions(options);
    setIsLoading(true);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    const nowFetchData = async () => {
      try {
        const res = await axios(url, options);
        setResponse(res.data);
      } catch (err) {
        const data = err.response ? err.response.data : 'Server error!';
        setError(data);
      }
      setIsLoading(false);
    };
    nowFetchData();
  }, [isLoading, options, url]);
  return [{ response, error, isLoading }, letUsFetch];
};

export default useFetch;
