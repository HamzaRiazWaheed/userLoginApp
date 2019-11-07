<template>
    <div class="footer">
        <div class="columns">
            <div>
                <span>Menu 1</span>
                <span>Menu 2</span>
                <span>Menu 3</span>
            </div>
            <div>
                <span>Menu 1</span>
                <span>Menu 2</span>
                <span>Menu 3</span>
            </div>
            <div>
                <span>Menu 1</span>
                <span>Menu 2</span>
                <span>Menu 3</span>
            </div>
        </div>
        <div class="floor">
            <span> Lorem Ipsum totem gypsum </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'footerBase',
}
</script>

<style lang="scss" scoped>
.footer {
    padding: 2%;
    background-color: #e5e4e4;
    color:#212121;
    .columns {
        > div {
            display: inline-block;
            width: 32%;
            span {
                display: block;
                text-align: center;
                margin: 10px 0;
                font-size: 12px;
            }
        }
    }
    .floor {
        margin-top: 10px;
        text-align: center;
        font-size: 10px;
    }
}
</style>