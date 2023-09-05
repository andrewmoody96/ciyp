// fetches API 

export async function getAllEvents() {
    try {
        const response = await fetch('/api/events');
        return await response.json();
    } catch(error) {
        return("Error retrieving events.")
    }
}
