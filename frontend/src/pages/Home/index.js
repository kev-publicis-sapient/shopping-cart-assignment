import HomeBanner from "components/Home/HomeBanner";
import OffersCarousel from "components/Home/Carousel";
import "styles/home.css";
import { useEffect, useState } from "react";
import { API_URL } from "utils/constants";

const Home = () => {
  const [banners, setBanners] = useState([]);
  const [carouselSlides, setCarouselSlides] = useState([]);

  const fetchData = async () => {
    const carouselSlides = await (await fetch(`${API_URL}/banners`)).json();
    const categories = await (await fetch(`${API_URL}/categories`)).json();
    setCarouselSlides(carouselSlides);
    setBanners(categories);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="home_wrapper">
      <OffersCarousel slides={carouselSlides} />
      {banners
        ?.filter((banner) => !!banner.enabled)
        .map((banner) => {
          return (
            <HomeBanner
              key={banner.id}
              imageURL={banner.imageUrl}
              heading={banner.name}
              subheading={banner.description}
              buttonText={`Explore ${banner.key}`}
            />
          );
        })}
    </div>
  );
};

export default Home;
