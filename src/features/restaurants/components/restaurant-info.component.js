import React from "react";
import { Text } from "react-native";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpost.healthline.com%2Fwp-content%2Fuploads%2F2020%2F07%2Fpizza-beer-1200x628-facebook-1200x628.jpg&imgrefurl=https%3A%2F%2Fwww.healthline.com%2Fhealth%2Fhigh-blood-pressure-hypertension%2Ffoods-to-avoid&tbnid=wsdQKWsoMY3JSM&vet=12ahUKEwigiv_7haLwAhUGZawKHVAkCtEQMygCegUIARDaAQ..i&docid=tqHmbqJTxas2NM&w=1200&h=628&q=food&ved=2ahUKEwigiv_7haLwAhUGZawKHVAkCtEQMygCegUIARDaAQ",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return <Text>info</Text>;
};
