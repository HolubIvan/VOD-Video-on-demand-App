import { imagesUrl } from "./../url/url";
import defaultImage from "./../img/default.png";

export default function getImageOfAsset(data) {
  if (data.poster_path) {
    return `${imagesUrl}${data.poster_path}`;
  }
  return defaultImage;
}
