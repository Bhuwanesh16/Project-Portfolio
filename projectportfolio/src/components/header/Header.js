import banner from '../../assets/banner.png'
import banner1 from '../../assets/banner1.png'
import banner2 from '../../assets/banner2.png'
export default function Header(){
    return (
        <div className="Banner-Section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="box">
                            <img className='w-100 transition' src={banner} alt='banner'/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="box">
                            <img className='w-100 transition' src={banner1} alt='banner1'/>
                        </div>
                    </div>
                    <div className="col">
                        <div className="box">
                            <img className='w-100 transition' src={banner2} alt='banner2'/>
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
    );
}