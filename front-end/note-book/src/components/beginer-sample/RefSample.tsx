import { FormEvent, useRef } from "react";

const RefSample = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current?.value) {
      console.log(nameRef.current.value);
    }
  };

  return (
    <div>
      <h3>this ref sample</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={nameRef} />
        <button type="submit">submit me</button>
      </form>
    </div>
  );
};

export default RefSample;
