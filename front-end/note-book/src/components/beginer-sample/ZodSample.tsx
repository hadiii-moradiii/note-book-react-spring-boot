import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import z from "zod";

const ZodSample = () => {
  const schema = z.object({
    name: z.string().min(10, "this is invalid").max(10),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onsubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <>
      <h3>Zod Installation </h3>
      <ul>
        <li>npm i zod</li>
        <li>npm i zodResolver</li>
      </ul>

      <form onSubmit={handleSubmit(onsubmit)}>
        <input {...register("name")} type="text" />
        {errors.name && <p>{errors.name.message}</p>}
        <button type="submit">submit me</button>
      </form>
    </>
  );
};

export default ZodSample;
