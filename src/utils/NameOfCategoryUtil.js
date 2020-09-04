export default function getProperlyNameOfCategorie(data, id) {
  const film = data.data.genres.find((el) => el.id === Number(id));
  return film.name;
}
