let calculation= localStorage.getItem('calc')||'';

    function updatecalc(calc){
     calculation+=calc;
  document.querySelector('.display').innerHTML=calculation;
    }