import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

interface Experience {
  year: number;
  description: string;
}
interface CVData {
  photo: string;
  name: string;
  lastName: string;
  position: string,
  experience: Experience[];
  education: string[];
}

const cvData: CVData = {
  photo: 'https://placehold.co/600x400?text=MS',
  name: 'Marek',
  lastName: 'Szczepanik',
  position: 'Developer',
  experience: [
    { year: 2003, description: 'Lorem ipsum' },
    { year: 2025, description: 'Dolor sit amet'}
  ],
  education: [
      'Lorem ipsum',
      'Dolor sit amet',
      'Ala ma kota'
  ]
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1>Hello World!</h1>
  </StrictMode>,
)
