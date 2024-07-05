import Image from "next/image";
import Image_1 from "../assets/Image_1.jpg";
import Image_2 from "../assets/Image_2.jpg";
import Image_3 from "../assets/Image_3.jpg";
import Image_4 from "../assets/Image_4.jpg";
import { useEffect, useState } from "react";
const data = [
  {
    name: "Zarak Dev",
    img: Image_1,
    title: "Full stack developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos magnam eligendi placeat animi? Consectetur aut similique asperiores praesentium accusamus, quis tempora officiis dignissimos nulla repellat, cumque fugiat provident maiores corrupti.",
    link1: "www.zarakkhan.vercel.app",
    link2: "www.zarakkhan.vercel.app",
  },
  {
    name: "Zarak Dev",
    img: Image_2,
    title: "Mern Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos magnam eligendi placeat animi? Consectetur aut similique asperiores praesentium accusamus, quis tempora officiis dignissimos nulla repellat, cumque fugiat provident maiores corrupti.",
    link1: "www.zarakkhan.vercel.app",
    link2: "www.zarakkhan.vercel.app",
  },
  {
    name: "Zarak Dev",
    img: Image_3,
    title: "ML Engineer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos magnam eligendi placeat animi? Consectetur aut similique asperiores praesentium accusamus, quis tempora officiis dignissimos nulla repellat, cumque fugiat provident maiores corrupti.",
    link1: "www.zarakkhan.vercel.app",
    link2: "www.zarakkhan.vercel.app",
  },
  {
    name: "Zarak Dev",
    img: Image_4,
    title: "Software Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos magnam eligendi placeat animi? Consectetur aut similique asperiores praesentium accusamus, quis tempora officiis dignissimos nulla repellat, cumque fugiat provident maiores corrupti.",
    link1: "www.zarakkhan.vercel.app",
    link2: "www.zarakkhan.vercel.app",
  },
];

const Carousel = () => {
  const [gallery, SetGallery] = useState([Image_2, Image_3, Image_4,Image_1]);
  const [active, setActive] = useState(true);
  const [active_content, setActive_content] = useState(true);
  const [Carousel, setCarousel] = useState({
    name: data[0].name,
    img: data[0].img,
    title: data[0].title,
    description: data[0].description,
    link1: data[0].link1,
    link2: data[0].link2,
  });

  const changeSlides = (src) => {
    data.map((item) => {
      if (item.img.src === src.src) {
        setActive(true);
        setActive_content(true);
        setCarousel({
          name: item.name,
          img: item.img,
          title: item.title,
          description: item.description,
          link1: item.link1,
          link2: item.link2,
        });
        const filter_gallery = gallery.filter((item) => item.src != src.src);

        SetGallery([...filter_gallery, src]);
      }
    });
  };
  const stateCarousel = (states) => {
    if (states === 0) {
      let temp = gallery;
      const secondLastIndex = temp.length - 2;
      let removeElement = temp.splice(secondLastIndex, 1)[0];

      data.map((item) => {
        if (item.img.src === removeElement.src) {
          setActive(true);
          setActive_content(true);
          setCarousel({
            name: item.name,
            img: item.img,
            title: item.title,
            description: item.description,
            link1: item.link1,
            link2: item.link2,
          });
        }
      });
      let lastelement = temp.pop();
      temp.unshift(lastelement);
      temp.push(removeElement);
      SetGallery([...temp]);
    } else {
      let temp = gallery;
      let removeElement = temp.splice(0, 1);
      data.map((item) => {
        if (item.img.src === removeElement[0].src) {
          setActive(true);
          setActive_content(true);
          setCarousel({
            name: item.name,
            img: item.img,
            title: item.title,
            description: item.description,
            link1: item.link1,
            link2: item.link2,
          });
        }
      });
      temp.push(...removeElement);
      SetGallery([...temp]);
    }
  };
  useEffect(() => {
    if (active && active_content) {
      const timeout = setInterval(() => {
        setActive(false);
        setActive_content(false);
      }, 1000);
      return () => clearInterval(timeout);
    }
  }, [active, active_content]);
  return (
    <>
      <header className="carousel">
        <div className={`image  ${active ? "active" : ""} `}>
          <Image src={Carousel.img} alt="no image" />
        </div>
        <div className={`contant  ${active_content ? "active_content" : ""} `}>
          <div className="name text-xl">{Carousel.name}</div>
          <div className="title text-5xl mb-4">
            Design Slide <br />
            <span className="text-[#db6838;]">{Carousel.title}</span>
          </div>
          <p className="mb-3 w-[450px] text-sm">{Carousel.description}</p>
          <div className="button flex gap-4">
            <button className="border border-1 border-white py-2 px-[8vh] font-bold">
              See More
            </button>
            <button className="border border-1 border-white py-2 px-[8vh] font-bold bg-white text-black">
              Subscribe
            </button>
          </div>
        </div>
        <div className="navigation-button  absolute text-white bottom-[150px] left-[280px] flex gap-6 text-2xl">
          <div
            className="previous bg-[#3c4241] py-2 px-4 rounded-full cursor-pointer hover:bg-[#3c4241bd]"
            onClick={() => stateCarousel(0)}
          >
            &lt;
          </div>
          <div
            className="next bg-[#3c4241] py-2 px-4 rounded-full cursor-pointer hover:bg-[#3c4241bd]"
            onClick={() => stateCarousel(1)}
          >
            {" "}
            &gt;
          </div>
        </div>

        <div className="gallery absolute bottom-[70px] left-[750px] flex  gap-7 ">
          {gallery.map((items, index) => {
            return (
              <div
                className="Image-gallery  h-[250px] w-[150px] cursor-pointer"
                key={index}
                onClick={() => changeSlides(items)}
              >
                <Image src={items} />
              </div>
            );
          })}
        </div>
      </header>
    </>
  );
};

export default Carousel;
