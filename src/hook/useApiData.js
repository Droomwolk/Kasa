import { useEffect, useState } from "react";
import axios from "axios";

export const useApiData = ({ url }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [url]);

  return [data, isLoading];
};

// export default useApiData;
