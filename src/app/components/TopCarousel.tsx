"use client";
import Link from "next/link";
import { Carousel, Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from 'axios';
import toast from 'react-hot-toast';

const TopCarousel = () => {

  const [bannerData, setBannerData] = useState<any[]>([]);

    useEffect(() => {
        axios.get('/api/banner')
            .then((response) => {
              setBannerData(response.data.data);
            })
            .catch((error: any) => {
                const errorMessage = error.response ? error.response.data.message : error.message;
                toast.error(errorMessage);
            });
    }, []);
  return (
    <Carousel id="DisplayNone">
      {bannerData.map((item) => (
<Carousel.Item key={item.title}>
          <Link href={"/form"}>
            <Image src={item.imgUrl} alt={item.title} fluid />
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
export default TopCarousel;
