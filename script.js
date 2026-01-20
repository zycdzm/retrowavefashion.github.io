/* ================== GLOBAL ================== */
let cart = [];
let total = 0;
let selectedItem = null;
let selectedStore = "";
let currentCategory = "";

/* ================== NAVIGATION ================== */
function hideAll() {
  document.getElementById("home").style.display = "none";
  document.getElementById("shop").style.display = "none";
  document.getElementById("cart").style.display = "none";
}

function showHome() {
  hideAll();
  document.getElementById("home").style.display = "block";
}

function showShop() {
  hideAll();
  document.getElementById("shop").style.display = "block";
}

function showCart() {
  hideAll();
  document.getElementById("cart").style.display = "block";
}

function goShopFromHome() {
  showShop();
}

/* ================== STORE POPUP ================== */
function openStorePopup() {
  document.getElementById("storePopup").classList.remove("hidden");
}

function closeStorePopup() {
  document.getElementById("storePopup").classList.add("hidden");
}

const stores = [
  "Retro Wave Mall","Retro Wave Panakkukang","Retro Wave MTC","Retro Wave Daya",
  "Retro Wave GTC","Retro Wave Karebosi","Retro Wave Rappocini","Retro Wave Tamalanrea",
  "Retro Wave Maros","Retro Wave Gowa"
];

const storeList = document.getElementById("storeList");
stores.forEach(store => {
  const btn = document.createElement("button");
  btn.innerText = store;
  btn.onclick = () => {
    selectedStore = store;
    alert("Toko dipilih: " + store);
    closeStorePopup();
  };
  storeList.appendChild(btn);
});
 
