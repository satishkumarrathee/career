import Data from '@/app/utils/school.json'
import SchoolPage from '@/app/components/SchoolPage';
const Dynamic = ({ params }: any) => {
  const { id } = params;
  const UserData = Data.filter((item) => item.id === id);
  return (
    <SchoolPage id={UserData[0].id} classData={UserData[0].class}/>
  );
}

export default Dynamic;

export function generateStaticParams() {
  return Data.map((item) => (
    { id: item.id.toString() }
  ))
}

export function generateMetadata({ params }: any) {
  const { id } = params
  const UserData = Data.filter((item) => item.id === id);
  return {
    title: `Best ${UserData[0].class} in India`,
    description: `Best ${UserData[0].class} in India`
  }

}