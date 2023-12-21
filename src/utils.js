export function handleSearch(searchInput, restaurantData) {
  const filterdData = restaurantData.filter((data) =>
    data.info.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return filterdData;
}

export function handleLeftScroll(ref, set, count) {
  ref.current.scrollLeft -= 300;
}

export function handleRightScroll(ref, set, count) {
  ref.current.scrollLeft += 300;
}
