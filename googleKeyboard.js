// downloaded and reformatted from https://www.google.com/js/shortcuts.5.js
//   original didn't include a copywrite notice or license
//   i'm including it here for reference (it's not used in the actual extension)

var sc={};

sc.c=[];
sc.a=-1;
sc.p=-1;
sc.j=false;
sc.G=false;
sc.I=function(){
    var a=document.getElementById("tads");
    a&&sc.i(a.childNodes);
    var b=document.getElementById("res");
    sc.i(b.childNodes);
    sc.P();
    sc.T(a||b);
    sc.h=sc.u();
    for(var c=0;c<sc.h.length;c++){
        sc.h[c].onfocus=sc.B;
        sc.h[c].onblur=sc.A
        }
        document.onkeypress=sc.D;
    document.onkeydown=sc.C;
    document.onkeyup=sc.F;
    var d=window.location.hash,f=d?parseInt(/[#]i=(-?\d*)/.exec(d)[1],10):0;
    sc.f(f==-1?sc.d-1:f)
    };
sc.i=function(a){
    for(var b=0;b<a.length;b++){
        if(sc.J(a[b]))if(sc.K(sc.q(a[b])))continue;
        a[b].hasChildNodes()&&sc.i(a[b].childNodes)
        }
    };
sc.K=function(a){
    if(a.b.tagName=="LI"&&/\bta.\b/.test(a.b.className)){
        sc.e(a);
        sc.G=true;
        return true
        }
        if(a.b.className=="p"){
        a.b=a.b.previousSibling;
        sc.e(a);
        return true
        }
        if((a.b.tagName=="DIV"||a.b.tagName=="LI"||a.b.tagName=="P")&&/\bg\b/.test(a.b.className)){
        sc.e(a);
        return true
        }
        if(a.b.tagName=="H2"&&a.b.className=="r"){
        sc.e(a);
        return true
        }
        if(a.b.tagName=="P"&&a.b.className=="e"){
        sc.e(a);
        return true
        }
        return false
    };
sc.J=function(a){
    return(a.tagName=="DIV"||a.tagName=="LI"||a.tagName=="P"||a.tagName=="H2")&&a.getElementsByTagName("A").length>0||a.tagName=="A"
    };
    
sc.g=function(a){
    return document.createElement(a)
    };
    
sc.s=function(a,b){
    var c=sc.g("TD");
    c.style.backgroundColor=b;
    if(a)c.width=a;
    c.innerHTML="&nbsp;";
    return c
    };
sc.T=function(a){
    var b=document.getElementById("mbEnd");
    if(b){
        var c=b.insertRow(0);
        c.appendChild(sc.l())
        }else{
        var d=sc.g("TABLE");
        d.className="mbEnd";
        d.width="25%";
        d.border="0";
        d.style.backgroundColor="#ffffff";
        d.align="right";
        d.cellPadding="0";
        d.cellSpacing="0";
        var c=d.insertRow(0);
        c.appendChild(sc.s());
        c.appendChild(sc.l());
        a.parentNode.insertBefore(d,a)
        }
    };
sc.l=function(){
    var a=sc.g("TD");
    a.className="std";
    a.style.borderLeft="1px solid #c9d7f1";
    a.style.paddingLeft="0.3em";
    a.innerHTML='<center class=f>Keyboard Shortcuts<br><br></center><table border=0 class="lg std"><tr><td>Key</td><td>Action</td></tr><tr><th>J</th><td>Selects the next result.</td></tr><tr><th>K</th><td>Selects the previous result.</td></tr><tr><th>O</th><td>Opens the selected result.</td></tr><tr><th>&lt;Enter&gt;</th><td>Opens the selected result.</td></tr><tr><th>/</th><td>Puts the cursor in the search box.</td></tr><tr><th>&lt;Esc&gt;</th><td>Removes the cursor from the search box.</td></tr></table><br>';
    return a
    };
sc.r=function(a){
    var b=sc.g("img");
    b.src="/images/chevron.gif";
    b.style.visibility="hidden";
    b.style.position="absolute";
    b.style.left="12px";
    b.style.marginTop="3px";
    a.insertBefore(b,a.firstChild)
    };
    
sc.q=function(a){
    return{
        b:a,
        m:a.tagName=="A"?a:a.getElementsByTagName("A")[0]
        }
    };

sc.e=function(a){
    sc.r(a.b);
    sc.c.push(a)
    };
    
sc.P=function(){
    for(var a=0;a<sc.c.length;a++){
        sc.c[a].b.H=a;
        sc.c[a].b.onclick=sc.O
        }
        sc.d=sc.c.length
    };
    
sc.O=function(){
    sc.f(this.H)
    };
    
sc.B=function(){
    sc.f(-1)
    };
    
sc.A=function(){
    sc.f(sc.p)
    };
sc.C=function(a){
    a=a||window.event;
    if(a.ctrlKey||a.altKey||a.metaKey)return;
    var b=a.target||a.srcElement;
    if(b.tagName=="INPUT"){
        if(b.name=="q"&&a.keyCode==27){
            b.value=sc.Q();
            b.blur();
            return sc.k(a)
            }
            return
    }
    if(a.keyCode==13||a.keyCode==79)if(sc.a>=0&&sc.a<sc.d){
        if(a.shiftKey)window.open(sc.c[sc.a].m.href,"_blank");
        else{
            window.location.replace("#i="+sc.a);
            window.location=sc.c[sc.a].m.href
            }
            return sc.k(a)
        }
    };
    
sc.F=function(){
    sc.j=false
    };
sc.D=function(a){
    a=a||window.event;
    if(a.ctrlKey||a.altKey||a.metaKey)return;
    var b=a.target||a.srcElement;
    if(b.tagName=="INPUT")return;
    var c=a.charCode||a.keyCode;
    switch(c){
        case 106:
            sc.o(1);
            break;
        case 107:
            sc.o(-1);
            break;
        case 47:
            sc.R();
            break;
        default:
            return
            }
            return sc.k(a)
    };
    
sc.R=function(){
    var a=sc.h[0];
    a.focus();
    sc.S(a,0,a.value.length)
    };
    
sc.S=function(a,b,c){
    if(a.setSelectionRange)a.setSelectionRange(b,c);
    else{
        var d=a.createTextRange();
        d.moveStart("character",b);
        d.moveEnd("character",c);
        d.select()
        }
    };
sc.o=function(a){
    if(a<0&&sc.a+a>=0||a>0&&sc.a+a<sc.d)sc.f(sc.a+a);
    else if(a>0&&sc.a+a>=sc.d)sc.L();else a<0&&sc.a+a<0&&sc.M()
        };
        
sc.n=function(a){
    if(sc.j)return;
    sc.j=true;
    window.location.replace("#i="+sc.a);
    window.location=a
    };
    
sc.L=function(){
    var a=document.getElementById("nn");
    a!=null&&sc.n(a.parentNode.href)
    };
    
sc.M=function(){
    var a=document.getElementById("np");
    a!=null&&sc.n(a.parentNode.href+"#i=-1")
    };
sc.f=function(a){
    var b=null;
    if(sc.a!=-1)b=sc.c[sc.a].b.firstChild;
    if(a==-1){
        if(sc.a>=0&&sc.a<sc.d)b.style.visibility="hidden";
        sc.a=-1;
        return
    }
    if(a<0||a>=sc.d)return;
    if(sc.a>=0&&sc.a<sc.d)b.style.visibility="hidden";
    var c=sc.a;
    sc.p=sc.a=a;
    var d=sc.c[sc.a].b;
    b=d.firstChild;
    b.style.visibility="visible";
    sc.N(d,c<sc.a)
    };
    
sc.N=function(a,b){
    var c=sc.w(),d=sc.z(),f=c+d,e=sc.v(a),g=a.offsetHeight,i=e+g,h=c;
    if(e<c)h=b?e:sc.a==0?e-d/2+g:e-d/2;
    else if(i>f)h=b?sc.a==sc.d-1?e-d/2+g:e-d/2:i-d;
    window.scrollTo(0,h)
    };
sc.t=function(a){
    return decodeURIComponent(a.replace(/[+]/g,"%20"))
    };
    
sc.Q=function(){
    var a=window.location.search;
    return a?sc.t(/[&?]q=([^&]*)/.exec(a)[1]):""
    };
    
sc.u=function(){
    var a=[],b=document.getElementsByTagName("INPUT");
    for(var c=0;c<b.length;c++)b[c].name=="q"&&a.push(b[c]);
    return a
    };
    
sc.k=function(a){
    if(a.stopPropagation){
        a.stopPropagation();
        a.preventDefault()
        }
        a.cancelBubble=true;
    a.returnValue=false;
    return false
    };
sc.w=function(){
    return self.pageYOffset?self.pageYOffset:document.documentElement&&document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop
    };
    
sc.z=function(){
    return self.innerHeight?self.innerHeight:document.documentElement&&document.documentElement.clientHeight?document.documentElement.clientHeight:document.body.clientHeight
    };
    
sc.v=function(a){
    var b=a.offsetTop;
    while(a=a.offsetParent)b+=a.offsetTop;
    return b
    };
    
sc.I();
