const collect_ratings = ()=>{

   const ratings={
    count :0,
    sum : 0,
    average :0
    }
    let rating = 0;
    // input element from HTML
    const elements= document.querySelectorAll('.rating');

    //cycling thought elements
    elements.forEach(element=>{
        rating =parseInt(element.id.replace('star',''));
        ratings.count += parseInt(element.value);
        rating.sum +=parseInt(element.value)*rating;
    })

    if(rating.count!==0){
        ratings.average = rating.sum/rating.count;
    }

    return ratings;

}
document.addEventListener('change',()=>{
   const rating= collect_ratings();
   document.querySelector('#average').value = rating.average.toFixed(2);
})