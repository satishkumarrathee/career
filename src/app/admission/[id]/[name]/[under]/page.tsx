import Data from "@/app/utils/data.json";
import BottomMatter from "@/app/components/BottomMatter";

type Params = {
  under: string;
};

type Item = {
  id: string;
  name: string;
};

type Category = {
  category: Item[];
};

type DataType = {
  category: Category[];
};


const StaticData = ({ params }: { params: Params }) => {
  const { under } = params;
  const filteredName = Data.flatMap((cat) =>
    cat.category.flatMap((item) => item.category)
  ).filter((item) => item.id === under);

  if (filteredName.length === 0) {
    return <div>No matching course found</div>;
  }

  return <BottomMatter courses={filteredName[0].name} category={filteredName[0].category} />;
};

export default StaticData;


export function generateStaticParams() {

  return Data.flatMap((item: any) =>
    item.category.flatMap((data: any) =>
      data.category.map((categoryItem: any) => ({
        id: item.id?.toString(),
        name: data.id?.toString(),
        under: categoryItem.id?.toString(),
      }))
    )
  );
}

export function generateMetadata({ params }: any) {
  const { under } = params;
  const siteURL = 'https://careerdefiner.com';
  const filteredName = Data.flatMap((cat: any) =>
    cat.category.flatMap((item: any) => item.category)
  ).filter((item: any) => item.id === under);

  return {
    title: `Best ${filteredName[0].name} in India`,
    description: `Best ${filteredName[0].name} in India`,
    alternates: {
      canonical: `${siteURL}/admission/${params.id}/${params.name}/${under}`,
    },
  };
}
