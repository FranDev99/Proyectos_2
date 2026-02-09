import { Link } from "react-router";

export const LoginView = () => {
  return (
    <>
      <h1 className="text-3xl text-white font-semibold text-center">
        Iniciar Sesión
      </h1>
      <nav className="mt-8">
        <Link
          className="text-center text-white text-lg block"
          to={"/auth/register"}
        >
          Si no tienes una cuenta, regístrate
        </Link>
      </nav>
    </>
  );
};
