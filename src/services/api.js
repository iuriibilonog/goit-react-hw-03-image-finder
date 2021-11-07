import axios from "axios";

// export const getDataServer = (query) => {
//   console.log(query);
//   return axios
//     .get(
//       `https://pixabay.com/api/?q=${query}&page=номер_страницы&key=23766907-8949d781ce5b5ece952eeda6b&image_type=photo&orientation=horizontal&per_page=12`
//     )
//     .then((data) => console.log("ok"));
// };

export async function getDataServer(query, page) {
  console.log("q->", query);
  console.log("p->", page);
  const response = await axios(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=23766907-8949d781ce5b5ece952eeda6b&image_type=photo&orientation=horizontal&safesearch=true&per_page=12`
  );

  if (response.status >= 200 && response.status < 300) {
    return response.data;
  }
  throw new Error(
    console.log(
      "Sorry, there are no images matching your search query. Please try again."
    )
  );
}