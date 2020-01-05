let counter = 0;

const fetchListOfProducts = () => {
    //simulating api call
    console.log(`Fetching data ..... ${counter++}`);
};

const debounce  = (fn, delay ) => {
    let timer ;
    return arguments => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, arguments);
        }, delay)
    };
}

const debouceProductSearchCall = debounce(fetchListOfProducts, 3000);