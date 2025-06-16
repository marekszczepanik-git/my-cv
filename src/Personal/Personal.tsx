import type { CVPersonal } from '../types';
import './Personal.scss';

type Props = {
  data: CVPersonal
}

const Personal = ({ data: { photo, name, lastName, position } }: Props) => {
  return (
    <aside className='cv-personal'>
      <h2>Dane osobowe</h2>
      <img className='cv-photo' src={photo} alt={`${name} ${lastName} zdjęcie profilowe`} />
      <p>{name} {lastName}</p>
      <small>{position}</small>
    </aside>
  )
}

export { Personal }