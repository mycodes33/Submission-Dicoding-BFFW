function main() {









const getMovie = () => {
    const baseUrl="https://api.themoviedb.org/3/movie";
  
    const api_token = "bbb235f9dfd28f9bcb6dfa24d42f290f";
    fetch(`${baseUrl}/upcoming`, {
        headers: {

       "Access-Control-Allow-Credentials": "true",
       "accept":"application/json",
        "mode": "no-cors",
        "X-Auth-Token": api_token,
        "Access-Control-Allow-Origin": "*",
        },
     
        method: "GET",

      }).then((response) => {
        return response.json();
      })
     .then(responseJson => {
        if(responseJson.error) {
            showResponseMessage(responseJson.message);
        } else {
            renderAllMovies(responseJson.movies);
        }
     })
     .catch(error => {
         showResponseMessage(error);
     })
};








// fungsi tambah data 

const insertBook = (book) => {
    fetch(`${baseUrl}/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Auth-Token": "12345"
        },
        body: JSON.stringify(book)
    })
    .then(response => {
        return response.json();
    })
    .then(responseJson => {
        showResponseMessage(responseJson.message);
        getBook();
    })
    .catch(error => {
        showResponseMessage(error);
    })
};


//fungsi update data

const updateBook = (book) => {
    fetch(`${baseUrl}/edit/${book.id}`, {
         method: "PUT",
         headers: {
                "Content-Type": "application/json",
                "X-Auth-Token": "12345"
         },
         body: JSON.stringify(book)
     })
     .then(response => {
            return response.json();
     })
     .then(responseJson => {
            showResponseMessage(responseJson.message);
            getBook();
     })
     .catch(error => {
            showResponseMessage(error);
     })
};

//fungsi delete data

const removeBook = (bookId) => {
    fetch(`${baseUrl}/delete/${bookId}`, {
         method: "DELETE",
         headers: {
             "X-Auth-Token": "12345"
         }
     })
     .then(response => {
         return response.json();
     })
     .then(responseJson => {
         showResponseMessage(responseJson.message);
         getBook();      
     })
     .catch(error => {
         showResponseMessage(error);
     })
 };




//---------------------------------------------------------------------------------





//----------------------- CRUD WITH AJAX XHML XMLHttpRequest-------------------------------
/*
    //untuk menampilkan data dari API
    const getBook = () => {
    
    // tuliskan kode di sini!
    // membuat instance dari XMLHttpRequest

    const xhr = new XMLHttpRequest();

    //menetapkan callback jika response sukses dan error
    
    xhr.onload = function() {
    const responseJson = JSON.parse(this.responseText);
    if(responseJson.error) {
       showResponseMessage(responseJson.message);
    } else {
       renderAllBooks(responseJson.books);
    }
}

    xhr.onerror = function() {
    showResponseMessage();
}

    // Membuat GET request dan menetapkan target URL
    xhr.open("GET", "https://web-server-book-dicoding.appspot.com/list");
    // Mengirimkan request
    xhr.send();

};


//untuk menambahkan data ke API
    const insertBook = (book) => {
        
        
        // tuliskan kode di sini!

         // Membuat instance dari XMLHttpRequest
    const xhr = new XMLHttpRequest();
 
    //menetapkan callback jika response sukses dan error
    xhr.onload = function() {
       const responseJson = JSON.parse(this.responseText);
       showResponseMessage(responseJson.message);
       getBook();
    }
 
    xhr.onerror = function() {
       showResponseMessage();
    }
 
    // Membuat POST request dan menetapkan target URL
    xhr.open("POST", "https://web-server-book-dicoding.appspot.com/add");
        
    // Mementapkan properti Content-Type dan X-Auth-Token pada Header request
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("X-Auth-Token", "12345");
 
    // Mengirimkan request dan menyisipkan JSON.stringify(book) pada body
    xhr.send(JSON.stringify(book));


    };


//fungsi edit
    const updateBook = (book) => {
        // tuliskan kode di sini!

 // Membuat instance dari XMLHttpRequest
 const xhr = new XMLHttpRequest();
 
 //menetapkan callback jika response sukses dan error
 xhr.onload = function() {
    const responseJson = JSON.parse(this.responseText);
    showResponseMessage(responseJson.message);
    getBook();
 }

 xhr.onerror = function() {
    showResponseMessage();
 }

 // Membuat PUT request dan menetapkan target URL
 xhr.open("PUT", `${baseUrl}/edit/${book.id}`);

    // Membuat POST request dan menetapkan target URL
 

 // Mementapkan properti Content-Type dan X-Auth-Token pada Header request
 xhr.setRequestHeader("Content-Type", "application/json");
 xhr.setRequestHeader("X-Auth-Token", "12345");

 // Mengirimkan request dan menyisipkan JSON.stringify(book) pada body
 xhr.send(JSON.stringify(book));


    };



//fungsi delete
    const removeBook = (bookId) => {
       
        // tuliskan kode di sini!

           // Membuat instance dari XMLHttpRequest
   const xhr = new XMLHttpRequest();
 
   //menetapkan callback jika response sukses dan error
   xhr.onload = function() {
       const responseJson = JSON.parse(this.responseText);
       showResponseMessage(responseJson.message);
       getBook();
   }
 
   xhr.onerror = function() {
       showResponseMessage();
   }
 
   // Membuat DELETE request dan menetapkan target URL
   xhr.open("DELETE", `${baseUrl}/delete/${bookId}`);
 
   // Mementapkan properti Content-Type dan X-Auth-Token pada Header request
   xhr.setRequestHeader("X-Auth-Token", "12345");
 
   // Mengirimkan request
   xhr.send();
};


*/

//---------------------------------------------------------------------------------------------



    /*
        jangan ubah kode di bawah ini ya!
    */

    const renderAllMovies = (movies) => {
        const listMovieElement = document.querySelector("#listMovie");
        listMovieElement.innerHTML = "";

        movies.forEach(movie => {
            listMovieElement.innerHTML += `
                <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
                    <div class="card">
                        <div class="card-body">
                            <h5>(${movie.id}) ${movie.original_title}</h5>
                            <p>${movie.vote_count}</p>
                            <button type="button" class="btn btn-danger button-delete" id="${movie.id}">Hapus</button>
                        </div>
                    </div>
                </div>
            `;
        });

        const buttons = document.querySelectorAll(".button-delete");
        buttons.forEach(button => {
            button.addEventListener("click", event => {
                const bookId = event.target.id;
                removeBook(bookId);
            })
        })
    };

    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };

    document.addEventListener("DOMContentLoaded", () => {

        const inputBookId = document.querySelector("#inputBookId");
        const inputBookTitle = document.querySelector("#inputBookTitle");
        const inputBookAuthor = document.querySelector("#inputBookAuthor");
        const buttonSave = document.querySelector("#buttonSave");
        const buttonUpdate = document.querySelector("#buttonUpdate");

        buttonSave.addEventListener("click", function () {
            const book = {
                id: Number.parseInt(inputBookId.value),
                title: inputBookTitle.value,
                author: inputBookAuthor.value
            };
            insertBook(book)
        });

        buttonUpdate.addEventListener("click", function () {
            const book = {
                id: Number.parseInt(inputBookId.value),
                title: inputBookTitle.value,
                author: inputBookAuthor.value
            };

            updateBook(book)
        });
        getMovie();
    });
}

export default main;