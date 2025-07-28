"use client";
import { Col, Container, Row, Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from 'axios';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";
import toast from "react-hot-toast";
import Link from "next/link";

const Blog = () => {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleString("en-GB", {
      timeZone: "Asia/Kolkata",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour12: true,
    });
  };


  const [blogData, setBlogData] = useState<any[]>([]);

  useEffect(() => {
    axios.get('/api/blog')
      .then((response) => {
        const sortedData = response.data.data.sort(
          (a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setBlogData(sortedData);
      })
      .catch((error: any) => {
        const errorMessage = error.response ? error.response.data.message : error.message;
        toast.error(errorMessage);
      });
  }, [blogData]);

  return (
    <>
      <div id="blog">
        <Container>
          <Row>
            <Col md={2}>
              <div className="my-3 text-light">
                <div>
                  <p style={{ fontSize: "40px" }}>BLOG</p>
                </div>
                <hr />
                <div>
                  <p className="fs-6 fw-light text-light fw-bold">
                    HOME / BLOG
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row>
            {blogData.map((item) => (
              <Col md={3} key={item.id} className="mb-3">
                <Link href={`/blog/${item.customUrl}`}>
                  <div className="border rounded h-100 p-3 my-2">
                    <div className="d-flex justify-content-center align-items-center">
                      <Image
                        src={item.imgUrl}
                        alt={item.name}
                        fluid
                      />
                    </div>

                    <div>
                      <p className="fw-bold p-1 m-1 bg-primary my-2 text-light">
                        {item.name}
                      </p>
                    </div>
                    <div className="m-1  text-primary rounded d-inline-block">
                      {item.title}
                    </div>
                    <div className="d-flex justify-content-between my-2">
                      <div className="fw-bold">
                        <p style={{ fontSize: "14px" }}>
                          {formatDate(item.createdAt)}
                        </p>
                      </div>
                      {/* <div className="fw-bold">{item.read}</div> */}
                    </div>
                    <TwitterShareButton
                      url={`careerdefiner.com/blog/${item.customUrl}`}
                      title={item.title}>
                      <TwitterIcon size={28} color="primary" round />
                    </TwitterShareButton>
                    <FacebookShareButton
                      url={`careerdefiner.com/blog/${item.customUrl}`}
                      quote={item.title}
                    >
                      <FacebookIcon size={28} className="mx-2" color="primary" round />
                    </FacebookShareButton>
                    <LinkedinShareButton
                      url={`careerdefiner.com/blog/${item.customUrl}`}

                      title={item.title}
                    >
                      <LinkedinIcon size={28} color="primary" round />
                    </LinkedinShareButton>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Blog;





