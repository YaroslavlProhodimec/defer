function defer(f, ms) {
  return function() {
    setTimeout(() => f.apply(this, arguments), ms)
  };
}

function sayHi(who) {
  alert('Hello, ' + who);
}

let sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred("John"); // выводит "Hello, John" через 2 секунды
То же самое без стрелочной функции выглядело бы так:

  function defer(f, ms) {
    return function(...args) {
      let ctx = this;
      setTimeout(function() {
        return f.apply(ctx, args);
      }, ms);
    };
  }