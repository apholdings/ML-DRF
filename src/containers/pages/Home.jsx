import BlogCategories from "components/blog/BlogCategories";
import BlogList from "components/blog/BlogList";
import FullWidthLayout from "hocs/layouts/FullWidthLayout"
import { useEffect } from "react";
import { connect } from "react-redux";
import { get_blog_list, get_blog_list_page } from "redux/actions/blog";
import { get_categories } from "redux/actions/categories";

function Home({
    categories,
    get_categories,
    get_blog_list,
    get_blog_list_page,
    blog_list,
}) {
    useEffect(() => {
        const fetchData = async () => {
            categories ? <></> : get_categories();
            get_blog_list();
        };
        fetchData();
    }, []);

    return (
        <FullWidthLayout>
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="text-center">
                    <p className="mt-1 text-2xl font-gilroy-black dark:text-dark-txt text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
                        Inteligencia Artificial con Python
                    </p>
                    <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500 font-gilroy-regular">
                        Algoritmos de machine learning y deep learning con
                        ejemplos.
                    </p>
                </div>
            </div>

            <BlogCategories />
            <BlogList
                get_blog_list_page={get_blog_list_page}
                blog_list={blog_list}
            />
        </FullWidthLayout>
    );
}
const mapStateToProps=state=>({
  categories: state.categories.categories,
  blog_list: state.blog.blog_list
})
export default connect(mapStateToProps, {
    get_categories,
    get_blog_list,
    get_blog_list_page,
})(Home);
