class FormBar extends HTMLElement{
    
    
    
    connectedCallback(){
    this.render();
    }

    render(){
        
        this.innerHTML = `

        <style>

        .row{
            padding-top: 50px;
        }

 </style>

 <div class="row">
 <div class="col-12">
     <div class="card">
         <div class="card-header">
             <h5 class="card-title">Input Buku</h5>
         </div>
         <div class="card-body">
             <div class="form-group">
                 <label for="inputBookId">ID Buku</label>
                 <input id="inputBookId" type="number" class="form-control" placeholder="ID Buku">
             </div>
             <div class="form-group">
                 <label for="inputBookTitle">Judul Buku</label>
                 <input id="inputBookTitle" type="text" class="form-control" placeholder="Judul Buku">
             </div>
             <div class="form-group">
                 <label for="inputBookAuthor">Pengarang</label>
                 <input id="inputBookAuthor" type="text" class="form-control" placeholder="Pengarang">
             </div>
             <div class="form-group">
                 <button id="buttonSave" class="btn btn-success">Save</button>
                 <button id="buttonUpdate" class="btn btn-primary">Update</button>
             </div>
         </div>
     </div>
 </div>
</div>

<div id="listMovie" class="row"></div>

   
   `;
    }
}

customElements.define("form-bar",FormBar);