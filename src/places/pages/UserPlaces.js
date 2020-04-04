import React from 'react'
import { useParams } from 'react-router-dom'
import PlaceList from '../components/PlaceList'

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "Biggest Building in the USA",
    imageUrl:
      "https://lavozdehondurasnews.com/web/wp-content/uploads/2019/09/1e74453a4d2c45f9becb39add27f2dff.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u1"
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "Biggest Building in the USA",
    imageUrl:
      "https://lavozdehondurasnews.com/web/wp-content/uploads/2019/09/1e74453a4d2c45f9becb39add27f2dff.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: "u2"
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
  return <PlaceList places={loadedPlaces} />;
}

export default UserPlaces