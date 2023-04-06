class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = null) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = state;
    this.type = type;
  }

  fix() {
    this.state *= 1.5;
  }

  set state(value) {
    if (value < 0) {
      this._state = 0;
    } else if (value > 100) {
      this._state = 100;
    } else {
      this._state = value;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100) {
    super(name, releaseDate, pagesCount, state);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state = 100, type = 'book') {
    super(name, releaseDate, pagesCount, state, type);
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(name, releaseDate, pagesCount, state, author) {
    super(name, releaseDate, pagesCount, state, author);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(name, releaseDate, pagesCount, state, author) {
    super(name, releaseDate, pagesCount, state, author);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(name, releaseDate, pagesCount, state, author) {
    super(name, releaseDate, pagesCount, state, author);
    this.type = 'detective';
  }
}

class Library {
  constructor(name = '') {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++) {
      let book = this.books[i];
      if (book[type] === value) {
        return book;
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      let book = this.books[i];
      if (book.name === bookName) {
        this.books.splice(i, 1);
        return book;
      }
    }
    return null;
  }
}
class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  getName() {
    return this.name;
  }

  addMark(mark, subject) {
    if (mark >= 2 && mark <= 5) {
      if (subject in this.marks) {
        this.marks[subject].push(mark);
      } else {
        this.marks[subject] = [mark];
      }
    } else {
      console.log(`Оценка должна быть не меньше 2 и не больше 5. Оценка ${mark} по предмету ${subject} не добавлена.`);
    }
  }

  getAverageBySubject(subject) {
    if (subject in this.marks) {
      let sum = this.marks[subject].reduce((acc, cur) => acc + cur, 0);
      return sum / this.marks[subject].length;
    } else {
      return 0;
    }
  }

  getAverage() {
    let sum = 0;
    let count = 0;
    for (let subject of Object.keys(this.marks)) {
      sum += this.getAverageBySubject(subject);
      count++;
    }
    return count ? sum / count : 0;
  }
}