/* ================== DATA PRODUK ================== */
const dataProduk = {
  baju: [
    { name:"T-Shirt Oversize", price:75000, size:"S, M, L, XL", color:"Hitam, Putih", image:"img/baju1.jpg" },
    { name:"Hoodie Street", price:150000, size:"M, L, XL", color:"Hitam, Navy", image:"img/baju2.jpg" },
    { name:"Kemeja Flanel", price:120000, size:"M, L, XL", color:"Merah, Hijau", image:"img/baju3.jpeg" },
    { name:"Sweater Rajut", price:110000, size:"S, M, L", color:"Cream, Coklat", image:"img/baju4.jpg" },
    { name:"Jaket Denim", price:180000, size:"M, L, XL", color:"Biru, Hitam", image:"img/baju5.jpg" },
    { name:"Kaos Polos", price:60000, size:"S, M, L, XL", color:"Putih, Hitam", image:"img/baju6.jpeg" },
    { name:"Kaos Vintage", price:90000, size:"M, L, XL", color:"Coklat, Abu", image:"img/baju7.jpeg" },
    { name:"Crewneck", price:130000, size:"M, L, XL", color:"Hitam, Maroon", image:"img/baju8.jpg" },
    { name:"Polo Shirt", price:85000, size:"M, L, XL", color:"Putih, Navy", image:"img/baju9.jpeg" },
    { name:"Jaket Parasut", price:170000, size:"L, XL", color:"Hitam, Army", image:"img/baju10.jpg" },

    { name:"T-Shirt Retro", price:80000, size:"S, M, L, XL", color:"Hitam, Kuning", image:"img/baju11.jpg" },
    { name:"Kemeja Denim", price:140000, size:"M, L, XL", color:"Biru", image:"img/baju12.jpg" },
    { name:"Jaket Bomber", price:190000, size:"M, L, XL", color:"Hitam, Hijau", image:"img/baju13.jpg" },
    { name:"Kaos Graphic", price:95000, size:"M, L, XL", color:"Hitam, Putih", image:"img/baju14.jpeg" },
    { name:"Hoodie Zipper", price:160000, size:"M, L, XL", color:"Abu, Hitam", image:"img/baju15.jpeg" },
    { name:"Kemeja Casual", price:115000, size:"M, L", color:"Putih, Coklat", image:"img/baju16.jpg" },
    { name:"Long Sleeve Tee", price:90000, size:"M, L, XL", color:"Hitam, Navy", image:"img/baju17.jpg" },
    { name:"Jaket Varsity", price:200000, size:"L, XL", color:"Hitam, Merah", image:"img/baju18.jpg" },
    { name:"Kaos Crop", price:70000, size:"S, M", color:"Putih, Pink", image:"img/baju19.jpeg" },
    { name:"T-Shirt Basic", price:65000, size:"S, M, L, XL", color:"Putih, Hitam", image:"img/baju20.jpg" }
  ],

  celana: [
    { name:"Celana Jeans Slim", price:150000, size:"28,29,30,30,31,32,33,34", color:"Biru", image:"img/celana1.jpg" },
    { name:"Celana Chino", price:140000, size:"28,29,30,30,31,32,33,34", color:"Khaki", image:"img/celana2.jpg" },
    { name:"Celana Cargo", price:160000, size:"M, L, XL", color:"Army", image:"img/celana3.jpg" },
    { name:"Celana Jogger", price:120000, size:"M, L, XL", color:"Hitam", image:"img/celana4.jpg" },
    { name:"Celana Pendek", price:80000, size:"M, L, XL", color:"Abu", image:"img/celana5.jpeg" },
    { name:"Celana Training", price:100000, size:"M, L, XL", color:"Hitam", image:"img/celana6.jpeg" },
    { name:"Celana Kulot", price:130000, size:"M, L", color:"Coklat", image:"img/celana7.jpg" },
    { name:"Celana Denim Hitam", price:155000, size:"28-34", color:"Hitam", image:"img/celana8.jpeg" },
    { name:"Celana Linen", price:145000, size:"M, L", color:"Cream", image:"img/celana9.jpeg" },
    { name:"Celana Formal", price:170000, size:"28,29,30,30,31,32,33,34", color:"Hitam", image:"img/celana10.jpg" },

    { name:"Celana Cargo Pendek", price:90000, size:"M, L", color:"Army", image:"img/celana11.jpg" },
    { name:"Celana Jeans Robek", price:160000, size:"28,29,30,30,31,32,33,34", color:"Biru", image:"img/celana12.jpeg" },
    { name:"Celana Streetwear", price:150000, size:"M, L, XL", color:"Hitam", image:"img/celana13.jpg" },
    { name:"Celana Oversize", price:140000, size:"M, L, XL", color:"Abu", image:"img/celana14.jpg" },
    { name:"Celana High Waist", price:135000, size:"M, L", color:"Cream", image:"img/celana15.jpg" },
    { name:"Celana Tactical", price:175000, size:"M, L, XL", color:"Hitam", image:"img/celana16.jpeg" },
    { name:"Celana Workwear", price:165000, size:"M, L, XL", color:"Coklat", image:"img/celana17.jpg" },
    { name:"Celana Basic", price:110000, size:"M, L, XL", color:"Hitam", image:"img/celana18.jpg" },
    { name:"Celana Fashion", price:155000, size:"M, L", color:"Putih", image:"img/celana19.jpg" },
    { name:"Celana Casual", price:130000, size:"M, L", color:"Navy", image:"img/celana20.jpeg" }
  ],

  sepatu: [
    { name:"Sneakers Putih", price:250000, size:"31,32,33,34,35,36,37,38,39,40", color:"Putih", image:"img/sepatu1.jpg" },
    { name:"Sneakers Hitam", price:255000, size:"31,32,33,34,35,36,37,38,39,40", color:"Hitam", image:"img/sepatu2.jpg" },
    { name:"Sepatu Vans Style", price:270000, size:"31,32,33,34,35,36,37,38,39,40", color:"Hitam", image:"img/sepatu3.jpg" },
    { name:"Sepatu Converse Style", price:280000, size:"31,32,33,34,35,36,37,38,39,40", color:"Putih", image:"img/sepatu4.jpeg" },
    { name:"Sepatu Running", price:300000, size:"39,40,41,42,43,44,45,46,47,48", color:"Abu", image:"img/sepatu5.jpg" },
    { name:"Sepatu Basket", price:350000, size:"40,41,42,43,44,45,46,47,48,49,50", color:"Merah", image:"img/sepatu6.jpg" },
    { name:"Sepatu Slip On", price:220000, size:"38,39,40,41,42,43,44", color:"Hitam", image:"img/sepatu7.jpg" },
    { name:"Sepatu Boots", price:400000, size:"39,40,41,42,43,44,45,46,47,48,49,50", color:"Coklat", image:"img/sepatu8.jpg" },
    { name:"Sepatu Sandal", price:150000, size:"38,39,40,41,42,43,44,45,46,47,48", color:"Hitam", image:"img/sepatu9.jpg" },
    { name:"Sepatu Casual", price:240000, size:"38,39,40,41,42,43,44", color:"Navy", image:"img/sepatu10.jpg" },

    { name:"Sepatu Sport", price:310000, size:"39,40,41,42,43,44,45,46,47,48", color:"Hitam", image:"img/sepatu11.jpg" },
    { name:"Sepatu Street", price:260000, size:"38,39,40,41,42,43,44", color:"Putih", image:"img/sepatu12.jpeg" },
    { name:"Sepatu Trendy", price:290000, size:"38,39,40,41,42,43,44", color:"Abu", image:"img/sepatu13.jpeg" },
    { name:"Sepatu Retro", price:275000, size:"38,39,40,41,42,43,44", color:"Coklat", image:"img/sepatu14.jpg" },
    { name:"Sepatu Fashion", price:320000, size:"38,39,40,41,42,43,44,45", color:"Hitam", image:"img/sepatu15.jpeg" },
    { name:"Sepatu Kulit", price:450000, size:"38,39,40,41,42,43,44", color:"Coklat", image:"img/sepatu16.jpg" },
    { name:"Sepatu Formal", price:420000, size:"38,39,40,41,42,43,44", color:"Hitam", image:"img/sepatu17.jpeg" },
    { name:"Sepatu Outdoor", price:380000, size:"40.41,42,43,44", color:"Army", image:"img/sepatu18.jpeg" },
    { name:"Sepatu Hiking", price:500000, size:"40,41,42,43,44,45", color:"Coklat", image:"img/sepatu19.jpg" },
    { name:"Sepatu Basic", price:230000, size:"38,39,40,41,42,43", color:"Putih", image:"img/sepatu20.jpeg" }
  ]
};  
/* ================== SHOP ================== */
function showCategory(kategori) {
  currentCategory = kategori;
  showShop();

  const title = document.getElementById("category-title");
  const list = document.getElementById("product-list");

  title.innerText = kategori.toUpperCase();
  list.innerHTML = "";

  dataProduk[kategori].forEach(item => {
    list.innerHTML += `
      <div class="card">
        <img src="${item.image}">
        <h3>${item.name}</h3>
        <p>Rp ${item.price.toLocaleString()}</p>
        <button class="add-btn" onclick='openVariantPopup(${JSON.stringify(item)})'>
          Tambah ke Keranjang
        </button>
      </div>
    `;
  });
}

