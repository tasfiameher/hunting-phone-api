const loadPhone = async (searchText) => {
    const res = await
        fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones);
}

const displayPhones = phones => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
    // display show all button if there are more than 12 phones
    const showAllContainer = document.getElementById('show-all-container');
    if (phones.length > 12) {
        showAllContainer.classList.remove('hidden');
    }
    else {
        showAllContainer.classList.add('hidden');
    }

    // display only first 12 phones
    phones = phones.slice(0, 12);
    phones.forEach(phone => {
        console.log(phone);
        // create a div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card p-4 bg-gray-100 shadow-xl`;
        // set inner html
        phoneCard.innerHTML = `
        <figure class="px-10 pt-10">
        <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>${phone.slug}</p>
        <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
        </div>
        </div>
        `;
        phoneContainer.appendChild(phoneCard);
    })
}

const handleSearch = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText);
}
// loadPhone();

// const handleSearch2 = () => {
//     const searchField = document.getElementById('search-field2');
//     const searchText = searchField.value;
//     console.log(searchText);
//     loadPhone(searchText)
// }