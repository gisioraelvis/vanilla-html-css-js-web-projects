const searchForm = document.querySelector(".js-search-form");

searchForm.addEventListener("submit", handleSubmit);

async function handleSubmit(e) {
  e.preventDefault();

  const searchInput = document.querySelector(".js-search-input").value;
  const searchQuery = searchInput.trim();

  const searchResults = document.querySelector(".js-search-results");

  // Clear the previous results
  searchResults.innerHTML = "";

  const spinner = document.querySelector(".js-spinner");
  spinner.classList.remove("hidden");

  try {
    const searchResults = await searchWikipedia(searchQuery);
    if (searchResults.query.searchinfo.totalhits === 0) {
      alert("No results found. Try different keywords");
      return;
    }
    displayResults(searchResults);
  } catch (err) {
    console.log(err);
    alert("An Error Occured");
  } finally {
    spinner.classList.add("hidden");
  }
}

async function searchWikipedia(searchQuery) {
  const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${searchQuery}`;
  const res = await fetch(endpoint);
  if (!res.ok) {
    throw Error(res.statusText);
  }
  const data = await res.json();
  return data;
}

function displayResults(results) {
  // Get a reference to the `.js-search-results` element
  const searchResults = document.querySelector(".js-search-results");

  // Iterate over the `search` array. Each nested object in the array can be
  // accessed through the `result` parameter
  results.query.search.forEach((result) => {
    const url = `https://en.wikipedia.org/?curid=${result.pageid}`;

    // Append the search result to the DOM
    searchResults.insertAdjacentHTML(
      "beforeend",
      `<div class="result-item">
          <h3 class="result-title">
            <a href="${url}" target="_blank" rel="noopener">${result.title}</a>
          </h3>
          <a href="${url}" class="result-link" target="_blank" rel="noopener">${url}</a>
          <span class="result-snippet">${result.snippet}</span><br>
        </div>`
    );
  });
}
