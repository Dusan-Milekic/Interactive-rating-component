let rateValue = 'unknown';
document.addEventListener('DOMContentLoaded', () => {
  let ratings = document.querySelectorAll('.num')
  ratings.forEach(num => {
    num.addEventListener('click', (e) => SelectedRate(e.target,ratings))

  });
  let btnSubmit = document.getElementById('btnSubmit')
  btnSubmit.addEventListener('click',IsSubmited)
})

function SelectedRate(element,ratings) {
  // Ispravka 2: classList umesto classlist, add umesto append
    ratings.forEach((num) => {
    num.classList.remove('ischecked:bg-white')
    num.classList.remove('ischecked:text-black')
  });

  element.classList.add('ischecked:bg-white');
  element.classList.add('ischecked:text-black');
  rateValue = parseInt(element.innerText);
  console.log(rateValue);
  // Ili ako koristite obični CSS umesto Tailwind:
  // element.classList.add('checked')
}

function IsSubmited(){
    if(rateValue != 'unknown'){
        let ratingParagraph = document.getElementById('rating')
        ratingParagraph.innerText = `You selected ${rateValue.toString()} out of 5`
        let cards = document.querySelectorAll('.card')
        cards[0].classList.add('hidden')
        cards[1].classList.remove('hidden')
    }
}