/* ================== VARIANT POPUP ================== */
function openVariantPopup(item) {
  selectedItem = item;
  document.getElementById("variant-title").innerText = item.name;

  const sizeSelect = document.getElementById("variant-size");
  const colorSelect = document.getElementById("variant-color");

  sizeSelect.innerHTML = "";
  colorSelect.innerHTML = "";

  item.size.split(",").forEach(s => {
    sizeSelect.innerHTML += `<option value="${s.trim()}">${s.trim()}</option>`;
  });

  item.color.split(",").forEach(c => {
    colorSelect.innerHTML += `<option value="${c.trim()}">${c.trim()}</option>`;
  });

  document.getElementById("variantPopup").classList.remove("hidden");
}

function closeVariantPopup() {
  document.getElementById("variantPopup").classList.add("hidden");
}

function confirmAddToCart() {
  const size = document.getElementById("variant-size").value;
  const color = document.getElementById("variant-color").value;

  const found = cart.find(p =>
    p.name === selectedItem.name &&
    p.size === size &&
    p.color === color
  );

  if (found) {
    found.qty++;
  } else {
    cart.push({
      ...selectedItem,
      size,
      color,
      qty: 1
    });
  }

  updateCart();
  updateCartCount();
  closeVariantPopup();

  // 🔥 INI YANG KAMU MAU:
  // Tetap di halaman SHOP, TIDAK pindah ke Cart
  showShop();
  showCategory(currentCategory);
}

/* ================== CART ================== */
function updateCartCount() {
  const count = document.getElementById("cart-count");
  let totalQty = 0;
  cart.forEach(item => totalQty += item.qty);
  count.innerText = totalQty;

  // animasi bounce
  count.classList.add("cart-bounce");
  setTimeout(() => count.classList.remove("cart-bounce"), 300);
}

