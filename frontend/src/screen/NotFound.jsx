import { Link } from 'react-router-dom';
import { token } from '../utils/credentials';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
      <p className="text-gray-600 mb-4">Oops! The page you are looking for might be in another castle.</p>
      <img
        src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif"
        alt="Mario 404"
        className="max-w-full h-auto mb-4"
      />
      <p className="text-gray-600">
        <Link to={`${token?"/users":"/"}`} className="text-blue-500 hover:underline">Go back to home</Link>
      </p>
    </div>
  )
}

export default NotFound
