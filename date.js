//jshint eversion:6

exports.getDate =  function () {

  const today = new Date();

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  return  today.toLocaleDateString("en-US", options);
}


exports.getDay = function () {

  const today = new Date();

  const options = {
    weekday: 'long'
  };

  return  today.toLocaleDateString("en-US", options);
}
