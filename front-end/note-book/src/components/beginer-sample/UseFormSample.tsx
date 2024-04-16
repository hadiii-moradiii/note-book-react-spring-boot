import { FieldValues, useForm } from "react-hook-form";
const UseFormSample = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <div>
      <h3> Form hook Installation</h3>
      <code>npm i react-hook-form</code>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          id="someText"
          {...register("hadi", { required: true, min: 13 })}
          type="text"
        />
        {errors.hadi?.type == "required" && <p>name is required</p>}
        <button type="submit" disabled={!isValid}>
          {" "}
          submit
        </button>
      </form>
    </div>
  );
};

export default UseFormSample;
