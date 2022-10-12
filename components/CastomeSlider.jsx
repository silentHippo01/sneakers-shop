import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CastomeSlider = ({ items }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    console.log(items);
    return (
        <>
            <Slider>
                {
                    items.map((item) => (
                        item
                    ))
                }
            </Slider>
        </>
    );
};

export default Slider;
