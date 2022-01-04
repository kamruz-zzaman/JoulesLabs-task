import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Slide = ({ data }) => {
    return (
        <div>
            dfhgdrfzrhgds
        </div>
    )
};

export default Slide;

export async function getStaticProps() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
    const data = await res.json();
    return {
        props: { data }
    }
}