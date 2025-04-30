document.addEventListener("DOMContentLoaded", () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            if (!response.ok) throw new Error("Network response was not OK");
            return response.json();
        })
        .then(data => {
            const list = document.getElementById("dataList");
            data.slice(0, 5).forEach(item => { 
                const listItem = document.createElement("li");
                listItem.textContent = `${item.id}: ${item.title}`;
                list.appendChild(listItem);
            });
        })
        .catch(error => console.error("Fetch Error:", error));
});