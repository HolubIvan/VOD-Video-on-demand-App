// https://video-proxy.3rdy.tv/
// http://online.smartsoft.ro:3333/

const urlExample = "https://video-proxy.3rdy.tv/";

const menuUrl = `${urlExample}api/static/menu`;
const categoriesUrl = `${urlExample}api/vod/category`;
const filmsByCategoryUrl = `${urlExample}/api/vod/category/{CATEGORY_ID}/assets`;
const filmDetailUrl = `${urlExample}api/vod/asset/{ASSET_ID}`;
const videosOfFilmYoutubeUrl = `${urlExample}api/vod/asset/577922/videos`;
const popularUrl = `${urlExample}api/vod/popular`;
const searchUrl = `${urlExample}api/vod/search?q={QUERY_STRING}`;
const discoverUrl = `${urlExample}api/vod/discover`;

export {
  menuUrl,
  categoriesUrl,
  filmsByCategoryUrl,
  filmDetailUrl,
  videosOfFilmYoutubeUrl,
  popularUrl,
  searchUrl,
  discoverUrl,
};
