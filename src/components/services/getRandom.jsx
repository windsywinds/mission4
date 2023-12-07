//function to get a random URL from a defined list of car images via the api
//stored location server/data/randomUrls.cjs
async function getRandom() {
  try {
    const response = await fetch("http://localhost:8001/getrandom");
    const randomUrlData = await response.json();
    return randomUrlData;
  } catch (error) {
    console.error("Error fetching randomUrl data:", error);
    const notFound = "There was an error retreiving an entry";
    return notFound;
  }
}
export default getRandom;
