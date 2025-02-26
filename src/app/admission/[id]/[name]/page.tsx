import Data from '@/app/utils/data.json';
import BottomAdmissionPage from '@/app/components/BottomAdmissionPage';

const StaticData = ({params}: { params: { name: string } }) => {
    const {name} = params;
    const UserData = Data.flatMap(data => data.category.filter(item => item.id === name));

    // Check if userData is not empty before accessing its elements
    if (UserData.length > 0) {
        return ( 
            <BottomAdmissionPage  name={UserData[0].name} id={UserData[0].id} category={UserData[0].category} />
        );
    } else {
        // Handle case when userData is empty
        return <div>No data found</div>;
    }
}

export default StaticData;

export function generateStaticParams() {
    return Data.flatMap((item) =>
        item.category.map((categoryItem) => ({
            id: item.id?.toString(),
            name: categoryItem.id?.toString(),
        }))
    );
}

export function generateMetadata({ params }: any) {
    const siteURL = 'https://careerdefiner.com';
    const { name } = params;
    const UserData = Data.flatMap(data => data.category.filter(item => item.id === name));
    return {
      title: `Best ${UserData[0].name} in India`,
      description: `Best ${UserData[0].name} in India`,
      alternates: {
        canonical: `${siteURL}/admission/${params.id}/${name}`,
      },
    };
  }