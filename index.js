const { default: axios } = require("axios");

let API_KEY=`AIzaSyCH7FePlPwt2EkO4K0joGcjgvmnPaiAGLs`;
let origin=`5.563906,-0.194740`
let destination=`5.682029,-0.026006`
let URL=`https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${API_KEY}`

async function checkTravelDuration() {
    console.log(`START: checkTravelDuration()`);

    axios.get(URL)
        .then(response =>{
            console.log(JSON.stringify(response.data));
        }).catch(err=> {
            console.log(err);
        })



    console.log(`END: checkTravelDuration()`);

}
checkTravelDuration()
// setInterval(checkTravelDuration, 2000, 'funky');