const AccessControl = require("accesscontrol");
const ac = new AccessControl();
 
exports.roles = (function() {
    ac.grant("buyer")
    .readAny("property")
    .readAny("profile")
    
    ac.grant("agent")
    .readAny("profile")
    
    ac.grant("rep")
    .readAny("profile")
    
    return ac;
})();