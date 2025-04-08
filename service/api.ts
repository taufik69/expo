export const tmdbconfig = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: process.env.EXPO_PUBLIC_MOIVE_API_KEY,
  Headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOIVE_API_KEY}`,
  },
};

export const fetchmoive = async () => {
  const endpoint =
    "discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
  const url = `${tmdbconfig.BASE_URL}/${endpoint}`;
  const response = await fetch(url, {
    method: "GET",
    headers: tmdbconfig.Headers,
  });

  if (!response.ok) {
    throw new Error("failed to Fetch Moive" + response.statusText);
  }
  const data = await response.json();

  return data.results;
};
