// HTML etiketleri seçildi. # ile id seçimi kullanıldı
let btnDOM = document.querySelector("#liveToastBtn"); //ekle butonu
let listDOM = document.querySelector("#list"); //eklenen todo'lardan oluşan list
let taskDOM = document.querySelector("#task"); //input olarak girilen todo

// Listeye eklendi ve boş ekleme yapılamaz uyarısı ekledik, toast kullanılarak. ekle butonuna tıklandığında if else içeren yazdığımız fonksiyonu dinlemesini söyledik
btnDOM.addEventListener("click", function () {
  if (taskDOM.value.trim() == "") {
    $(".error").toast("show");
    return
  } else {
    $(".success").toast("show");
  }

  // Listeye ekleme yapıldı
  const newTodo = document.createElement("li"); //newTodo isimli değişken li elementi yaratacağı şeklinde tanımlandı. bu değişken yeni todo olacak
  newTodo.innerHTML = taskDOM.value; //taskDOM içine yazılan değer newTodo değişkenine yollandı
  listDOM.appendChild(newTodo); //newTodo listDOM child olacak şekilde sonuna eklendi
  taskDOM.value = "" //input alanı boş hale getirildi

  //Todo üstü çizilerek check edildi
  newTodo.addEventListener("click", function () {
    this.classList.toggle("checked"); //newTodo üzerine tıklandığında css'de tanımlanan checked class'ını toggle eden fonksiyon çalıştırıldı
  })

  //Listede oluşturulan elemanlara çarpı işareti eklendi. 
  let deleteButton = document.createElement("span"); //span türünde deleteButton değişkeni yaratıldı
  newTodo.append(deleteButton); //deleteButton değişkeni newTodo sonuna eklendi
  deleteButton.innerText = "\u00D7" //deleteButton değişkenin içine x işareti yazıldı
  deleteButton.classList.add("close"); //deleteButton değişkenin close css class özelliklerine sahip olması için close class eklendi

  //Listeden silme yapmak
  deleteButton.addEventListener("click", function () {
    this.parentElement.remove(); //deleteButton tıklandığında deleteButton parent elementi olan li elementi silindi
  })
})
