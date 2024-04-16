import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  message?: String;
}
const Message = ({ message, children }: Props) => {
  return (
    <>
      <h3> hello world! {message}</h3>
      <div>{children}</div>
    </>
  );
};

export default Message;
