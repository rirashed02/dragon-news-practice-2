import { useLoaderData, useParams } from "react-router-dom";
import NewsCart from "../newsCart/NewsCart";

const Category = () => {
    // dynamic
    const {id} = useParams()
    const categoriesNews = useLoaderData()
    return (
        <div> 
            {id && <h2 className="text-white bg-black">News {categoriesNews.length}</h2>}
            {categoriesNews.map(news => <NewsCart key={news._id} news={news}></NewsCart>)}
        </div>
    );
};

export default Category;