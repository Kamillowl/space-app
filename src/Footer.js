import { useState , useEffect} from 'react';
import './Footer.scss';

function Footer() {
    const [rows, setRow] = useState([]);
    useEffect(() => {
        let arr = [];
        for (let i = 0; i < 50; i++) {
            arr.push(i);
        }
        setRow(arr)
    }, [])

    return (
        <footer>
            <div className='star-boxes'></div>
            {rows.map(() => {
                return <div className="circle-container">
                    <div className="circle"></div>
                </div>
            })
            }
        </footer>
    );
}

export default Footer;

