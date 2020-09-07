export default function getProperlyNameOfCategorie(data, id) {
  const film = data.find((el) => el.id === Number(id));
  return film.name;
}
