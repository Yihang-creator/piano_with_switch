function keypresser(k) {
    let kc = k.keyCode;
    try {
        var w_key = document.getElementById(kc);
        w_key.style.cssText = "box-shadow: inset 0 0 7px rgba(0,0,0,0.8)";
        if (kc<= 90 && kc>= 60) {
            let kn = k.key;
            if ((status[kn] == 0) || (_switch == 1)) {
                playkeysound(kn);
            }
            status[kn] = 1; 
        }
    } catch (error) {}
    
}

function keyleaver(k) {
    let kc = k.keyCode;
    try {
        var w_key = document.getElementById(kc);
        w_key.style.cssText = "box-shadow: unset";
        if (kc<= 90 && kc>= 60) {
            let kn = k.key;
            status[kn] = 0; 
        }
    } catch (error) {}
    
}

window.onkeydown = keypresser;
window.onkeyup = keyleaver;


let _switch = 0;

let status = {
a:0,b:0,c:0,d:0,e:0,f:0,g:0,h:0,i:0,j:0,k:0,l:0,m:0,n:0,o:0,p:0,q:0,r:0,s:0,t:0,u:0,v:0,w:0,x:0,y:0,z:0
};

let k={
a:0,b:1,c:2,d:3,e:4,f:5,g:6,h:7,i:8,j:9,k:10,l:11,m:12,n:13,o:14,p:15,q:16,r:17,s:18,t:19,u:20,v:21,w:22,x:23,y:24,z:25
}; 
let a=[
{name:"A",yin:"c-1"},
{name:"B" ,yin:"g-"},
{name:"C" ,yin: "e-"},
{name:"D" ,yin:"e-1"},
{name:"E" ,yin:"e-2"},
{name:"F" ,yin:"f-1"},
{name:"G" ,yin:"g-1"},
{name:"H" ,yin:"a-1"},
{name:"I" ,yin:"c3"},
{name:"J" ,yin:"b-1"},
{name:"K" ,yin:"c-2"},
{name:"L" ,yin:"d-2"},
{name:"M" ,yin:"b-"},
{name:"N" ,yin:"a-"},
{name:"O" ,yin:"d3"},
{name:"P" ,yin:"e3"},
{name:"Q" ,yin:"c-2"},
{name:"R" ,yin:"f-2"},
{name:"S" ,yin:"d-1"},
{name:"T" ,yin:"g-2"},
{name:"U" ,yin:"b-2"},
{name:"V" ,yin:"f-"},
{name:"W" ,yin:"d-2"},
{name:"X" ,yin:"d-"},
{name:"Y" ,yin:"a-2"},
{name:"Z" ,yin:"c-"},
];

function playkeysound(key) {
    let p=a[k[key]];
    let x = document.createElement("audio");
    x.setAttribute("src", `../video/${p.yin}.mp3`);
    x.setAttribute("autoplay","autoplay");
}