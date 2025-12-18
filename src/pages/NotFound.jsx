import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-primary text-center px-6">
            <h1 className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accentPurple to-accentCyan">404</h1>
            <h2 className="text-3xl font-bold mt-4 mb-8">Page Not Found</h2>
            <p className="text-textMuted max-w-md mb-8">
                The page you are looking for doesn't exist or has been moved.
            </p>
            <Link to="/">
                <Button>Go Back Home</Button>
            </Link>
        </div>
    );
};
export default NotFound;
