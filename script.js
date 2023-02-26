(function(){
    'use strict';
      // fetch("http://localhost:3000/products")
      // .then(data => data.json())
      // .then(res  => console.log(res));

      axios.get("http://localhost:3000/products")
      .then(data  => console.log(data));

  
}());