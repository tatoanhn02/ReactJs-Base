import { Link } from "react-router-dom";
export const PageNotFound = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl text-lightgrey">Page Not Found</h1>
      <div className="text-lg py-3">I'm sorry</div>
      <Link className="truncate" to="">
        <button>Back Home</button>
      </Link>
    </div>
  );
};
