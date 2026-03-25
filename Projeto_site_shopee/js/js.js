// ==================== DADOS DOS PRODUTOS ====================
 const eyes = document.querySelectorAll('.eye');
        const eyelids = document.querySelectorAll('.eyelid');

        // Movimento dos olhos seguindo o mouse
        document.addEventListener('mousemove', (e) => {
            eyes.forEach(eye => {
                const pupil = eye.querySelector('.pupil');
                const rect = eye.getBoundingClientRect();
                const eyeX = rect.left + rect.width / 2;
                const eyeY = rect.top + rect.height / 2;
                
                const angle = Math.atan2(e.clientY - eyeY, e.clientX - eyeX);
                const distance = 6; // Menor para caber no header
                
                const x = Math.cos(angle) * distance;
                const y = Math.sin(angle) * distance;
                
                pupil.style.transform = `translate(${x}px, ${y}px)`;
            });
        });

        // Função para piscar
        function autoBlink() {
            eyelids.forEach(el => el.classList.add('blink'));
            setTimeout(() => {
                eyelids.forEach(el => el.classList.remove('blink'));
            }, 200);
            setTimeout(autoBlink, Math.random() * (5000 - 2000) + 2000);
        }
        autoBlink();     

let produtos = [
            { id: 1, nome: "Notebook Gamer Dell", preco: 4599, categoria: "Tecnologia", img: "https://m.media-amazon.com/images/I/61e2naUW+RL._AC_SX679_.jpg" },
            { id: 2, nome: "Smartphone Samsung Galaxy", preco: 2199, categoria: "Tecnologia", img: "https://http2.mlstatic.com/D_NQ_NP_2X_792472-MLA100025549859_122025-F.webp" },
            { id: 3, nome: "Camiseta Básica Algodão", preco: 59, categoria: "Moda", img: "data:image/jpeg;base64,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" },
            { id: 4, nome: "Tênis Nike Air Force", preco: 399, categoria: "Moda", img: "data:image/jpeg;base64,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" },
            { id: 5, nome: "Sofá 3 Lugares Moderno", preco: 1299, categoria: "Casa", img: "https://th.bing.com/th?id=OPHS.lpQee1Fpik%2bpLw474C474&w=140&h=140&pcl=f5f5f5&o=2&dpr=1.3&pid=21.1"},
            { id: 6, nome: "Liquidificador Philco", preco: 189, categoria: "Casa", img: "data:image/jpeg;base64,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" },
            { id: 7, nome: "Como treinar seu dragão", preco: 39, categoria: "Livros", img: "https://m.media-amazon.com/images/I/91bhw2nsuyL._SY466_.jpg" },
            { id: 8, nome: "Perfume Masculino 100ml", preco: 400, categoria: "Beleza", img: "data:image/jpeg;base64,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" },
            { id: 9, nome: "Fone Bluetooth JBL", preco: 299, categoria: "Tecnologia", img: "data:image/jpeg;base64,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" },
            { id: 10, nome: "Bolsa Feminina Couro", preco: 179, categoria: "Moda", img: "https://th.bing.com/th/id/OIP.cODn9KUbux1IIwWwLRt7-QHaHa?w=199&h=199&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { id: 11, nome: "Cafeteira Elétrica", preco: 249, categoria: "Casa", img: "https://a-static.mlcdn.com.br/1500x1500/cafeteira-eletrica-love-your-day-cmm20-electrolux-127v-preto-prata/madeiramadeira-openapi/295024/62af788fbd8c41a5868d591bca95de29.jpg" },
            { id: 12, nome: "Ps5", preco: 3599, categoria: "Tecnologia", img: "https://m.media-amazon.com/images/I/619BkvKW35L._SL1500_.jpg" },
            { id: 13, nome: "Pijama", preco: 89, categoria: "Moda", img: "https://colegiata.es/media/products/d28d76b4592325c3bafc1840d4bb2957/3522-karlus-pijama-mujer-abierto-manga-larga-algodon-poliester-01.jpg"},
            { id: 14, nome: "Smartwatch Xiaomi Mi Band", preco: 149, categoria: "Tecnologia", img: "https://m.media-amazon.com/images/I/61kFL7ywsZS._AC_SL1500_.jpg" },
            { id: 15, nome: "Jaqueta Jeans Masculina", preco: 129, categoria: "Moda", img: "https://m.media-amazon.com/images/I/71qfvYDDyzL._AC_SL1500_.jpg"},
            { id: 16, nome: "Paleta de Maquiagem", preco: 899, categoria: "Moda", img: "data:image/jpeg;base64,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" },
            { id: 17, nome: "Livro 'Sapiens' de Yuval Noah Harari", preco: 49, categoria: "Livros", img: "https://m.media-amazon.com/images/I/717sO7vkyUL._SL1500_.jpg" },
            { id: 18, nome: "Kit Skincare Facial", preco: 149, categoria: "Beleza", img: "https://tse4.mm.bing.net/th/id/OIP.cPdybp3_RutayG6eXNAVtQHaJ3?rs=1&pid=ImgDetMain&o=7&rm=3" },
            { id: 19, nome: "Headphone Sony WH-1000XM4", preco: 1299, categoria: "Tecnologia", img: "https://i.pinimg.com/originals/29/da/d9/29dad9f1d397aee688af4b7ac663b9f8.jpg" },
            { id: 20, nome: "Vestido Floral Feminino", preco: 89, categoria: "Moda", img: "https://defrenteparaomar.com/wp-content/02-moda/201712-festas-floral/11a-vestido-flora.jpg" },
            { id: 21, nome: "Armário Multiuso para Cozinha", preco: 499, categoria: "Casa", img: "https://tse2.mm.bing.net/th/id/OIP.5DNS01Lz-HyxAYr-pFbJqQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" },
            { id: 22, nome: "Livro 'O Alquimista' de Paulo Coelho", preco: 34, categoria: "Livros", img: "https://images-na.ssl-images-amazon.com/images/I/81slUinjTlS.jpg" },
            { id: 23, nome: "Kit Cabelo Saudável", preco: 129, categoria: "Beleza", img: "https://m.media-amazon.com/images/I/51kv4fb-+IL._AC_SY355_.jpg" },
        ];
 
        let carrinho = [];
        let pagamentoSelecionado = null;
        let usuarioLogado = false;
 
        // ==================== FUNÇÕES ====================
        function preencherCategorias() {
            const ul = document.getElementById("category-list");
            ul.innerHTML = `<li onclick="filtrarPorCategoria('Todos')" class="px-4 py-3 rounded-2xl hover:bg-indigo-50 cursor-pointer font-medium text-indigo-700">Todos os produtos</li>`;
            const cats = [...new Set(produtos.map(p => p.categoria))];
            cats.forEach(cat => {
                ul.innerHTML += `<li onclick="filtrarPorCategoria('${cat}')" class="px-4 py-3 rounded-2xl hover:bg-gray-100 cursor-pointer text-gray-700">${cat}</li>`;
            });
        }
 
        function renderizarProdutos(filtrados) {
            const grid = document.getElementById("products-grid");
            grid.innerHTML = "";
            filtrados.forEach(prod => {
                const card = document.createElement("div");
 
card.className = "product-card bg-white rounded-3xl overflow-hidden border";
                card.innerHTML = `
                    <img src="${prod.img}" class="w-full h-56 object-cover">
                    <div class="p-5">
                        <p class="text-xs text-gray-500">${prod.categoria}</p>
                        <h3 class="font-semibold text-lg mt-1">${prod.nome}</h3>
                        <p class="text-2xl font-bold text-indigo-600 mt-3">R$ ${prod.preco.toFixed(2).replace('.', ',')}</p>
                        <button onclick="adicionarAoCarrinho(${prod.id})" class="mt-5 w-full bg-black hover:bg-gray-800 text-white py-3 rounded-2xl text-sm font-medium">Adicionar ao carrinho</button>
                    </div>
                `;
                grid.appendChild(card);
            });
        }
 
        function filtrarPorCategoria(cat) {
            document.getElementById("current-category").textContent = cat === "Todos" ? "Todos os produtos" : cat;
            if (cat === "Todos") renderizarProdutos(produtos);
            else renderizarProdutos(produtos.filter(p => p.categoria === cat));
        }
 
        function filterProducts() {
            const termo = document.getElementById("search-input").value.toLowerCase();
            const filtrados = produtos.filter(p => p.nome.toLowerCase().includes(termo) || p.categoria.toLowerCase().includes(termo));
            renderizarProdutos(filtrados);
        }
 
        function adicionarAoCarrinho(id) {
            const prod = produtos.find(p => p.id === id);
            const existente = carrinho.find(i => i.id === id);
            if (existente) existente.quantidade++;
            else carrinho.push({...prod, quantidade: 1});
            atualizarCarrinho();
            alert(`${prod.nome} adicionado!`);
        }
 
function atualizarCarrinho() {
            const count = document.getElementById("cart-count");
            count.textContent = carrinho.reduce((a, i) => a + i.quantidade, 0);
 
            const container = document.getElementById("cart-items");
            container.innerHTML = "";
            let subtotal = 0;
 
            carrinho.forEach((item, index) => {
                const totalItem = item.preco * item.quantidade;
                subtotal += totalItem;
                const div = document.createElement("div");
                div.className = "flex gap-4";
                div.innerHTML = `
                    <img src="${item.img}" class="w-16 h-16 object-cover rounded-2xl">
                    <div class="flex-1">
                        <p class="font-medium text-sm">${item.nome}</p>
                        <p class="text-xs text-gray-500">R$ ${item.preco.toFixed(2).replace('.', ',')}</p>
                        <div class="flex items-center gap-3 mt-2">
                            <button onclick="alterarQuantidade(${index}, -1)" class="w-6 h-6 bg-gray-100 rounded-lg">-</button>
                            <span>${item.quantidade}</span>
                            <button onclick="alterarQuantidade(${index}, 1)" class="w-6 h-6 bg-gray-100 rounded-lg">+</button>
                        </div>
                    </div>
                    <div class="text-right font-semibold">R$ ${totalItem.toFixed(2).replace('.', ',')}</div>
                `;
                container.appendChild(div);
            });
            document.getElementById("cart-subtotal").textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
        }
 
        function alterarQuantidade(index, delta) {
            carrinho[index].quantidade += delta;
            if (carrinho[index].quantidade < 1) carrinho[index].quantidade = 1;
            atualizarCarrinho();
        }
 
        function toggleCart() {
            document.getElementById("cart-sidebar").classList.toggle("open");
        }
 
        function showLoginModal() {
            document.getElementById("login-modal").classList.remove("hidden");
            document.getElementById("login-modal").classList.add("flex");
        }
 
        function hideLoginModal() {
            document.getElementById("login-modal").classList.add("hidden");
            document.getElementById("login-modal").classList.remove("flex");
        }
 
        function doLogin() {
            if (document.getElementById("login-user").value === "admin" && document.getElementById("login-pass").value === "123") {
                usuarioLogado = true;
                document.getElementById("login-status").innerHTML = `Olá, Admin <i class="fa-solid fa-check text-green-500"></i>`;
                hideLoginModal();
                alert("Login feito com sucesso! 🎉");
            } else {
                alert("Usuário ou senha errado. Use: admin / 123");
            }
        }
 
        function showCheckoutModal() {
            if (carrinho.length === 0) return alert("Carrinho vazio!");
            if (!usuarioLogado) { alert("Faça login primeiro!"); showLoginModal(); return; }
            document.getElementById("checkout-modal").classList.remove("hidden");
            document.getElementById("checkout-modal").classList.add("flex");
            // preenche itens do checkout (código completo)
            const container = document.getElementById("checkout-cart-items");
            container.innerHTML = "";
            let subtotal = 0;
            carrinho.forEach(item => {
                const total = item.preco * item.quantidade;
                subtotal += total;
                const div = document.createElement("div");
                div.className = "flex justify-between";
                div.innerHTML = `<div><p>${item.nome} × ${item.quantidade}</p></div><p>R$ ${total.toFixed(2).replace('.', ',')}</p>`;
                container.appendChild(div);
            });
            document.getElementById("checkout-subtotal").textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
            calcularTotalCheckout();
 
}
 
        function hideCheckoutModal() {
            document.getElementById("checkout-modal").classList.add("hidden");
            document.getElementById("checkout-modal").classList.remove("flex");
        }
 
        function selectPayment(btn) {
            document.querySelectorAll('.payment-btn').forEach(b => b.classList.remove('border-indigo-600'));
            btn.classList.add('border-indigo-600');
            pagamentoSelecionado = btn.dataset.type;
            document.getElementById("parcelas-container").classList.toggle("hidden", pagamentoSelecionado !== "cartao");
            calcularTotalCheckout();
        }
 
        function calcularTotalCheckout() {
            let subtotal = carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
            let desconto = (pagamentoSelecionado === "pix" || pagamentoSelecionado === "dinheiro") ? subtotal * 0.05 : 0;
            let frete = 0;
            const entrega = document.getElementById("tipo-entrega").value;
            if (entrega === "normal") frete = 15;
            else if (entrega === "expressa") frete = 30;
            const total = subtotal - desconto + frete;
            document.getElementById("desconto-pagamento").textContent = `- R$ ${desconto.toFixed(2).replace('.', ',')}`;
            document.getElementById("checkout-frete").textContent = `R$ ${frete.toFixed(2).replace('.', ',')}`;
            document.getElementById("checkout-total").textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
        }
 
        async function buscarCEP() {
            let cep = document.getElementById("cliente-cep").value.trim().replace(/\D/g, '');
            if (cep.length !== 8) return alert("CEP inválido!");
            try {
                const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
                const data = await res.json();
                if (data.erro) throw "";
                document.getElementById("logradouro").textContent = data.logradouro;
                document.getElementById("bairro-cidade").textContent = `${data.localidade} - ${data.uf}`;
                document.getElementById("endereco-preenchido").classList.remove("hidden");
            } catch { alert("CEP não encontrado"); }
        }
 
        function finalizarCompra() {
            const campos = ["cliente-nome","cliente-cpf","cliente-email","cliente-tel","cliente-cep"];
            if (campos.some(id => !document.getElementById(id).value.trim())) return alert("Preencha todos os campos obrigatórios!");
            if (!pagamentoSelecionado) return alert("Escolha a forma de pagamento!");
            const total = document.getElementById("checkout-total").textContent;
            alert(`🎉 PEDIDO REALIZADO!\nTotal: ${total}\nObrigado pela compra!`);
            carrinho = [];
            atualizarCarrinho();
            hideCheckoutModal();
            toggleCart();
        }
 
        // ==================== INICIAR ====================
        window.onload = function() {
            preencherCategorias();
            renderizarProdutos(produtos);
        };
