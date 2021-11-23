
var UserProfile = (function() {
    var full_name = "";
    var user_email = "";
  
    var getName = function() {
      return full_name;    // Or pull this from cookie/localStorage
    };
  
    var setName = function(name) {
      full_name = name;     
      // Also set this in cookie/localStorage
    };
    var getEmail = function() {
        return user_email;    // Or pull this from cookie/localStorage
      };
    
      var setEmail = function(email) {
        user_email = email;     
        // Also set this in cookie/localStorage
      };
  
    return {
      getName: getName,
      setName: setName,
      getEmail: getEmail,
      setEmail: setEmail
    }
  
  })();
  
  export default UserProfile;