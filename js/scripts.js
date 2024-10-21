document.addEventListener("DOMContentLoaded", () => {
  const comicsData = [
    {
      title: "Action Comics #1000: The Deluxe Edition",
      thumb:
        "https://m.media-amazon.com/images/I/813JTCG1nwL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "American Vampire 1976 #1",
      thumb:
        "https://m.media-amazon.com/images/I/71mwWfZjaqL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Aquaman Vol. 4: Underworld",
      thumb:
        "https://m.media-amazon.com/images/I/81QqfvmsS+L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Batgirl #1",
      thumb:
        "https://m.media-amazon.com/images/I/71daCmvYnoL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Batman #56",
      thumb:
        "https://m.media-amazon.com/images/I/91TnLhEHrRL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Batman Beyond #1",
      thumb:
        "https://m.media-amazon.com/images/I/719uXQ9llwL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Batman/Superman #1",
      thumb:
        "https://m.media-amazon.com/images/I/71zXe2twG1L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Batman/Superman Annual #1",
      thumb:
        "https://m.media-amazon.com/images/I/81yaStG4WPL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Batman: The Joker War Zone #1",
      thumb:
        "https://m.media-amazon.com/images/I/91M3GitwLqL._UF1000,1000_QL80_.jpg",
    },
    {
      title: "Batman: Three Jokers #1",
      thumb:
        "https://m.media-amazon.com/images/I/91GToG1rDuL._UF1000,1000_QL80_.jpg",
    },
  ];

  const comics = comicsData;
  const cardContainer = document.querySelector("#card-container-id");

  comics.forEach((comic) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("div");
    title.classList.add("card-title");
    title.textContent = comic.title;

    const thumb = document.createElement("img");

    thumb.src = comic.thumb;
    thumb.alt = comic.title;

    const imgWrapper = document.createElement("div");
    imgWrapper.classList.add("card-img-container");

    imgWrapper.appendChild(thumb);

    card.appendChild(title);
    card.appendChild(imgWrapper);

    cardContainer.appendChild(card);
  });
});
