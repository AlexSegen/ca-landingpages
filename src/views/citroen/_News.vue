<template>
    <div class="container">
        <div class="row row-news wow animation fade-in ">
            <div class="col-sm-4" v-for="(item, index) in news" :key="'ItemKey_'+index">
                <a class="news_item" :href="item.url" target="_blank">
                    <figure class="news_item-figure" >
                        <img :src="item.imgURL" alt="">
                    </figure>
                    <h4 class="news_item-title ">{{item.title}}</h4>
                    <p class="news_item-description">{{item.content}}</p>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'News',
    data() {
        return {
            news: [
                {
                    url: 'https://www.chileautos.cl/noticias/detalle/all-new-blazer-el-suv-de-chevrolet-con-adn-deportivo--15962/',
                    title: 'All New Blazer, el SUV de Chevrolet con ADN Deportivo',
                    content: 'Presentada recientemente en Chile, All New Blazer llega a reforzar el line-up de la marca, convirtiéndose no solamente en el octavo SUV del portafolio, sino que en el modelo más equipado tecnológicamente de toda su gama, con un motor V6 de 3,6 litros que da cuenta de su ADN deportivo.',
                    imgURL: 'https://latam-editorial.pxcrush.net/chileautos/general/editorial/blazer-portada.jpg?width=480&height=320&pxc_method=crop'
                },
                {
                    url: 'https://www.chileautos.cl/noticias/detalle/all-new-blazer-el-suv-de-chevrolet-con-adn-deportivo--15962/',
                    title: 'All New Blazer, el SUV de Chevrolet con ADN Deportivo',
                    content: 'Presentada recientemente en Chile, All New Blazer llega a reforzar el line-up de la marca, convirtiéndose no solamente en el octavo SUV del portafolio, sino que en el modelo más equipado tecnológicamente de toda su gama, con un motor V6 de 3,6 litros que da cuenta de su ADN deportivo.',
                    imgURL: 'https://latam-editorial.pxcrush.net/chileautos/general/editorial/blazer-portada.jpg?width=480&height=320&pxc_method=crop'
                },
                {
                    url: 'https://www.chileautos.cl/noticias/detalle/all-new-blazer-el-suv-de-chevrolet-con-adn-deportivo--15962/',
                    title: 'All New Blazer, el SUV de Chevrolet con ADN Deportivo',
                    content: 'Presentada recientemente en Chile, All New Blazer llega a reforzar el line-up de la marca, convirtiéndose no solamente en el octavo SUV del portafolio, sino que en el modelo más equipado tecnológicamente de toda su gama, con un motor V6 de 3,6 litros que da cuenta de su ADN deportivo.',
                    imgURL: 'https://latam-editorial.pxcrush.net/chileautos/general/editorial/blazer-portada.jpg?width=480&height=320&pxc_method=crop'
                }
            ]
        }
    }

}
</script>

<style>

</style>
