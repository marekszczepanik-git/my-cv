import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.scss'

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
  photo: 'https://placehold.co/200x200?text=MS',
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
    <main className='cv-main'>
        <header className='cv-header'>
          <h1>CV {cvData.name} {cvData.lastName}</h1>
        </header>
        <aside className='cv-personal'>
          <h2>Dane osobowe</h2>
          <img className='cv-photo' src={cvData.photo} alt={`${cvData.name} ${cvData.lastName} zdjęcie profilowe`} />
          <p>{cvData.name} {cvData.lastName}</p>
          <small>{cvData.position}</small>
        </aside>
        <section className='cv-detail'>
          <h2>Doświadczenie zawodowe</h2>
          <ul>
            {cvData.experience.map(doswiadczenie =>(
              <li key={doswiadczenie.year}>
                <strong>{doswiadczenie.year}</strong> - {doswiadczenie.description}
              </li>
            ))}
          </ul>
          <h2>Edukacja</h2>
          <ul>
            {cvData.education.map((szkola, index) => (
              <li key={index}>
                {szkola}
              </li>
            ))}
          </ul>
        </section>
    </main>
  </StrictMode>,
)
