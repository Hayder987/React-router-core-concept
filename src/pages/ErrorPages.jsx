import { useRouteError } from "react-router-dom";



const ErrorPages = () => {
    const errors = useRouteError();
    const {status, error, statusText} = errors;
    console.log(error)
    return (
        <div className="flex justify-center items-center p-36">
            <div className="">
              <h1 className="text-5xl font-bold mb-3 text-center">{status}</h1>
              <h2 className="text-3xl font-bold mb-3 text-center">{statusText}</h2>
              <h3 className="mb-3 text-2xl font-bold text-center">{error.message || error.stack}</h3>
            </div>
        </div>
    );
};

export default ErrorPages;