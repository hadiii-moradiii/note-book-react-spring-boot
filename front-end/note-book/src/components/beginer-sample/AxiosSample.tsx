import axios from "axios";
import { useEffect, useState } from "react";
interface User {
  id: number;
  name: string;
  username: string;
}
const AxoisSample = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users/")
      .then((res) => {
        setTimeout(() => {
          setLoading(false);
          setUsers(res.data);
        }, 1000);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  }, []);

  return (
    <div>
      {loading && <div>loading ....</div>}
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>user name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
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

export default AxoisSample;
