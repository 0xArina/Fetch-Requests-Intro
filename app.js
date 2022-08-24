//////////////////////////          INTRO TO FETCH         /////////////////////////////

/*
    // call fetch request one after another

    fetch("https://swapi.dev/api/people/1/")
        // return promises
        .then(res => {
            // resolves as soon as fetch receives any headers
            console.log("RESOLVED!", res);
            // call JSON
            return res.json()
        })
        .then(data => {
            // show JSON data
            console.log("JSON", data)
            // second request 
            return fetch("https://swapi.dev/api/people/2/")
        })
        .then(res => {
            console.log("SECOND REQUEST RESOLVED!");
            // call JSON 
            return res.json();
        })
        .then(data => {
            // show JSON data
            console.log("JSON", data)
        })
        .catch(e => {
            console.log("ERROR!", e);
        });
*/


// async fetch requests

const loadStarWarsPeople = async () => {
    try {
        // wait for a promise of fetch and save to a var
        const res = await fetch("https://swapi.dev/api/people/1/");
        // wait for a promise of JSON call and save to a var
        const data = await res.json();
        // show data
        console.log("JSON", data);

        // 2nd request 
        // wait for a promise of fetch and save to a var
        const res2 = await fetch("https://swapi.dev/api/people/2/");
        // wait for a promise of JSON call and save to a var
        const data2 = await res2.json();
        // show data
        console.log("JSON", data2);
    } catch (e) {
        console.log("ERROR!", e);
    }
}

loadStarWarsPeople();