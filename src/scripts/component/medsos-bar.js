class MedsosBar extends HTMLElement{
    
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
      
         
         table {
            margin-left:200px;
            border-collapse: collapse;
            border-spacing: 0;
            width: 70%;
            border: 0px solid #ddd;
            
          }
          
          th, td {
            text-align: center;
            padding: 8px;
            color:white;
          }
          
h2{
   padding-top:8px;
   color:white;
   text-align: center;
}

#medbar{
   background-image:linear-gradient(rgba(0,0,0,0.94),rgba(0,0,0,0.94)),url(./src/images/content2.jpg);
   background-size:cover;
   background-position: center;
   height:300px;
}

 </style>
 


 
<div id="medbar">
<h2>Developer's Social Media</h2>
    <div style="overflow-x:auto;">
    <table>
      <tr>
        <th>Instagram</th>
        <th>Facebook</th>
        <th>twitter</th>
        <th>City</th>
      </tr>

      <tr>
        <td><img src="./src/images/IG.png" width="100" height="100"></td>
        <td><img src="./src/images/facebook.png" width="100" height="100"></td>
        <td><img src="./src/images/twitter.png" width="100" height="100"></td> 
        <td><img src="./src/images/rumah.jpg" width="100" height="100"></td>
 
      </tr>

      <tr>
      <td>dr.arsyad12</td>
      <td>Arsyad Basofil Amri</td>
      <td>Mr_Ar992707</td> 
      <td> Hokaido, Japan Distrik 13</td>

    </tr>

    </table>
  </div>
  </div>

   
   `;
    }
}

customElements.define("medsos-bar",MedsosBar);