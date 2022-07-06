class Book {
  constructor(title, author, publish) {
    this.title = title;
    this.author = author;
    this.publish = publish;
  }
}

class UI {
  static dispalyBooks() {
    const bookList = [
      {
        title: "Books",
        author: "arif",
        publish: 1200,
      },
    ];
    bookList.map((book) => this.addBookToList(book));
  }

  static addBookToList(book) {
    const bookListInBody = document.querySelector("tbody");

    const trow = `
        <tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.publish}</td>
        <td><button class='btn btn-danger text-white btn-sm delete'>delete</button></td>
        </tr>
      `;
    bookListInBody.insertAdjacentHTML("beforebegin", trow);
  }

  static clearBookFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#publish").value = "";
  }

  static setAlertMessage() {
    setTimeout(function () {
      alert("Book Added Successfully");
    }, 2000);
  }

  static deleteBook(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }
}

UI.dispalyBooks();

document.querySelector("#submit").addEventListener("click", (e) => {
  e.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const publish = document.querySelector("#publish").value;

  if (title && author && publish) {
    const book = new Book(title, author, publish);
    UI.addBookToList(book);
    UI.setAlertMessage();
    UI.clearBookFields();
  }
});

document.querySelector("tbody").addEventListener("click", (e) => {
  UI.deleteBook(e.target);
});
