
    // Funzione per rimuovere una card quando il pulsante "Scarta" viene premuto
    function removeCard(card) {
      card.parentNode.removeChild(card);
    }

    // Effettua la chiamata HTTP di tipo GET per ottenere i dati dei libri
    fetch('https://striveschool-api.herokuapp.com/books', { method: 'GET' })
      .then(response => response.json())
      .then(data => {
        // Crea le card dei libri
        const bookRow = document.getElementById('bookRow');

        data.forEach(book => {
          const col = document.createElement('div');
          col.classList.add('col-lg-3');
          col.classList.add('col-md-4');
          col.classList.add('col-sm-6');
          col.innerHTML = `
            <div class="card justify-content-between mb-4">
              <img src="${book.img}" class="card-img-top img-fluid" alt="${book.title}">
              <div class="card-body">
                <h5 class="card-title">${book.title}</h5>
                <p class="card-text">Prezzo: ${book.price}</p>
                <button onclick="removeCard(this.parentNode.parentNode)" class="btn btn-danger">Scarta</button>
              </div>
            </div>
          `;
          bookRow.appendChild(col);
        });
      })
      .catch(error => console.error('Errore durante la richiesta:', error));
  