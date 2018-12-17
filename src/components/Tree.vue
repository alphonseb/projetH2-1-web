<template>
    <div class="tree-container">
        <div class="tree" ref="tree">
            <FamilyMember
                class="parent-1"
                firstName="Parent"
                lastName="1"
                profileImgUrl="../assets/logo.png"
            />
            <FamilyMember
                class="parent-2"
                firstName="Parent"
                lastName="2"
                profileImgUrl="../assets/logo.png"
            />
            <div class="siblings" ref="siblings">
                <FamilyMember firstName="Sibling 1"/>
                <FamilyMember firstName="Sibling 2"/>
                <FamilyMember firstName="Sibling 3"/>
                <div class="user" ref="user">
                    <FamilyMember firstName="User"/>
                    <FamilyMember class="user-partner" firstName="User" lastName="Partner"/>
                    <div class="user-children" ref="children">
                        <FamilyMember firstName="Child 1"/>
                        <FamilyMember firstName="Child 2"/>
                        <FamilyMember firstName="Child 3"/>
                        <FamilyMember firstName="Child 4"/>
                    </div>
                </div>
                <FamilyMember firstName="Sibling 4"/>
            </div>
        </div>
    </div>
</template>

<script>
import FamilyMember from "./FamilyMember.vue";
import { log } from "async";

export default {
    name: "Tree",
    components: {
        FamilyMember
    },
    methods: {
        test() {
            const childrenBoundingRect = this.$refs.children.getBoundingClientRect();
            const siblingsBoundingRect = this.$refs.siblings.getBoundingClientRect();
            const translateValueX =
                siblingsBoundingRect.left < childrenBoundingRect.left
                    ? -siblingsBoundingRect.left
                    : -childrenBoundingRect.left;
            this.$refs.tree.style.transform = `translateX(${translateValueX}px)`;
            const userBoundingRect = this.$refs.user.getBoundingClientRect();
            const scrollDistanceX =
                userBoundingRect.left > window.screen.availWidth / 2
                    ? userBoundingRect.left + window.screen.availWidth / 2
                    : 0;
            console.log(scrollDistanceX);
            window.setTimeout(() => {
                window.scrollTo(scrollDistanceX, 0);
            }, 500);
        }
    },
    mounted() {
        this.test();
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
        top: -200px;
        right: 25px;
    }
    .parent-2 {
        position: absolute;
        top: -200px;
        left: 25px;
    }
    .siblings {
        position: absolute;
        top: -25px;
        display: flex;
        justify-content: space-between;
        & > div {
            margin-right: 20px;
            &:last-child {
                margin-right: 0;
            }
        }
        .user {
            position: relative;
            display: flex;
            justify-content: center;
            .family-member {
                margin-right: 10px;
                &.user-partner {
                    margin-right: 0;
                }
            }
            .user-children {
                position: absolute;
                top: calc(100% + 20px);
                left: 50%;
                transform: translateX(-50%);
                display: flex;
                justify-content: space-between;
                .family-member {
                    margin-right: 15px;
                    &:last-child {
                        margin-right: 0;
                    }
                }
            }
        }
    }
}
</style>
