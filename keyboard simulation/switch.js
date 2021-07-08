document.getElementById("crazy").addEventListener("click", function() {    
        _switch = !_switch;
        let button = document.getElementById("crazy");
        if (_switch == 1) {
            document.styleSheets[1].addRule("button", "background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4)");
            document.styleSheets[1].addRule("button", "background-size: 400%");
            document.styleSheets[1].addRule("button", "z-index: 1");
            document.styleSheets[1].addRule("button", "animation: glow 8s linear infinite");
            document.styleSheets[1].addRule("button:before", "opacity: 1; z-index: -1");
        } else {
            document.styleSheets[1].addRule("button:before", "opacity: 0");
            document.styleSheets[1].addRule("button", "background: #111");
            document.styleSheets[1].addRule("button", "animation: none");
        }
        
});
