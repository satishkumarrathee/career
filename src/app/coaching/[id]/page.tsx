import Data from '@/app/utils/coaching.json'
import CoachingPage from '@/app/components/CoachingPage';
const examNamePage = ({ params }: any) => {
  const { id } = params;
  const UserData = Data.filter((item) => item.id === id);
  return (
    <CoachingPage name={UserData[0].name}/>
  );
}

export default examNamePage;

export function generateStaticParams() {
  return Data.map((item) => (
    { id: item.id.toString() }
  ))
}


export function generateMetadata({ params }: any) {
  const siteURL = 'https://careerdefiner.com';
  const { id } = params;
  const UserData = Data.filter((item) => item.id === id);
  return {
    title: `Best ${UserData[0].name} in India`,
    description: `Best ${UserData[0].name} in India`,
    alternates: {
      canonical: `${siteURL}/coaching/${id}`,
    },
  };
}