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
    videoUrl: 'https://www.youtube.com/embed/LZzq1zSL1bs?si=HNxt080cRcqonS07&amp;start=4'
  },
  {
    title: 'BlockChain',
    description: 'This is the description for card 2.',
    imageUrl: 'https://blogs.iadb.org/caribbean-dev-trends/wp-content/uploads/sites/34/2017/12/Blockchain1.jpg',
    videoUrl: 'https://www.youtube.com/embed/gyMwXuJrbJQ?si=LQNxjRu30rZ9EegQ&amp;start=3'
  },
  {
    title: 'Cyber Security',
    description: 'This is the description for card 3.',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D5612AQE0r5WC8r0HQg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1657711469335?e=2147483647&v=beta&t=AA7ierE6T8n-g7EDphWBu9qKdqcsXkOXo4tj7xg146s',
    videoUrl: 'https://www.youtube.com/embed/hXSFdwIOfnE?si=3aD8VXsIwhkoVPW7&amp;start=1'
  },
  {
    title: 'Data Analytics',
    description: 'This is the description for card 3.',
    imageUrl: 'https://cdn.springpeople.com/media/python%20logo.png',
    videoUrl: 'https://www.youtube.com/embed/VaSjiJMrq24?si=CtFPM3Fo5jdc_vzg&amp;start=2'
  },
  {
    title: 'AI ML',
    description: 'This is the description for card 3.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvqsauEJU7ZMmstIqTqwiOEW5BH4UTssse4w&s',
    videoUrl: 'https://www.youtube.com/embed/i_LwzRVP7bg?si=XSOkUSE7nDDwB_7v&amp;start=2'
  },
  {
    title: 'FullStack Web Development',
    description: 'This is the description for card 3.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPV0S6QPMqXN7rCVsTPsQzKSWcb2mpBU6Z4Q&s',
    videoUrl: 'https://www.youtube.com/embed/HVjjoMvutj4?si=04M8x9wamN0ebyAA%22%20title=%22YouTube%20video%20player'
  },
];

export default coursesData;
