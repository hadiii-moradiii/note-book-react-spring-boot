import { Button, TextField } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
interface User {
  id: number;
  name: string;
  username: string;
}
const AddUser = () => {
  const queryClient = useQueryClient();
  const addUser = useMutation<User, Error, User>({
    mutationFn: (user: User) =>
      axios
        .post<User>("https://jsonplaceholder.typicode.com/users", user)
        .then((res) => res.data),
    onSuccess: (savedUser, newUser) => {
      // approch one invalidate the cache
      //   queryClient.invalidateQueries({
      //     queryKey: ["users"],
      //   });
      // approach two update cache
      queryClient.setQueryData<User[]>(["users"], (users) => [
        savedUser,
        ...(users || []),
      ]);
    },
  });

  return (
    <div>
      {addUser.error && <p>{addUser.error.message}</p>}
      <form>
        <TextField id="outlined-basic" label="name" variant="standard" />
        <TextField id="outlined-basic" label="userName" variant="standard" />
        <Button
          variant="contained"
          onClick={() => {
            addUser.mutate({ id: 0, name: "hadi", username: "test" });
          }}
        >
          Add user
        </Button>
      </form>
    </div>
  );
};

export default AddUser;
