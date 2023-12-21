import { SEARCH_CUISINES_URL, SWEEGY_API_URL } from "./constants";

const fetchData = async () => {
  try {
    const response = await fetch(SWEEGY_API_URL);
    return response.json();
  } catch (err) {
    console.error("Fetch Error", err);
    throw new Error("Failed to fetch Data");
  }
};

export async function getRestaurantData() {
  try {
    const json = await fetchData();
    return json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;
  } catch (err) {
    console.error("getRestaurantData Error", err);
    return [];
  }
}

export async function getOfferData() {
  try {
    const json = await fetchData();
    return json?.data?.cards[0]?.card?.card?.imageGridCards;
  } catch (err) {
    console.error("getOfferData Error", err);
    return [];
  }
}

export async function getMindProducts() {
  try {
    const json = await fetchData();
    console.log(
      json?.data?.cards[1]?.card?.card.imageGridCards.info[1].action.link
    );
    return json?.data?.cards[1]?.card?.card?.imageGridCards;
  } catch (err) {
    console.error("getMindProducts Error", err);
    return [];
  }
}

export async function getCuisinesData() {
  try {
    const data = await fetch(SEARCH_CUISINES_URL);
    const json = await data.json();
    return json?.data?.cards[1]?.card?.card?.imageGridCards.info;
  } catch (err) {
    console.error("getMindProducts Error", err);
    return [];
  }
}

export async function getRestaurantDetails(id) {
  try {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.2775063&lng=70.774087&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    return json.data.cards[0].card.card.info.slugs;
  } catch (err) {
    console.log(err);
    return [];
  }
}

export async function getMindProductUrl(id, name) {
  try {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.2775063&lng=70.774087&collection=${id}&tags=layout_CCS_${name}y=&filters=&type=rcv2&offset=0&page_type=null`
    );
    const json = await data.json();
    console.log(json);
  } catch (err) {
    console.log(err);
    return [];
  }
}
