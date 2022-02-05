import { isAccordionItemSelected } from "react-bootstrap/esm/AccordionContext";

export const searchCharacters = () => {
    const endpoint = 'https://swapi.dev/api/people'
    fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        const { results } = data;
        let csvContent;
        console.log(results);
        console.log(Object.keys(results))
        for (let row = 0; row < results.length; row++) {
            let keysLength = Object.keys(results).length;
            let keysCounter = 0;
            if (row === 0) {
                for (let key in results[row]) {
                    csvContent += key + (keysCounter+1 < keysLength ? ',' : '\r\n')
                    keysCounter++
                }
            } else {
                for (let key in results[row]) {
                    csvContent += results[row][key] + (keysCounter + 1 < keysLength ? ',' : '\r\n')
                    keysCounter++
                }
            }
            return console.log(csvContent)
        }
        console.log(csvContent)
    })
};