import Data from '@/app/utils/job.json'
import CareerForm from './CareerForm';
const Dynamic = ({ params }: any) => {
const userData = Data.flatMap(data => data.category.filter(item => item.id === params.name));
  return (
    <CareerForm category={params.name} description={userData[0].description} nameData={userData[0].type} skills={userData[0].skills} profile={params.id}/>
  );
}

export default Dynamic;

export function generateStaticParams() {
  return Data.flatMap((item) =>
    item.category.map((categoryItem) => ({
      id: item.id?.toString(),
      name: categoryItem.id?.toString(),
    }))
  );
}

export function generateMetadata({ params }: any) {
  const {name} = params
  const siteURL = 'https://careerdefiner.com';
  const userData = Data.flatMap(data => data.category.filter(item => item.id === name));
  return {
    title: `Best ${userData[0].type} in India`,
    description: `Best ${userData[0].type} in India`,
    alternates: {
      canonical: `${siteURL}/career/${params.id}/${name}`,
    },
  }

}