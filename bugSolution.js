import React, { useState, useEffect, useRef } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const isMounted = useRef(true);

  useEffect(() => {
    return () => { isMounted.current = false; };
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('YOUR_API_ENDPOINT');
      const jsonData = await response.json();
      if (isMounted.current) {
        setData(jsonData);
      }
    } catch (err) {
      if (isMounted.current) {
        setError('Error fetching data');
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  if (!data) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      {/* Render data here */}
    </View>
  );
};

export default MyComponent;