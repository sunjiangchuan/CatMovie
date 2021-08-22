import http from "@/utils/http.js";
// export const getNowMovie = () => http("get", "/api/ajax/movieOnInfoList?tonken=");
export const getNowMovie = () => http("get", "http://localhost:3000/movieList", );
// export const getNowMovie = (id = 1) => http("get", "http://localhost:3000/movieList", {
//     id: id
// });
// export const getNowMovie = (id = 1) => http("get", "/api/movieOnInfoList", {
//     cityId = id
// });