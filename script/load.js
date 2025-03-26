const load = {
    true: '1'
};
const buttonLoading = document.querySelector('#button-load');
async function getDoneList(){
    await fetch ('../app/loadDoneList.php',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(load)
    }).then(res => res.json());
    //     body:JSON.stringify(load)
        
    // })
    // .then(response => {
    //     console.log(response)
    //     response.json()})
    // .then(date => {
    //     console.log(date)
    //     // let res = result;
    // })
    // .catch(error=>{
    //     console.error("Error", error)
    // });
    
}
console.log(buttonLoading);
buttonLoading.addEventListener('click', ()=>{
    console.log('click')
    getDoneList();
})
console.log("LOAD");