import { Link } from "react-router";

export const LoginView = () => {
  return (
    <>
      <div>LoginView</div>
      <nav>
        <Link to={"/auth/register"}>Registro</Link>
      </nav>
    </>
  );
};
