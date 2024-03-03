<template>
    <!------------------------------------- FOOTER ------------------------------------------------>
	<footer>
<div class="footer">
<div class="row">
<a href="#">
	<ClientOnly>
    	<Icon name="mdi:facebook" size="24px"  />
    </ClientOnly>
</a>
<a href="#">
	<ClientOnly>
    	<Icon name="mdi:instagram" size="24px"  />
    </ClientOnly>
</a>
<a href="#">
	<ClientOnly>
    	<Icon name="mdi:linkedin" size="24px"  />
    </ClientOnly>
</a>
<a href="#">
	<ClientOnly>
    	<Icon name="ic:outline-tiktok" size="24px"  />
    </ClientOnly>
</a>
</div>

<div class="row">
<ul>
<li><a href="#">Contact us</a></li>
<li><a href="#">Our Services</a></li>
<li><a href="#">Privacy Policy</a></li>
<li><a href="#">Terms & Conditions</a></li>
<li><a href="#">Career</a></li>
</ul>
</div>

<div class="row">
Creati Hogar Copyright © {{ new Date().getFullYear() }} 
</div>
</div>
</footer>
</template>

<style scoped>

.footer{
background:#000;
padding:30px 0px;
/* font-family: 'Play', sans-serif; */
text-align:center;
}

.footer .row{
    display: flex;
    justify-content: center;
    margin: 1% 0%;
    padding: 0.6% 0%;
    color: gray;
    font-size: 0.8em;
    text-align: center;
}

.footer .row a{
text-decoration:none;
color:gray;
transition:0.5s;
width: auto;
margin: 0 5px;
}

.footer .row a:hover{
color:#fff;
}

.footer .row ul{
width:100%;
}

.footer .row ul li{
display:inline-block;
margin:0px 30px;
}

.footer .row a i{
font-size:2em;
margin:0% 1%;
}

@media (max-width:720px){
.footer{
text-align:left;
padding:5%;
}
.footer .row ul li{
display:block;
margin:10px 0px;
}
.footer .row a i{
margin:0% 3%;
}
}

</style>