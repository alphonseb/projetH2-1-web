<template>
    <div class="tree-container">
        <div class="tree">
            <FamilyMember
                class="parent-1"
                firstName="Test"
                lastName="User"
                profileImgUrl="../assets/logo.png"
            />
            <FamilyMember
                class="parent-2"
                firstName="Test"
                lastName="User"
                profileImgUrl="../assets/logo.png"
            />
            <div class="siblings">
                <FamilyMember/>
                <FamilyMember/>
            </div>
        </div>
    </div>
</template>

<script>
import FamilyMember from "./FamilyMember.vue";

export default {
    name: "Tree",
    components: {
        FamilyMember
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.tree-container {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.tree {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .parent-1 {
        position: absolute;
        top: -100px;
        left: -75px;
    }
    .parent-2 {
        position: absolute;
        top: -100px;
        left: 25px;
    }
    .siblings {
        position: absolute;
        top: -25px;
        display: flex;
        justify-content: space-between;
        div {
            margin-right: 20px;
        }
    }
}
</style>
