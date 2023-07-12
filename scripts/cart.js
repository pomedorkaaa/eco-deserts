function renderCart(items) {
  const $cart = document.querySelector(".cart");
  const $total = document.querySelector(".total");
  $cart.innerHTML = items
    .map(
      (item) => `
      <tr>
        <td>#${item.id}</td>
        <td>${item.name}</td>
        <td>${item.quantity}</td>
        <td style="width: 60px;"> 
          <button type="button" class=""
            onClick="cartLS.quantity(${item.id},1)">+</button>
        </td>
        <td style="width: 60px;"> 
          <button type="button" class=""
            onClick="cartLS.quantity(${item.id},-1)">-</button>
        </td>
        <td class="text-right">$${item.price}</td>
        <td class="text-right"><Button class="" onClick="cartLS.remove(${item.id})">Delete</Button></td>
      </tr>`
    )
    .join("");
  $total.innerHTML = "$" + cartLS.total();
}
renderCart(cartLS.list());
cartLS.onChange(renderCart);

function renderProducts(items) {
  const $list = document.querySelector(".products-list");
  $list.innerHTML = items
    .map(
      (item) => `
      <li class="cart-item">
            <h4>${item.name}</h4>
            <div class="cart-desc">
              <img
                src="${item.img}"
                alt="img"
              />
              <p>${item.desc}</p>
              <p>${item.price}</p>
              <button onclick="cartLS.add({id:${item.id}, name: '${item.name}', price: ${item.price}})">
                add to cart
              </button>
            </div>
          </li>`
    )
    .join("");
}
const products = [
  {
    id: 1,
    name: "shoko",
    price: 500,
    img: "https://sun9-33.userapi.com/impf/c854028/v854028949/157b45/szZ5-iY9JG8.jpg?size=807x675&quality=96&sign=61bfe36c84a01781c322fcf7bcf487f8&c_uniq_tag=sWY43dK7xmR5JbU75PeYYezjVmpMcSOhbZpkP47xjmw&type=album",
    desc: "test description",
    alt: "test alt",
  },
  {
    id: 2,
    name: "shoko2",
    price: 700,
    img: "https://img1.zakaz.md/upload.version_1.0.c1a692f739d85cc2292bb88a54340556.350x350.jpeg",
    desc: "test description",
    alt: "test alt",
  },
  {
    id: 3,
    name: "shoko3",
    price: 100,
    img: "https://img1.zakaz.md/upload.version_1.0.c1a692f739d85cc2292bb88a54340556.350x350.jpeg",
    desc: "test description",
    alt: "test alt",
  },
  {
    id: 4,
    name: "shoko4",
    price: 100,
    img: "https://img1.zakaz.md/upload.version_1.0.c1a692f739d85cc2292bb88a54340556.350x350.jpeg",
    desc: "test description",
    alt: "test alt",
  },
  {
    id: 5,
    name: "shoko5",
    price: 100,
    img: "https://img1.zakaz.md/upload.version_1.0.c1a692f739d85cc2292bb88a54340556.350x350.jpeg",
    desc: "test description",
    alt: "test alt",
  },
  {
    id: 6,
    name: "shoko6",
    price: 100,
    img: "https://img1.zakaz.md/upload.version_1.0.c1a692f739d85cc2292bb88a54340556.350x350.jpeg",
    desc: "test description",
    alt: "test alt",
  },
  {
    id: 7,
    name: "shoko6",
    price: 100,
    img: "https://img1.zakaz.md/upload.version_1.0.c1a692f739d85cc2292bb88a54340556.350x350.jpeg",
    desc: "test description",
    alt: "test alt",
  },
  {
    id: 8,
    name: "shoko6",
    price: 100,
    img: "https://img1.zakaz.md/upload.version_1.0.c1a692f739d85cc2292bb88a54340556.350x350.jpeg",
    desc: "test description",
    alt: "test alt",
  },
];
renderProducts(products);

// Functions
// cartLS.list();
// cartLS.exists(id);
// cartLS.remove(id);
// cartLS.update(id, property, value);
// cartLS.quantity(id, diff);
// cartLS.get(id);
// cartLS.total([reducer]);
// cartLS.destroy();
