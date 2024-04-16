import React, { FormEvent, useState } from "react";

interface Props {
  name: String;
}
const StateSample = ({ name }: Props) => {
  const [nameState, setNameState] = useState(name);

  const hanldeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(nameState);
    setNameState(event.target.value);
    console.log(nameState);
  };
  return (
    <div>
      <input onChange={hanldeChange} type="text" value={nameState} />
    </div>
  );
};

export default StateSample;
