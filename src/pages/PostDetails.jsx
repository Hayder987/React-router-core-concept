import { Link, useLoaderData, useNavigate } from "react-router-dom";



const PostDetails = () => {

   const data = useLoaderData();
   const {id, title,body} = data;

   const navigate = useNavigate();
   const backBtn =()=>{
    navigate(-1)
   }

    return (
        <div className="p-36 h-[70vh]">
            <div className="">
              <p className="text-xl">User: {id}</p>
              <h1 className="text-3xl">Title: {title}</h1> 
              <h2 className="text-2xl">Description: {body}</h2>
            </div>  
            <div className="mt-6">
                <Link><button onClick={backBtn} className="py-2 px-6 border-2">Back</button></Link>
            </div>
            <div className="mt-3">
               <Link to="/">Back To Home...</Link>
            </div>
        </div>
    );
};

export default PostDetails;