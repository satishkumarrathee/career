import URL from "@/app/utils/search.json";
import Link from "next/link";


interface FindCourseProps {
  search: string;
}

const FindCourse: React.FC<FindCourseProps> = ({ search }) => {
  const filteredCourses = URL.filter((item) => {
    const itemName = item.name.toLowerCase().replace(".", "");
    const searchTerm = search.toLowerCase();
    return itemName.includes(searchTerm);
  });

  console.log( filteredCourses, "filteredCourses");

  return (
    <div style={{ height: "100px", overflow: "hidden", marginTop: "10px" }}>
      {filteredCourses.map((item, index) => (
        <div key={index}>
          <Link href={`/${item.type}/${item.url}`}>
            <p className="text-primary text-center">{item.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FindCourse;
