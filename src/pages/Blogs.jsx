import { useLoaderData, useNavigation } from "react-router-dom";
import Blog from "../Components/Blog";
import BeatLoader from "react-spinners/ClipLoader";


const Blogs = () => {

    const allPost = useLoaderData();
    const navigation = useNavigation();

    return (
        <div className="p-6 min-h-[70vh]">
            {
                navigation.state==="loading"? <div className="flex justify-center"><BeatLoader></BeatLoader></div>:
                <div className="grid grid-cols-6 gap-6">
            {
                allPost.map(post=> <Blog key={post.id} post={post}></Blog>)
            }
            </div>
            }
        </div>
    );
};

export default Blogs;