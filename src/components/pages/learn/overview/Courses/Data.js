import fullStackCourseImage from 'src/assets/images/pages/learn/home/full-stack-app-on-aws-course.svg'
import frontendCourseImage from 'src/assets/images/pages/learn/home/serverless-frontend-course.svg'
import garethImg from 'src/assets/images/team/gareth.jpg'
import fernandoImage from 'src/assets/images/team/fernando.png'

module.exports = [
  {
    image: fullStackCourseImage,
    title: 'Full-Stack Application Development on AWS',
    description:
      'Serverless services only cost you when they are actually executing. This is important. To be a truly…',
    author: 'Gareth McCumskey',
    authorImage: garethImg,
    courseTime: '1 hr 45 min',
    videoCount: 8,
    link: '/learn/courses/full-stack-application-development-on-aws/',
  },
  {
    image: frontendCourseImage,
    title: 'Serverless for Frontend Developers',
    description:
      'Serverless services only cost you when they are actually executing. This is important. To be a truly…',
    author: 'Fernando Medina Corey',
    authorImage: fernandoImage,
    courseTime: '1 hr 45 min',
    videoCount: 8,
    link: '/learn/courses/serverless-for-frontend-developers/',
  },
]
