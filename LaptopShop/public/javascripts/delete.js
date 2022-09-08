const fetchAPI = async (url, option) => {
    const res = await fetch(url, option);
    return res.json();
}

const onDelete = async (id) => {
    const url = `http://localhost:3000/${id}/delete`;
    const option = {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        await fetchAPI(url, option);
        window.location.href = '/products';
    } catch (e) { console.log('Delete error: ', e) }
}


