import { useEffect, useState } from "react";

const AdminAcess = () => {
  const [clients, setClient] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/client/")
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        setClient(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <table border="1">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Celular</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.cel}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default AdminAcess;
