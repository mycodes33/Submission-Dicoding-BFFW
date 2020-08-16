class HeadBar extends HTMLElement{
    
    constructor(){
super();
this.shadowDOM=this.attachShadow({mode:"open"});
    }
    
    
    connectedCallback(){
    this.render();
    }

    render(){
        
        this.shadowDOM.innerHTML = `

        <style>
header {
    background-image:linear-gradient(rgba(204, 44, 44, 0.5),rgba(204, 44, 44,0.5)),url(./src/images/header.jpg);
    background-size:100% 100%;
    background-position: top;
	 height: 80px;
    padding-top: 150px;
   
 }

 </style>

 <header id ="header">
 </header>
   
   `;
    }
}

customElements.define("head-bar",HeadBar);