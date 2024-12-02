export const fetchPhotos = async (page, limit) => {
    const response = await fetch("api/btlbonus")
    const data = await response.json()
    console.log(data);
}