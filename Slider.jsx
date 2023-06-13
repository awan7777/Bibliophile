import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const buttonStyle = {
  width: "30px",
  background: "none",
  border: "0px",
  color: "white",
};
const properties = {
  prevArrow: (
    <button style={{ ...buttonStyle }}>
      <IoIosArrowBack size={24} />
    </button>
  ),
  nextArrow: (
    <button style={{ ...buttonStyle }}>
      <IoIosArrowForward size={24} />
    </button>
  ),
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "500px",
  borderRadius: "15px",
  
};
const slideImages = [
  {
    url: "https://www.pixelstalk.net/wp-content/uploads/2016/06/Book-Wallpapers-HD.jpg",
  },
  {
    url: "https://www.pixelstalk.net/wp-content/uploads/2016/06/Free-Photos-Book-Wallpapers-HD.jpg",
  },
  {
    url: "https://wallpapercave.com/wp/wp5730490.jpg",
  },
  {
    url: "https://th.bing.com/th/id/OIP.vS1k8xd4mp8kYc0psdQD8AHaEr?pid=ImgDet&rs=1",
  },
  
];

function Slider() {
  return (
    <div className="flex justify-center">
      <div className="w-4/5 pt-12">
        <Slide {...properties} transitionDuration={500}>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
              ></div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
}

export default Slider;
