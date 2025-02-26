'use client';  // Make sure to add this directive

import { useEffect, useState } from "react";
import axios from 'axios';
import BlogPage from "@/app/components/BlogPage";

type Params = {
  params: {
    id: string;
  };
};

type BlogData = {
  customUrl: string;
  name: string;
  imgUrl: string;
  title: string;
  message: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;
};

const Dynamic = ({ params }: Params) => {
  const [blogData, setBlogData] = useState<BlogData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get('/api/blog')
      .then((response) => {
        setBlogData(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        const errorMessage = error.response ? error.response.data.message : error.message;
        console.error(errorMessage);
        setLoading(false);  // Stop loading even on error
      });
  }, []);

  const { id } = params;
  const UserData = blogData.filter((item) => item.customUrl === id);

  if (loading) {
    return <h1 className="text-center my-5">Loading...</h1>;
  }

  if (UserData.length === 0) {
    return <h1 className="text-center my-5" >Blog post not found</h1>;
  }

  return (
    <BlogPage 
      name={UserData[0].name} 
      imgUrl={UserData[0].imgUrl} 
      title={UserData[0].title} 
      message={UserData[0].message} 
    />
  );
}

export default Dynamic;

// Uncomment and fix this if needed for static params generation
// export async function generateStaticParams() {
//   const response = await axios.get('/api/blog');
//   const blogData = response.data.data;

//   return blogData.map((item: BlogData) => (
//     { id: item.customUrl }  // Ensure to use the correct identifier
//   ));
// }

// export async function generateMetadata({ params }: Params) {
//   const { id } = params;
//   const response = await axios.get('/api/blog');
//   const blogData: BlogData[] = response.data.data;
//   const UserData = blogData.filter((item: BlogData) => item.customUrl === id);

//   if (UserData.length === 0) {
//     return {
//       title: 'Blog post not found',
//       description: 'No description available',
//       keywords: ''
//     };
//   }
// }