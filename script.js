'use strict';
console.log('test');

const searchInput = null;
const bookList = [
    {
      id: 1,
      author: 'Charles Dickens',
      title: 'Oliver Twist'
    },
    {
      id: 2,
      author: 'William Shakespear',
      title: 'Hamlet'
    }
  ];
  
const handleKeyPress = () => {
    /*  Ta emot/läsa av värdet i inputfältet.
        Skicka värdet till searchBooks
        searchBooks returnerar en filtrerad lista.
        Filtrerade listan sickas till renderBookList
    */

    console.log('Handle keypress')
}

function test(func){
    func();
}
test(handleKeyPress)
function searchBooks(searchTerm){
    /*  Loopa igenom booklist.
        För varje varv i loopen, ta det aktuella elementet (boken)
        Jämför titeln med söktermen.
        Om söktermen finns någonstans i titeln, lägg till elementet i ny list (filteredList)
        Returnerar filteredList eller anropar renderBookList?
        
    */
const filteredList = [];
   for (let i = 0; i < bookList.length; i++){
    const title = bookList[i].title.toLowerCase();

    if(title.indexOf(searchTerm.toLowerCase()) >= 0 ){
        console.log('match?');
        filteredList.push(bookList[i])
    }
}
   console.log(filteredList);

}
function renderBookList() {

}

searchBooks('oliver');
