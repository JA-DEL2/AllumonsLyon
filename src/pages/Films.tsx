import React from "react";
import Slider from "react-slick";

const Films: React.FC = () => {

    const videoIds = [
        "zkdkPigEMGA",
        "s1oXVUGYShM",
        "yvC_xrDqB3s",
        "Uwkp0tREK0w",
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-4">
            <div className="w-full max-w-6xl">
                <h2 className="text-3xl font-bold mb-6 text-center text-white">
                    Archives des frères Lumière
                </h2>
                <Slider {...settings}>
                    {videoIds.map((id, index) => (
                        <div key={index} className="px-2">
                            <div className="bg-white rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105">
                                <iframe
                                    className="w-full aspect-video"
                                    src={`https://www.youtube.com/embed/${id}`}
                                    title={`Archive video ${index + 1}`}
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>

    );
};

export default Films;
