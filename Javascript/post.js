document.getElementById("sendRequest").addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: "New Post",
            body: "This is a test pos",
            userId: 1
        })
    })
    .then(response => {
        if (!response.ok) throw new Error("Failed to send data");
        return response.json();
    })
    .then(data => {
        document.getElementById("responseMessage").textContent = `Post created with ID: ${data.id}`;
        console.log("Success:", data);
    })
    .catch(error => console.error("Fetch Error:", error));
});