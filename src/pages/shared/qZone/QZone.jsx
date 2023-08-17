import { Container } from 'react-bootstrap';
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'
import bg from '../../../assets/bg.png'
const QZone = () => {
    return (
        <Container>
            <div className='mb-5'>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
            <div>
                <img src={bg} alt="" />
            </div>
        </Container>
    );
};

export default QZone;