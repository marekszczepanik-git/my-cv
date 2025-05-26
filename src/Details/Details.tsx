import './Details.scss';

interface Experience {
  year: number;
  description: string;
}
interface CVData {
  
  experience: Experience[];
  education: string[];
}

const cvData: CVData = {
  
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

const Details = () => {
    return (
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
    )
}

export { Details }