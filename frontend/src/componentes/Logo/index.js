import logo from '../../imagens/logo.svg';
import './index.css';

function Logo(){
    return(
        <div className='logo'>
          <img src={logo}
          alt='Sorveteria'
          className='logoimg'
          width={140}
          ></img>
        </div>
    );
}
export default Logo;
