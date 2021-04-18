import './Cast.scss';

const Cast = ({ casts }) => {
  const defaultImg =
    'https://www.irishrsa.ie/wp-content/uploads/2017/03/default-avatar-350x350.png';
  return (
    <>
      <ul className="cast__list">
        {casts.map(({ profile_path, name, character, id }) => {
          const profile = `https://image.tmdb.org/t/p/w200${profile_path}`;
          return (
            <li key={id} className="cast__card">
              <img
                width="200"
                className="cast_img"
                src={profile_path ? profile : defaultImg}
                alt={name}
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Cast;