function updateCart() {
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = "";
  let subtotal = 0;

  if (cart.length === 0) {
    cartList.innerHTML = `<p class="empty-cart">Keranjang masih kosong</p>`;
    return;
  }

  cart.forEach((item, index) => {
    const sub = item.price * item.qty;
    subtotal += sub;

    cartList.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">

        <div class="cart-info">
          <h4>${item.name}</h4>
          <p>Ukuran: ${item.size} | Warna: ${item.color}</p>
          <p>${item.qty} x Rp ${item.price.toLocaleString()}</p>
          <p><b>Subtotal:</b> Rp ${sub.toLocaleString()}</p>
        </div>

        <!-- Tombol Hapus (-) -->
        <button class="remove-btn" onclick="removeItem(${index})">−</button>
      </div>
    `;
  });

  const tax = subtotal * 0.1;
  total = subtotal + tax;

  document.getElementById("subtotal").innerText = subtotal.toLocaleString();
  document.getElementById("tax").innerText = tax.toLocaleString();
  document.getElementById("total").innerText = total.toLocaleString();
  document.getElementById("total-item").innerText = cart.length;
}
function removeItem(index) {
  cart.splice(index, 1); // hapus 1 item berdasarkan index
  updateCart();         // refresh tampilan cart
}


/* ================== PAYMENT ================== */
function selectPayment(type) {
  ["qris","bank","cash"].forEach(p => {
    document.getElementById(p+"-content").classList.add("hidden");
    document.getElementById("btn-"+p).classList.remove("active");
  });

  document.getElementById(type+"-content").classList.remove("hidden");
  document.getElementById("btn-"+type).classList.add("active");
}

function generateKode() {
  const name = document.getElementById("cust-name").value.trim();
  const email = document.getElementById("cust-email").value.trim();
  const kodeBox = document.getElementById("kode-pesanan");

  if (!name || !email) {
    kodeBox.innerText = "Masukkan nama & email";
    return;
  }

  const kode = name.substring(0,3).toUpperCase() + "-" + Math.floor(100000 + Math.random()*900000);
  kodeBox.innerText = kode;

  // tampilkan popup resi
  showResiPopup(name, email, kode);
}


/* ================== FINISH ORDER ================== */
function finishOrder() {
  alert("Pesanan berhasil diproses!");
  cart = [];
  total = 0;
  updateCart();
  updateCartCount();
  showHome();
}

/* ================== INIT ================== */
function showResiPopup(nama, email, kode) {
  document.getElementById("resi-nama").innerText = nama;
  document.getElementById("resi-email").innerText = email;
  document.getElementById("resi-kode").innerText = kode;
  document.getElementById("resi-total").innerText = total.toLocaleString();

  const now = new Date();
  document.getElementById("resi-tanggal").innerText =
    now.toLocaleDateString("id-ID") + " " + now.toLocaleTimeString("id-ID");

  document.getElementById("resiPopup").classList.remove("hidden");
}

function closeResiPopup(){
  document.getElementById("resiPopup").classList.add("hidden");
}
function downloadResi() {
  const resi = document.getElementById("resi-content");

  const text = `
==========================
      RESI PEMBAYARAN
==========================

Nama    : ${document.getElementById("resi-nama").innerText}
Email   : ${document.getElementById("resi-email").innerText}
Kode    : ${document.getElementById("resi-kode").innerText}
Total   : Rp ${document.getElementById("resi-total").innerText}
Tanggal : ${document.getElementById("resi-tanggal").innerText}

--------------------------
Catatan:
Resi ini hanya berlaku
selama 1 x 24 jam.
Harap segera lakukan
pembayaran di outlet.
==========================
  `;

  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "resi_pembayaran.txt";
  a.click();

  URL.revokeObjectURL(url);
}
function downloadResiImage() {
  const resi = document.getElementById("resi-content");

  html2canvas(resi).then(canvas => {
    const link = document.createElement("a");
    link.download = "RetroWave-style.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}
let selectedBank = "";

function openTransferPopup(bank){
  selectedBank = bank;
  document.getElementById("bank-terpilih").innerText = bank;
  document.getElementById("transferPopup").classList.remove("hidden");
}

function closeTransferPopup(){
  document.getElementById("transferPopup").classList.add("hidden");
}
function submitTransfer(){
  const bukti = document.getElementById("bukti-transfer").files[0];
  const store = document.getElementById("pickup-store").value;

  if(!bukti || !store){
    alert("Upload bukti transfer dan pilih toko pengambilan!");
    return;
  }

  closeTransferPopup();

  alert("Bukti transfer dikirim.\nPembayaran akan dicek maksimal 1 x 24 jam.");

  // simulasi verifikasi admin (misalnya 3 detik)
  setTimeout(() => {
    generateResiTransfer(store);
  }, 3000);
}
function generateResiTransfer(store){
  const name = document.getElementById("cust-name")?.value || "Pelanggan";
  const email = document.getElementById("cust-email")?.value || "-";

  const kode = "TRF-" + Math.floor(100000 + Math.random()*900000);

  document.getElementById("tr-nama").innerText = name;
  document.getElementById("tr-email").innerText = email;
  document.getElementById("tr-bank").innerText = selectedBank;
  document.getElementById("tr-store").innerText = store;
  document.getElementById("tr-kode").innerText = kode;
  document.getElementById("tr-total").innerText = total.toLocaleString();

  document.getElementById("resiTransferPopup").classList.remove("hidden");
}

function closeResiTransfer(){
  document.getElementById("resiTransferPopup").classList.add("hidden");
}

showHome();
