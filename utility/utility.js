export function throttle( fn, wait ){
    let lastCall = 0;
      return function(){
      if( Date.now() - lastCall > wait  ){
        lastCall = Date.now()
        fn()
      }
    }
  }