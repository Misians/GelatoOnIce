import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';
import { Link } from 'react-router-dom';
import './index.css'

const textoOpcoes = [
    {nome1: 'HOME', link:'/'},
    {nome1: 'PRODUTOS',link:'/produtos'},
    {nome1: 'CONTATO',link:'/contato'},
    {nome1: 'RECEITAS',link:'/receitas'},
    {nome1: 'AJUDA',link:'/ajuda'}
]

const icones = [sacola,perfil]

function Header(){
    return(

        <div>
            <div className='separador-nav'>
                <ul className='opcoes'>
                    { textoOpcoes.map( (texto)=> (
                    <li className='opcao'>
                        <Link to={texto.link}>{texto.nome1}</Link>
                    </li>
                    ) ) }
                </ul>
                <input placeholder='PROCURE AQUI' className='input'/>
                
                <ul className='icones'>
                    { icones.map( (icone) => (
                    <li className='icone'><img src={icone} alt='icones'></img></li>
                    ))}
                </ul>
                </div>
          </div>
    )
}
export default Header;