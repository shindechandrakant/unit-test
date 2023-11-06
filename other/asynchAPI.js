
const fetchData = () => {

    return new Promise((resolve, reject) => {

        setTimeout((() => {

            let response = JSON.stringify({
                name: "Chandrakant Shinde",
                age: 24,
                email: "chandrakant@chandrakant.dev",
              });
            return resolve(response);
        }), 2000);
    });
}


module.exports = fetchData;