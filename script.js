(function(){
    'use strict';
      fetch("db.json")
      .then(data => data.json())
      .then(res  => console.log(res));
  
}());