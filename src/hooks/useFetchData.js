import { useEffect, useState } from "react";
import axios from "axios";

const useFetchData = (url, params) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const refetch = () => {
    const API_ENDPOINT = process.env.REACT_APP_API_BASE;
    url = API_ENDPOINT + url;
    return axios
      .get(
        url,
        { params: params },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(
        (res) => {
          setError(null);
          setData(res.data);
          setIsLoading(false);
        },
        (err) => {
          setError(err);
          setIsLoading(false);
        }
      );
  };
  useEffect(() => {
    const API_ENDPOINT = process.env.REACT_APP_API_BASE;
    url = API_ENDPOINT + url;
    axios
      .get(url, params, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(
        (res) => {
          setError(null);
          setData(res.data);
          setIsLoading(false);
        },
        (err) => {
          setError(err);
          setIsLoading(false);
        }
      );
  }, [url, params]);

  return {
    data,
    isLoading,
    error,
    refetch,
  };
};

export const useFetchDataPDF = (url, params) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const API_ENDPOINT = process.env.REACT_APP_API_BASE;
    url = API_ENDPOINT + url;
    axios
      .get(url, {
        responseType: "blob",
        headers: {
          "Content-Type": "application/pdf",
        },
      })
      .then(
        (res) => {
          setError(null);
          const file = new Blob([res.data], {
            type: "application/pdf",
          });
          const fileURL = URL.createObjectURL(file);
          setData(fileURL);
          setIsLoading(false);
        },
        (err) => {
          setError(err);
          setIsLoading(false);
        }
      );
  }, [url, params]);

  return {
    data,
    isLoading,
    error,
  };
};

export default useFetchData;
