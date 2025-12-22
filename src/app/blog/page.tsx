"use client";
import { Col, Container, Row, Image, Form, InputGroup } from "react-bootstrap";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
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

const Blog: React.FC = () => {
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

  const [allBlogs, setAllBlogs] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    axios
      .get("/api/blog")
      .then((response) => {
        const sortedData = response.data.data.sort(
          (a: any, b: any) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setAllBlogs(sortedData);
      })
      .catch((error: any) => {
        const errorMessage = error.response?.data?.message ?? error.message;
        toast.error(errorMessage);
      });
  }, []);

  const filteredBlogs = useMemo(() => {
    if (!searchTerm.trim()) return allBlogs;
    const q = searchTerm.trim().toLowerCase();
    return allBlogs.filter((item) => {
      const name = (item.name ?? "").toLowerCase();
      const title = (item.title ?? "").toLowerCase();
      const url = (item.customUrl ?? "").toLowerCase();
      return name.includes(q) || title.includes(q) || url.includes(q);
    });
  }, [allBlogs, searchTerm]);

  return (
    <>
      {/* ======= BLOG HEADER SECTION ======= */}
      <section id="blog" className="bg-dark text-light py-4">
        <Container>
          <Row className="align-items-center gy-3">
            <Col xs={12} md={6}>
              <div>
                <h1 className="display-5 fw-bold mb-0">BLOG</h1>
                <hr className="border-light my-2" />
                <p className="fs-6 fw-bold mb-0">HOME / BLOG</p>
              </div>
            </Col>

            {/* Search box right side */}
            <Col xs={12} md={6} className="text-md-end">
              <InputGroup className="mt-3 mt-md-0 mx-md-0 mx-auto" style={{ maxWidth: "420px" }}>
                <Form.Control
                  placeholder="Search blogs by title or name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  aria-label="Search blogs"
                  className="shadow-sm"
                />
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ======= BLOG LIST SECTION ======= */}
      <section className="py-4">
        <Container>
          <Row className="g-4">
            {filteredBlogs.length === 0 ? (
              <Col xs={12} className="text-center py-5">
                <p className="text-muted fs-5">
                  {allBlogs.length === 0
                    ? "Loading blogs..."
                    : `No blogs found for "${searchTerm}"`}
                </p>
              </Col>
            ) : (
              filteredBlogs.map((item) => (
                <Col
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  key={item.id ?? item._id ?? item.customUrl}
                >
                  <Link
                    href={`/blog/${item.customUrl}`}
                    className="text-decoration-none text-dark"
                  >
                    <div className="card h-100 shadow-sm border-0">
                      <div className="ratio ratio-16x9">
                        <Image
                          src={item.imgUrl}
                          alt={item.name}
                          className="card-img-cover"
                          fluid
                        />
                      </div>

                      <div className="card-body">
                        <h6 className="fw-bold text-primary mb-2">
                          {item.name}
                        </h6>
                        <p className="text-secondary small mb-2">
                          {formatDate(item.createdAt)}
                        </p>
                        <p className="fw-semibold text-dark mb-3">
                          {item.title}
                        </p>

                        {/* Social Share Buttons */}
                        <div className="d-flex align-items-center">
                          <TwitterShareButton
                            url={`https://careerdefiner.com/blog/${item.customUrl}`}
                            title={item.title}
                          >
                            <TwitterIcon size={28} round />
                          </TwitterShareButton>

                          <FacebookShareButton
                            url={`https://careerdefiner.com/blog/${item.customUrl}`}
                            quote={item.title}
                          >
                            <FacebookIcon
                              size={28}
                              round
                              className="mx-2"
                            />
                          </FacebookShareButton>

                          <LinkedinShareButton
                            url={`https://careerdefiner.com/blog/${item.customUrl}`}
                            title={item.title}
                          >
                            <LinkedinIcon size={28} round />
                          </LinkedinShareButton>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Blog;
