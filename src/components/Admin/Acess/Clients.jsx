import { useEffect, useState } from "react";

const ClientsInfo = () => {
  const [clients, setClient] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/clients/")
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
    <h1 className="mb-5">Clientes registrados</h1>
      <table className="table table-bordered table-striped mx-auto">
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
export default ClientsInfo;
