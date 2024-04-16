import { useEffect } from "react";

const EffectSample = () => {
  useEffect(() => {
    document.title = "sample-app";
  }, []);

  return <div></div>;
};

export default EffectSample;
