import './index.css';
import bolo from '../../../imagens/icon-nav/bolo.svg'
import taco from '../../../imagens/icon-nav/taco.svg'
import pao from '../../../imagens/icon-nav/pao.svg'
import sorvete from '../../../imagens/icon-nav/sorvete.svg'

function NavIcons(){

    const menus = [
        {nome: 'SORVETES',icon:sorvete},
        {nome: 'TORTAS',icon:bolo},
        {nome: 'VEGANO',icon:taco},
        {nome: 'MASSAS',icon:pao},
        {nome: 'PICOLÉS',icon:pao},
        {nome: 'PARA PRESENTEAR',icon:bolo}
    ]
    return(
        <div className='navbar'>
            <ul className='icones1'>
                {
                    menus.map(menu => 
                        <li className='lista'>
                            <button className='bottom'>
                            <img src={menu.icon} alt='aaaa' className='icones_img1'></img>
                            <p className='nome'>{menu.nome}</p>
                        </button>
                        </li>
                    )
                }
            </ul>
      </div>
    );
}
export default NavIcons;
