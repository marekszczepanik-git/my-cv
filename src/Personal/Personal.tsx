import './Personal.scss';


interface CVData {
  photo: string;
  name: string;
  lastName: string;
  position: string,
  
}

const cvData: CVData = {
  photo: 'https://placehold.co/200x200?text=MS',
  name: 'Marek',
  lastName: 'Szczepanik',
  position: 'Developer',
  
}

const Personal = () => {
    return (
        <aside className='cv-personal'>
          <h2>Dane osobowe</h2>
          <img className='cv-photo' src={cvData.photo} alt={`${cvData.name} ${cvData.lastName} zdjęcie profilowe`} />
          <p>{cvData.name} {cvData.lastName}</p>
          <small>{cvData.position}</small>
        </aside>
    )
}

export { Personal }