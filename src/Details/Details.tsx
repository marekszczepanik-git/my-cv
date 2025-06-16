import type { CVDetails } from '../types';
import './Details.scss';

type Props = {
  data: CVDetails
}

const Details = ({data: {experience, education}}: Props) => {
    return (
        <section className='cv-detail'>
          <h2>Doświadczenie zawodowe</h2>
          <ul>
            {experience.map(doswiadczenie =>(
              <li key={doswiadczenie.year}>
                <strong>{doswiadczenie.year}</strong> - {doswiadczenie.description}
              </li>
            ))}
          </ul>
          <h2>Edukacja</h2>
          <ul>
            {education.map((szkola, index) => (
              <li key={index}>
                {szkola}
              </li>
            ))}
          </ul>
        </section>
    )
}

export { Details }