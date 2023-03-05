export const filerData = (searchText, restaurants) => {
    const filteredList = restaurants.filter((res) => {
        if (res?.data?.name?.trim()?.toLowerCase()?.includes(searchText.trim().toLowerCase())) return res;
    })
    return filteredList
}