import { useQuery } from "@tanstack/react-query";
import axios from "axios";
interface User {
  id: number;
  name: string;
  username: string;
}
const UsersList = () => {
  const getUsers = () =>
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users/")
      .then((res) => res.data);

  const {
    data: users,
    error,
    isLoading,
  } = useQuery<User[], Error>({
    queryFn: getUsers,
    queryKey: ["users"],
    staleTime: 100_000,
  });

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isLoading) {
    return <p>loading ... </p>;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>user name</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
