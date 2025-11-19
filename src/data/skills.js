export const largeLogoSkills = ['Java', 'Databricks', 'Uniswap'];

// To add a logo for each skill to then map 
export const skills = [
  { name: 'JavaScript', logo: 'javascript-logo.png' },
  { name: 'Springboot', logo: 'springboot-logo.png'},
  { name: 'TypeScript', logo: 'typescript-logo.png' },
  { name: 'Vue.js', logo: 'vue-logo.png' },
  { name: 'React', logo: 'react-logo.png' },
  { name: 'Node.js', logo: 'nodejs-logo.png' },
  { name: 'Express.js', logo: 'express-logo.png' },
  { name: 'MongoDB', logo: 'mongodb-logo.png' },
  { name: 'PostgreSQL', logo: 'postgresql-logo.png' },
  // { name: 'GraphQL', logo: 'graphql-logo.png' },
  // { name: 'HTML5', logo: 'html5-logo.png' },
  // { name: 'CSS3', logo: 'css3-logo.png' },
  // { name: 'Sass', logo: 'sass-logo.png' },
  { name: 'Tailwind CSS', logo: 'tailwindcss-logo.png' },
  { name: 'Vite', logo: 'vite-logo.svg' },
  { name: 'Recharts', logo: 'recharts-logo.svg' },
  { name: 'Git', logo: 'git-logo.png' },
  { name: 'Docker', logo: 'docker-logo.png' },
  { name: 'EC2', logo: 'ec2-logo.png' },
  { name: 'ReDis', logo: 'redis-logo.png'},
  { name: 'Python', logo: 'python-logo.png'},
  { name: 'Java', logo: 'java-logo.png'},
  { name: 'Databricks', logo: 'databricks-logo.png'},
  { name: 'Uniswap', logo: 'uniswap-logo.png'},
  { name: 'Streamlit', logo: 'streamlit-logo.png'},
  { name: 'Excel', logo: 'excel-logo.png'},
  { name: 'Spark', logo: 'spark-logo.png'},
  { name: 'Trino', logo: 'trino-logo.png'},
  { name: 'JWT', logo: 'jwt-logo.png'}
];

export const skillLogoByName = Object.fromEntries(
  skills.map((s) => [s.name, s.logo])
);
