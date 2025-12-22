"use client";
import { Col, Container, Row, Image } from "react-bootstrap";
import { useState } from "react";

interface BlogPageProps {
  name: string;
  title: string | undefined;
  message: string | TrustedHTML;
  imgUrl: string | undefined;
}

const BlogPage: React.FC<BlogPageProps> = ({ name, imgUrl, title, message }) => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const categories = [
    "Career Guidance",
    "Exam Preparation",
    "Admission Process",
    "Study Abroad",
    "Job Opportunities",
    "Skill Development",
    "Success Stories",
  ];

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col lg={10} xl={8}>
          {/* Blog Header */}
          <div className="text-center mb-5">
            <h1 className="fw-bold mb-4">{title}</h1>

            <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center gap-3 mb-4">
              <div className="d-flex align-items-center gap-3">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold"
                  style={{
                    width: "50px",
                    height: "50px",
                    background: "linear-gradient(90deg, #3b82f6, #9333ea)",
                  }}
                >
                  {name?.charAt(0) || "A"}
                </div>
                <div>
                  <p className="fw-semibold mb-0 text-dark">{name}</p>
                  <p className="text-muted small mb-0">Author</p>
                </div>
              </div>

              <div className="d-none d-sm-block border-start border-2 border-secondary mx-3" style={{ height: "40px" }}></div>

              <div className="text-center">
                <p className="text-muted small mb-0">Published on</p>
                <p className="fw-medium mb-0">
                  {new Date().toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          {imgUrl && (
            <div className="mb-5 rounded overflow-hidden shadow-lg">
              <Image
                src={imgUrl}
                alt={name}
                fluid
                className="w-100"
                style={{
                  objectFit: "cover",
                  maxHeight: "450px",
                }}
              />
            </div>
          )}

          {/* Blog Content */}
          <div className="bg-white rounded p-4 shadow-sm border">
            <div
              style={{ textAlign: "justify", lineHeight: "1.8" }}
              dangerouslySetInnerHTML={{ __html: message }}
            />
          </div>

          {/* Blog Footer */}
          {/* <div className="mt-5 pt-4 border-top">
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
              <div className="d-flex align-items-center gap-3">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold"
                  style={{
                    width: "50px",
                    height: "50px",
                    background: "linear-gradient(90deg, #3b82f6, #9333ea)",
                  }}
                >
                  {name?.charAt(0) || "A"}
                </div>
                <div>
                  <p className="fw-semibold mb-0 text-dark">{name}</p>
                  <p className="text-muted small mb-0">
                    Content Creator at CareerDefiner
                  </p>
                </div>
              </div>

              <div className="d-flex flex-wrap justify-content-center gap-2">
                <button className="btn btn-primary d-flex align-items-center gap-2 shadow-sm">
                  👍 <span>Like</span>
                </button>
                <button className="btn btn-light d-flex align-items-center gap-2 shadow-sm">
                  💬 <span>Comment</span>
                </button>
                <button className="btn btn-success d-flex align-items-center gap-2 shadow-sm">
                  🔄 <span>Share</span>
                </button>
              </div>
            </div>
          </div> */}

          {/* Related Articles */}
          {/* <div className="mt-5">
            <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center justify-content-between mb-4 gap-3">
              <div>
                <h3 className="fw-bold mb-1">
                  More from {selectedCategory}
                </h3>
                <p className="text-muted mb-0">
                  Discover related content you might enjoy
                </p>
              </div>

              <div className="d-flex align-items-center gap-2">
                <span className="text-muted small fw-semibold">Filter by:</span>
                <select
                  className="form-select form-select-sm shadow-sm"
                  style={{ width: "200px" }}
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="All Categories">All Categories</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <Row className="g-4">
              {[1, 2, 3].map((item) => (
                <Col md={6} lg={4} key={item}>
                  <div className="bg-white rounded shadow-sm border overflow-hidden h-100">
                    <div
                      className="d-flex align-items-center justify-content-center text-white fw-bold position-relative"
                      style={{
                        height: "180px",
                        background: "linear-gradient(90deg, #3b82f6, #9333ea)",
                      }}
                    >
                      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-10"></div>
                      <span className="position-relative">{selectedCategory}</span>
                    </div>
                    <div className="p-3">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="badge bg-primary">{selectedCategory}</span>
                        <span className="text-muted small">5 min read</span>
                      </div>
                      <h5 className="fw-bold mb-2">
                        Related Article Title {item} in {selectedCategory}
                      </h5>
                      <p className="text-muted small mb-3">
                        Discover amazing insights and tips about{" "}
                        {selectedCategory.toLowerCase()} that will help you in
                        your career journey.
                      </p>
                      <button className="btn btn-link text-decoration-none p-0">
                        Read Full Article →
                      </button>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div> */}
        </Col>
      </Row>
    </Container>
  );
};

export default BlogPage;
