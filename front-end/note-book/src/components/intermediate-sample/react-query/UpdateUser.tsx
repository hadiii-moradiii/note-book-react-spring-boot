import { Button } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

interface User {
  id: number;
  name: string;
}
const UpdateUser = () => {
  const queryClient = useQueryClient();
  const updateuser = useMutation<User, Error, User>({
    mutationFn: (user: User) =>
      axios
        .post<User>("https://jsonplaceholder.typicode.com/users", user)
        .then((res) => res.data),
    onSuccess: (savedUser, updateUser) => {
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
      <Button>Update</Button>
    </div>
  );
};

export default UpdateUser;
