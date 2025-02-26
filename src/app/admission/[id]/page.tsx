import Data from '@/app/utils/data.json';
import AdmissionPage from '@/app/components/AdmissionPage';

interface Params {
  id: string;
}

const Dynamic = ({ params }: any) => {
  const { id }:Params = params;
  const UserData = Data.filter((item) => item.id === id);
  return (
    <AdmissionPage name={UserData[0].name} id={UserData[0].id} category={UserData[0].category} />
  );
}

export default Dynamic;

export function generateStaticParams() {
  return Data.map((item) => (
    { id: item.id.toString() }
  ));
}

export function generateMetadata({ params }: any) {
  const siteURL = 'https://careerdefiner.com';
  const { id } = params;
  const UserData = Data.filter((item) => item.id === id);
  return {
    title: `Best ${UserData[0].name} in India`,
    description: `Best ${UserData[0].name} in India`,
    alternates: {
      canonical: `${siteURL}/admission/${id}`,
    },
  };
}
