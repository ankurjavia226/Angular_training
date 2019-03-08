export function checkLocalStorage() {

    const datakey = 'UserData';

        let currentData = [];
        if (localStorage.getItem(datakey)) {
          currentData = JSON.parse(localStorage.getItem(datakey));
         }
        return currentData;
}
