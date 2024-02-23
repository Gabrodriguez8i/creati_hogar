<template>
    <div class="select">
            <div class="select_btnBx">
                <span class="select_btnBx_text">Select Language</span>
                <span class="select_btnBx_icon">
                    <ClientOnly>
                        <Icon name="ic:outline-keyboard-arrow-up" size="24px"/>
                    </ClientOnly>
                </span>
            </div>
            <ul class="select_list">
                <li class="select_list_item">
                    <span class="select_list_item_checkbox">
                        <ClientOnly>
                            <Icon name="ic:baseline-check" size="24px" class="select_list_item_checkbox_checkIcon" />
                        </ClientOnly>
                    </span>
                    <span class="item-text">HTML & CSS</span>
                </li>
                <li class="select_list_item">
                    <span class="select_list_item_checkbox">
                        <ClientOnly>
                            <Icon name="ic:baseline-check" size="24px" class="select_list_item_checkbox_checkIcon" />
                        </ClientOnly>
                    </span>
                    <span class="item-text">Bootstrap</span>
                </li>
                <li class="select_list_item">
                    <span class="select_list_item_checkbox">
                        <ClientOnly>
                            <Icon name="ic:baseline-check" size="24px" class="select_list_item_checkbox_checkIcon" />
                        </ClientOnly>
                    </span>
                    <span class="item-text">JavaScript</span>
                </li>
                <li class="select_list_item">
                    <span class="select_list_item_checkbox">
                        <ClientOnly>
                            <Icon name="ic:baseline-check" size="24px" class="select_list_item_checkbox_checkIcon" />
                        </ClientOnly>
                    </span>
                    <span class="item-text">Node.Js</span>
                </li>
                <li class="select_list_item">
                    <span class="select_list_item_checkbox">
                        <ClientOnly>
                            <Icon name="ic:baseline-check" size="24px" class="select_list_item_checkbox_checkIcon" />
                        </ClientOnly>
                    </span>
                    <span class="item-text">React JS</span>
                </li>
                <li class="select_list_item">
                    <span class="select_list_item_checkbox">
                        <ClientOnly>
                            <Icon name="ic:baseline-check" size="24px" class="select_list_item_checkbox_checkIcon" />
                        </ClientOnly>
                    </span>
                    <span class="item-text">Mango DB</span>
                </li>
            </ul>
    </div>

</template>

<script setup>
onMounted(() => {
    const selectBtn = document.querySelector(".select_btnBx"),
      items = document.querySelectorAll(".select_list_item");
selectBtn.addEventListener("click", () => {
    selectBtn.classList.toggle("open");
});
items.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");
        let checked = document.querySelectorAll(".select_list_item_checkbox"),
            btnText = document.querySelector(".select_btnBx_text");
            if(checked && checked.length > 0){
                btnText.innerText = `${checked.length} Selected`;
            }else{
                btnText.innerText = "Select Language";
            }
    });
})
})
</script>

<style lang="scss" scoped>
    .select{
        position: absolute;
    max-width: 320px;
    width: 200px;
    z-index: 3;
    top: 0;
    right: 0;
}
.select_btnBx{
    display: flex;
    height: 50px;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    border-radius: 8px;
    cursor: pointer;
    color: white;
    background-color: hsl(0deg 0% 17.9%);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}
.select_btnBx .select_btnBx_text{
    font-size: 14px;
    font-weight: 400;
}
.select_btnBx .select_btnBx_icon{
    display: flex;
    height: 21px;
    width: 21px;
    color: #fff;
    font-size: 14px;
    border-radius: 50%;
    background: gray;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
}
.select_btnBx.open .select_btnBx_icon{
    transform: rotate(-180deg);
}
.select_list{
    position: relative;
    margin-top: 15px;
    border-radius: 8px;
    padding: 16px;
    background-color: hsl(0deg 0% 17.9%);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    display: none;
}
.select_btnBx.open ~ .select_list{
    display: block;
}
.select_list .select_list_item{
    display: flex;
    align-items: center;
    list-style: none;
    height: 50px;
    cursor: pointer;
    transition: 0.3s;
    padding: 0 15px;
    border-radius: 8px;
    color:white;
}
.select_list .select_list_item:hover{
    background-color: gray;
}
.select_list_item .item-text{
    font-size: 16px;
    font-weight: 400;
}
.select_list_item .select_list_item_checkbox{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 16px;
    width: 16px;
    border-radius: 4px;
    margin-right: 12px;
    border: 1.5px solid #c0c0c0;
    transition: all 0.3s ease-in-out;
}
.select_list_item.checked .select_list_item_checkbox{
    background-color: #1352ff;
    border-color: transparent;
}
.select_list_item_checkbox .select_list_item_checkbox_checkIcon{
    color: white;
    font-size: 11px;
    transform: scale(0);
    transition: all 0.2s ease-in-out;
}
.select_list_item.checked .select_list_item_checkbox_checkIcon{
    transform: scale(1);
}
</style>