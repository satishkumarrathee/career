import Data from '@/app/utils/data.json'
import Coaching from '@/app/utils/coaching.json'
import Exam from '@/app/utils/exam.json'
import Career from '@/app/utils/job.json'

export default async function sitemap(){
 
    const main = Data.flatMap((cat: any) => 
        cat.category.flatMap((item: any) => 
          item.category.map((newItem: any) => ({
            url: `https://careerdefiner.com/admission/${cat.id}/${item.id}/${newItem.id}`,
            lastModified: new Date(),
            changeFrequency: 'Daily',
            priority: 1
          }))
        )
      );
    const submain = Coaching.map((newItem: any) => ({
            url: `https://careerdefiner.com/coaching/${newItem.id}`,
            lastModified: new Date(),
            changeFrequency: 'Daily',
            priority: 1
          }))
    const supermain = Exam.map((newItem: any) => ({
            url: `https://careerdefiner.com/exam/${newItem.id}`,
            lastModified: new Date(),
            changeFrequency: 'Daily',
            priority: 1
          }))
    const superman = Career.flatMap((item)=>(item.category).map((newItem: any) => ({
            url: `https://careerdefiner.com/career/${item.id}/${newItem.id}`,
            lastModified: new Date(),
            changeFrequency: 'Daily',
            priority: 1
          })))
      
    return [

    {
      url: `https://careerdefiner.com`,
      lastModified: new Date(),
      changeFrequency : 'Daily',
      priority:1
    },
    {
      url: `https://careerdefiner.com/contact`,
      lastModified: new Date(),
      changeFrequency : 'Daily',
      priority:1
    },
    {
      url: `https://careerdefiner.com/about`,
      lastModified: new Date(),
      changeFrequency : 'Daily',
      priority:1
    },
    {
      url: `https://careerdefiner.com/career`,
      lastModified: new Date(),
      changeFrequency : 'Daily',
      priority:1
    },
    {
      url: `https://careerdefiner.com/admission`,
      lastModified: new Date(),
      changeFrequency : 'Daily',
      priority:1
    },
    {
      url: `https://careerdefiner.com/exam`,
      lastModified: new Date(),
      changeFrequency : 'Daily',
      priority:1
    },
    {
      url: `https://careerdefiner.com/coaching`,
      lastModified: new Date(),
      changeFrequency : 'Daily',
      priority:1
    },
    {
      url: `https://careerdefiner.com/university`,
      lastModified: new Date(),
      changeFrequency : 'Daily',
      priority:1
    },
    {
      url: `https://careerdefiner.com/login`,
      lastModified: new Date(),
      changeFrequency : 'Daily',
      priority:1
    },
    {
      url: `https://careerdefiner.com/signup`,
      lastModified: new Date(),
      changeFrequency : 'Daily',
      priority:1
    },
    {
      url: `https://careerdefiner.com/employer`,
      lastModified: new Date(),
      changeFrequency : 'Daily',
      priority:1
    },
    {
      url: `https://careerdefiner.com/admin`,
      lastModified: new Date(),
      changeFrequency : 'Daily',
      priority:1
    },
    {
      url: `https://careerdefiner.com/blog`,
      lastModified: new Date(),
      changeFrequency : 'Daily',
      priority:1
    },
    {
      url: `https://careerdefiner.com/university`,
      lastModified: new Date(),
      changeFrequency : 'Daily',
      priority:1
    },
    {
      url: `https://careerdefiner.com/school`,
      lastModified: new Date(),
      changeFrequency : 'Daily',
      priority:1
    },
    {
      url: `https://careerdefiner.com/overseas-education`,
      lastModified: new Date(),
      changeFrequency : 'Daily',
      priority:1
    },
    {
      url: `https://careerdefiner.com/college`,
      lastModified: new Date(),
      changeFrequency : 'Daily',
      priority:1
    },
    ...main,
    ...submain,
    ...supermain,
    ...superman
]
  }