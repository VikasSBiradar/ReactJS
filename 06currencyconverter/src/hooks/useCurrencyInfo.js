import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null); // To store errors
  const [loading, setLoading] = useState(true); // To track loading state

  useEffect(() => {
    setLoading(true);
    setError(null); // Reset error on new request

    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch currency data");
        }
        return res.json();
      })
      .then((res) => {
        setData(res[currency]);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });

  }, [currency]);

  useEffect(() => {
    console.log(data); // Log data when it changes
  }, [data]);

  return { data, error, loading };
}

export default useCurrencyInfo;
