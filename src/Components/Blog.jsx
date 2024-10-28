import { Link } from "react-router-dom";



const Blog = ({post}) => {

    const {id, title} = post;

    return (
        <div className="p-6 border-2 flex flex-col rounded-xl">
          <div className="flex-grow">
            <h2 className="text-xl ">User: {id}</h2>
            <h2 className="">Title: {title}</h2> 
          <div className="py-4">
          </div>
            <Link to={`/posts/${id}`}><span className="text-blue-600">ReadMore...</span></Link>
          </div>

        </div>
    );
};

export default Blog;