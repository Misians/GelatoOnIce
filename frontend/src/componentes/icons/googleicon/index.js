import './index.css';
import imagemgoogle from '../../../imagens/Google.png';

function GoogleIcon(){
    return(
        <div className='pagina'>
            <div>
                <div>
                    <div className='botao'>
                        <div className='banner_img'>
                        <a href='' className='bot-text'>logar com </a> <img 
                        className='imageboe'  
                        src={imagemgoogle} 
                        alt='aa'
                        width={20}
                        ></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default GoogleIcon;
