import moment from "moment";
import imgUrl from "../images/news-image.jpg";
import imgUrl2 from "../images/news-image-2.jpg";
import imgUrl3 from "../images/news-image-3.jpg";

export const news = [
  {
    id: 1,
    date: moment(new Date()).format("YYYY-MM-DD"),
    title: "lorem ipsum",
    description: "lorem ipsum",
    img_url: imgUrl,
    comments: [
      { date: moment(new Date()).format("YYYY-MM-DD"), comment: "lorem ipsum" },
      { date: moment(new Date()).format("YYYY-MM-DD"), comment: "lorem ipsum" },
    ],
  },
  {
    id: 2,
    date: moment(new Date()).format("YYYY-MM-DD"),
    title: "lorem ipsum",
    description: "lorem ipsum",
    img_url: imgUrl2,
    comments: [
      { date: moment(new Date()).format("YYYY-MM-DD"), comment: "lorem ipsum" },
      { date: moment(new Date()).format("YYYY-MM-DD"), comment: "lorem ipsum" },
    ],
  },
  {
    id: 3,
    date: moment(new Date()).format("YYYY-MM-DD"),
    title: "lorem ipsum",
    description: "lorem ipsum",
    img_url: imgUrl3,
    comments: [
      { date: moment(new Date()).format("YYYY-MM-DD"), comment: "lorem ipsum" },
      { date: moment(new Date()).format("YYYY-MM-DD"), comment: "lorem ipsum" },
    ],
  },
  {
    id: 4,
    date: moment(new Date()).format("YYYY-MM-DD"),
    title: "lorem ipsum",
    description: "lorem ipsum",
    img_url: imgUrl2,
    comments: [
      { date: moment(new Date()).format("YYYY-MM-DD"), comment: "lorem ipsum" },
      { date: moment(new Date()).format("YYYY-MM-DD"), comment: "lorem ipsum" },
    ],
  },
  {
    id: 5,
    date: moment(new Date()).format("YYYY-MM-DD"),
    title: "lorem ipsum",
    description: "lorem ipsum",
    img_url: imgUrl,
    comments: [
      { date: moment(new Date()).format("YYYY-MM-DD"), comment: "lorem ipsum" },
      { date: moment(new Date()).format("YYYY-MM-DD"), comment: "lorem ipsum" },
    ],
  },
  {
    id: 6,
    date: moment(new Date()).format("YYYY-MM-DD"),
    title: "lorem ipsum",
    description: "lorem ipsum",
    img_url: imgUrl2,
    comments: [
      { date: moment(new Date()).format("YYYY-MM-DD"), comment: "lorem ipsum" },
      { date: moment(new Date()).format("YYYY-MM-DD"), comment: "lorem ipsum" },
    ],
  },
];
