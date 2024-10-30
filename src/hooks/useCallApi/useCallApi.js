import React, { useEffect, useState } from "react";

export default function useCallApi(callApiAsync, callNow = false) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const execute = async () => {
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      const response = await callApiAsync();
      setResult(response);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (callNow === true) {
      execute();
    }
  }, [callNow]);

  return { loading, result, error, execute };
}
