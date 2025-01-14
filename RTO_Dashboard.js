function callAPI(){
    axios.get('https://codingshika.com/APP/RTO/rto_superadmin.php')
.then(responce => {
    console.log(responce.data);
    document.querySelector('#a').innerHTML = responce.data.posts.rto_reg;
    document.querySelector('#b').innerHTML = responce.data.posts.no_v_scaned;
    document.querySelector('#c').innerHTML = responce.data.posts.v_reg;
    document.querySelector('#d').innerHTML = responce.data.posts.fine_amt;

})

}