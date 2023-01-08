import './index.css';
import fotobanner from '../../imagens/banner/PASSANDO.png';

function Banner(){
    return(
        <div className='pagina'>
            <div className='carousel'>
                <div className='container' id='img'>
                    <div className='banner_img'>
                        <img className='imageboe'  src={fotobanner} alt='aa'></img>
                    </div>
                    {/* <div>
                        <img className='imageboe' src="https://i.imgur.com/3aIutJi.png" alt="js" />
                    </div>
                    <div>
                        <img className='imageboe' src="https://i.imgur.com/rWtGeQ0.png" alt="java" />
                    </div>
                    <div>
                        <img className='imageboe' src="https://i.imgur.com/8946bSF.png" alt="python"/>
                    </div> */}
                </div>
            </div>
        </div>
    );

}
export default Banner;
