import { Col, Container, Row } from "react-bootstrap";
import Heading from "@/app/components/Heading";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import ModelTrainingIcon from "@mui/icons-material/ModelTraining";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ModeFanOffIcon from "@mui/icons-material/ModeFanOff";
import FlutterDashIcon from "@mui/icons-material/FlutterDash";
import PeopleIcon from "@mui/icons-material/People";
import AssessmentIcon from "@mui/icons-material/Assessment";
import FlagIcon from "@mui/icons-material/Flag";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import { FaRocket, FaUsers, FaLightbulb, FaGraduationCap, FaBriefcase, FaGlobe, FaChartLine, FaHandshake } from "react-icons/fa";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <div id="about" className="bg-gradient-to-r from-blue-600 to-purple-700 py-16">
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <div className="text-white">
                
                <div className="w-24 h-1 bg-yellow-400 mx-auto mb-4"></div>
                <p className="fs-5 text-blue-100">
                  HOME / ABOUT
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Main Content */}
      <div className="py-16 bg-gray-50">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="text-center mb-12">
                <Heading title="ABOUT " name="CAREER DEFINER" />
                <div className="grid grid-cols-1 gap-6 text-lg text-gray-700 leading-relaxed">
                  <p className="text-justify">
                    <span className="font-semibold text-blue-600">Career Definer</span> is a cutting-edge search engine designed for
                    the new generation, offering a comprehensive range of services
                    from course selection to confirmation of admission, all under
                    one roof. Our mission is to redefine how individuals navigate
                    their career paths by providing advanced tools and support
                    tailored to the dynamic career market.
                  </p>
                  <p className="text-justify">
                    We have been active in the education market since 2001,
                    specializing in student mobilization and providing leads to
                    universities. Initially, our operations were offline. However,
                    recognizing the evolving needs of the current market, we have
                    developed this advanced search engine. This platform allows
                    students to directly connect with universities without
                    incurring any counselling fees.
                  </p>
                  <p className="text-justify">
                    Explore our diverse range of resources, engage with our
                    supportive community, and take the first step towards
                    realizing your dreams. Together, let's pave the way for a
                    brighter future filled with endless possibilities. Career
                    Definer also collaborates with universities and schools,
                    organizing seminars and student interaction events to enhance
                    student outreach.
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          {/* Vision Mission Objective Cards */}
          <Row className="mb-16">
            <Col lg={4} className="mb-6">
              <div className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100 h-full group">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <RemoveRedEyeIcon className="text-4xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To redefine the way individuals navigate their career paths, providing them with the tools and support they need to succeed in today's dynamic job market.
                </p>
              </div>
            </Col>
            <Col lg={4} className="mb-6">
              <div className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border border-green-100 h-full group">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FlagIcon className="text-4xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Empowering students and job seekers to shape their future and achieve their career aspirations through innovative solutions and expert guidance.
                </p>
              </div>
            </Col>
            <Col lg={4} className="mb-6">
              <div className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border border-purple-100 h-full group">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  <EmojiObjectsIcon className="text-4xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Objective</h3>
                <div className="text-gray-600 text-lg leading-relaxed space-y-2">
                  <p>• Empower young individuals to choose their career path wisely</p>
                  <p>• Succeed in today's dynamic education and job market</p>
                  <p>• Provide accessible career guidance to all</p>
                </div>
              </div>
            </Col>
          </Row>

          {/* What We Offer Section */}
          <Row className="mb-16">
            <Col lg={12} className="text-center mb-12">
              <Heading title="WHAT " name="WE OFFER" />
            </Col>
            <Col lg={4} className="mb-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-200 h-full group">
                <div className="flex items-center justify-center w-20 h-20 bg-white rounded-2xl text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <CastForEducationIcon className="text-4xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Education</h3>
                <p className="text-gray-600 leading-relaxed">
                  Discover a diverse array of courses tailored to enrich your expertise and understanding across different domains. Whether you seek to progress in your current vocation or explore new opportunities.
                </p>
              </div>
            </Col>
            <Col lg={4} className="mb-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-green-200 h-full group">
                <div className="flex items-center justify-center w-20 h-20 bg-white rounded-2xl text-green-600 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <ModelTrainingIcon className="text-4xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Career Guidance</h3>
                <p className="text-gray-600 leading-relaxed">
                  Navigate your career path with confidence through our expert advice and resources. From resume writing to interview strategies, we equip you to stand out in today's competitive job market.
                </p>
              </div>
            </Col>
            <Col lg={4} className="mb-6">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-purple-200 h-full group">
                <div className="flex items-center justify-center w-20 h-20 bg-white rounded-2xl text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <WorkOutlineIcon className="text-4xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Job Opportunities</h3>
                <p className="text-gray-600 leading-relaxed">
                  Discover exciting job openings across industries and locations. Our platform connects you with employers seeking talented individuals. Find the perfect fit for your career aspirations.
                </p>
              </div>
            </Col>
          </Row>

          {/* Why Choose Us Section */}
          <Row>
            <Col lg={12} className="text-center mb-12">
              <Heading title="WHY CHOOSE " name="CAREER DEFINER" />
            </Col>
            <Col lg={3} md={6} className="mb-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100 h-full group text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl text-white mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
                  <ModeFanOffIcon className="text-3xl" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Flexibility</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Experience the freedom to tailor your personalized and flexible learning experience with our dynamic online platform.
                </p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100 h-full group text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl text-white mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
                  <FlutterDashIcon className="text-3xl" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Expertise</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Benefit from the insights and guidance of industry experts passionate about helping you succeed in your career endeavors.
                </p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100 h-full group text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl text-white mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
                  <PeopleIcon className="text-3xl" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Community</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Join a supportive community of learners and professionals who share your aspirations and offer valuable networking opportunities.
                </p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100 h-full group text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl text-white mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
                  <AssessmentIcon className="text-3xl" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Accessibility</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We believe education and career advancement should be accessible to all through affordable and inclusive resources.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 py-16">
        <Container>
          <Row className="text-center">
            <Col lg={3} md={6} className="mb-6">
              <div className="text-white">
                <div className="text-4xl font-bold mb-2">20+</div>
                <div className="text-blue-100 text-lg">Years Experience</div>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-6">
              <div className="text-white">
                <div className="text-4xl font-bold mb-2">90K+</div>
                <div className="text-blue-100 text-lg">Students Helped</div>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-6">
              <div className="text-white">
                <div className="text-4xl font-bold mb-2">25K+</div>
                <div className="text-blue-100 text-lg">Admissions</div>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-6">
              <div className="text-white">
                <div className="text-4xl font-bold mb-2">130+</div>
                <div className="text-blue-100 text-lg">Expert Counsellors</div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About;