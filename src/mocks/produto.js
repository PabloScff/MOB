import Logo from '../../assets/iconn.png';
import passa_fita from '../../assets/produtos/adi2.png'
import fita_cetim from '../../assets/produtos/kyrie_7.png'
import laise from '../../assets/produtos/nb480.png'

const produto = {
    topo: {
        titulo: "Detalhes do produto",
    },
    detalhes: {
        nome: "Adidas Campus",
        logo: Logo,
        detalhes: "Modelos disponiveis - 39,40,41,42,43",
        preco: "R$ 880,00",
        botao: "Adicionar na Lista de Desejos",
    },
    itens: {
        titulo: "Itens do Kit",
        lista: [
            {
                id: 1,
                nome: "Kyrie 7",
                imagem: fita_cetim,
            },
            {
                id: 2,
                nome: "Adi2000",
                imagem: passa_fita,
            },
            {
                id: 3,
                nome: "New Balance 480",
                imagem: laise,
            },
        ]
    }
}

export default produto;