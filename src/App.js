import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';


function findParents(element, parentClass) {
  const parents = [];
  let currentElement = element.parentElement;

  while (currentElement) {
    if (currentElement.classList.contains(parentClass)) {
      parents.push(currentElement);
    }
    currentElement = currentElement.parentElement;
  }

  return parents;
}


let toggleContainerItem = ( event ) =>{
  var btn_click = event.target;
  var box_todo = findParents( btn_click, 'box_todo' );
  box_todo = box_todo[0];
  var container_item = box_todo.querySelectorAll('.container_item')[0];
  var visible = container_item.style.display;
  if ( visible == "block"  ) {
    btn_click.innerHTML =  "BUKA";
    container_item.style.display = "none";
  }else{
    btn_click.innerHTML =  "TUTUP";
    container_item.style.display = "block";
  }
}

function App() {



  let data_obj = [

  { judul : "Senin", item : [ "Makan", "Mandi",  "Tidur" ] },
  { judul : "Selasa", item : [ "Makan", "Mandi",  "Tidur" ] },
  { judul : "Rabu", item : [ "Makan", "Mandi",  "Tidur" ] },
  { judul : "Kamis", item : [ "Makan", "Mandi",  "Tidur" ] },

  ];

  let box_todo = [];
  for (let i = 0; i < data_obj.length; i++) {
    let row_obj = data_obj[i];
    let judul = row_obj.judul;
    
    let data_item = row_obj.item;
    var item = [];
    for (let j = 0; j < data_item.length; j++) {
      let nilai_item = data_item[ j];
      let item_baru =    
      <div className="item">
      <p> { nilai_item } </p>
      </div>;
      item.push( item_baru );
    }

    let box_todo_baru =  
    <div className="col-sm-3">
    <div key={i} className="box_todo">
    <button className="btn btn-default btn_del"> X </button>
    <div className="header">
    <h2> {judul} </h2>
    <button className="btn btn-secondary" onClick={ (event) => toggleContainerItem( event ) }>
    Lihat
    </button>
    </div>

    <div className="container_item">
    {item}
    </div>
    </div>
    </div>;


    box_todo.push( box_todo_baru );
  }
  
  return (
  <div className="container-fluid">
  <div className="row">
  <div className="col-12 text-center">
  <h3 className="mb-5"> To Do Apps </h3>
  </div>
  <div className="col-12">
  <button className="btn btn-success btn_tambah">
  +
  </button>
  </div>
  </div>
  <div className="row justify-content-center">

  {box_todo}


  </div>
  </div>
  )
}

export default App;
