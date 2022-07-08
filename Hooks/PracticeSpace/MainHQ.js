import React, { useEffect } from 'react';
import useFetch from '../Hooks/useFetch';
const MainHQ = () => {
  const [{ response, error, isLoading }, letUsFetch] = useFetch(
    'http://localhost:3030/posts'
  );
  console.log('app', response, error);

  useEffect(() => {
    letUsFetch({
      method: 'get',
      data: {},
    });
  }, [letUsFetch]);

  return <div>MainHQ</div>;
};

export default MainHQ;
