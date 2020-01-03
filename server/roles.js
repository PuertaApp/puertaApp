const AccessControl = require("accesscontrol");
const ac = new AccessControl();
 
exports.roles = (function() {
    ac.grant("buyer")
    .readAny("property")
    
    ac.grant("agent")
    
    ac.grant("rep")
    
    return ac;
})();