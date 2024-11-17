type coursesDataProps =  {
  title: string;
  description: string;
  imageUrl: string;
  videoUrl: string
}

const coursesData: coursesDataProps[] = [
  {
    title: 'Data Science',
    description: 'This is the description for card 1.',
    imageUrl: 'https://www.cdmi.in/courses@2x/data-science.webp',
    videoUrl: 'https://www.youtube.com/watch?v=LZzq1zSL1bs'
  },
  {
    title: 'BlockChain',
    description: 'This is the description for card 2.',
    imageUrl: 'https://blogs.iadb.org/caribbean-dev-trends/wp-content/uploads/sites/34/2017/12/Blockchain1.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=gyMwXuJrbJQ'
  },
  {
    title: 'Cyber Security',
    description: 'This is the description for card 3.',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D5612AQE0r5WC8r0HQg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1657711469335?e=2147483647&v=beta&t=AA7ierE6T8n-g7EDphWBu9qKdqcsXkOXo4tj7xg146s',
    videoUrl: 'https://www.youtube.com/watch?v=hXSFdwIOfnE'
  },
  {
    title: 'Data Analytics',
    description: 'This is the description for card 3.',
    imageUrl: 'https://cdn.springpeople.com/media/python%20logo.png',
    videoUrl: 'https://www.youtube.com/watch?v=VaSjiJMrq24'
  },
  {
    title: 'AI ML',
    description: 'This is the description for card 3.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvqsauEJU7ZMmstIqTqwiOEW5BH4UTssse4w&s',
    videoUrl: 'https://www.youtube.com/watch?v=i_LwzRVP7bg'
  },
  {
    title: 'FullStack Web Development',
    description: 'This is the description for card 3.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPV0S6QPMqXN7rCVsTPsQzKSWcb2mpBU6Z4Q&s',
    videoUrl: 'https://www.youtube.com/watch?v=HVjjoMvutj4'
  },
];

export default coursesData;
