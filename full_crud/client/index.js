const getElmId = (id) => {
    return document.getElementById(id)
}

const createElm = (elm) => {
    return document.createElement(elm)
}

const createForm = getElmId("create");
const updateForm = getElmId("update");
const deleteForm = getElmId("delete");

const dataDiv = getElmId("data");
const getAllButton = getElmId("get-all");



createForm.addEventListener("submit", async(e) => {
    e.preventDefault()

    try{
        const response = await fetch("http://localhost:8080/crud/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: createForm.name.value,
                category: createForm.category.value,
                price: createForm.price.value,
                emoji: createForm.emoji.value,

            })
        })

        const json = await response.json()

        console.log(json);
        showMyStuff(json.Results)


    }catch(err){
        console.log(err);
    }
})

updateForm.addEventListener("submit", async(e) => {
    e.preventDefault()
    try{
        const response = await fetch(`http://localhost:8080/crud/update/${updateForm.id.value}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: updateForm.name.value,
                category: updateForm.category.value,
                price: updateForm.price.value,
                emoji: updateForm.emoji.value,

            })
        }) 

        const json  = await response.json()

        showMyStuff(json.Results)

    }catch(err){
        console.log(err);
    }
})

deleteForm.addEventListener("submit", async(e) => {
    e.preventDefault();
    try{
        const response = await fetch(`http://localhost:8080/crud/delete/${deleteForm.delete.value}`, {
            method: "DELETE",
        })

        const json = await response.json();


        showMyStuff(json.Results)

    }catch(err){
        console.log(err);
    }
})

const fetchAll = async() => {
    try{
        const response = await fetch("http://localhost:8080/crud/all")
        const json = await response.json()

        console.log(json);

        showMyStuff(json.Results)
    }catch(err){
        console.log("Error");
    }
}

fetchAll()

function showMyStuff (myArray) {

    while(dataDiv.firstChild){
        dataDiv.removeChild(dataDiv.firstChild)
    }

    myArray.forEach((i) => {
        // console.log(i);
        let itemDiv = createElm("div");

        let h2 = createElm("h2")
        h2.textContent = i.emoji
        itemDiv.appendChild(h2)

        let p1 = createElm("p")
        p1.textContent = i.id
        itemDiv.appendChild(p1)

        let p2 = createElm("p")
        p2.textContent = i.name
        itemDiv.appendChild(p2)

        let p3 = createElm("p")
        p3.textContent = i.category
        itemDiv.appendChild(p3)

        let p4 = createElm("p")
        p4.textContent = i.price
        itemDiv.appendChild(p4)

        itemDiv.classList.add("item")

        dataDiv.appendChild(itemDiv)
    })
}