import { bern, py, yo } from "../../assets/imgs";


export const dataHotelsDetails = {
  availability: {
    start: "02 octobre 2024",
    end: "29 octobre 2024",
  },
  id: 1,
  countryId: 1,
  title: "Urban Chic Hotel",
  desc: "Lorem12Lorem 12Lorem12Lorem 12Lorem12Lorem12 Lorem12Lorem12 Lorem12",
  contact: "0296759525",
  img: "",
  rating: 4.8,
  review: "4550 reviews",
  location: "Liberty Island, New-York",
  // coordinates: {
  lat: 40.689247,
  long: -74.044502,
  // },
  price: 400,
  // facilities: [{ id: 1, wifi: true }],
  reviews: [
    {
      id: 1,
      userComment: "L'hotel m'a beaucoup plus.",
      rating: 4,
      user: {
        id: 1,
        username: "Bernard Croguennec",
        imgProfile: bern,
      },
      commentPublicationDate: "8 octocbre 2023",
    },
    {
      id: 2,
      userComment: "L'hotel est charmant.",
      rating: 5,
      user: {
        id: 2,
        username: "Yoann Croguennec",
        imgProfile: yo,
      },
      commentPublicationDate: "25 septembre 2023",
    },
    {
      id: 3,
      userComment: "L'hotel est calme et bien situé.",
      rating: 4.5,
      user: {
        id: 3,
        username: "Pierre-yves Le Dorner",
        imgProfile: py,
      },
      commentPublicationDate: "27 juin 2023",
    },
  ],
};
