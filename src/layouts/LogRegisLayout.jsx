
import NavigationBar from '../pages/shared/navigation/NavigationBar';
import { Outlet } from 'react-router-dom';

const LogRegisLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default LogRegisLayout;