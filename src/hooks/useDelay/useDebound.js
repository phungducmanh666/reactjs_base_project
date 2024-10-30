import React, { useEffect, useState } from "react";

export default function useDebound({ defaultValue, delayMs }) {
  const [value, setValue] = useState(defaultValue);
  const [tmpValue, setTmpValue] = useState(defaultValue);

  useEffect(() => {
    // schedule change real value
    const timer = setTimeout(() => {
      setValue(tmpValue);
    }, delayMs);

    // clear schedule
    return () => clearTimeout(timer);
  }, [tmpValue]);

  return { value, tmpValue, setTmpValue };
}
