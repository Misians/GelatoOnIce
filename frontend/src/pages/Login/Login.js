import { useContext } from "react";
import './login.css';
import Google from "../../imagens/gg.png";
import { Navigate } from "react-router-dom";
import { AuthGoogleContext } from "../../context/authGoogle";

export const Login = () => {
  const { signInGoogle, signed } = useContext(AuthGoogleContext);
  async function handleLoginFromGoogle() {
    await signInGoogle();
  }
  if (!signed) {
    return(
    <>
    <p>Faça login com seu email</p>
    <button onClick={handleLoginFromGoogle}>
      <img src={Google} width={15}></img>
      LOGAR COM GOOGLE</button>
    </>
    
    ); 
  } else {
    return <Navigate to="/Home" />;
  }
};