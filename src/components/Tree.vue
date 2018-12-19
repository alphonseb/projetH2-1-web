<template>
    <div class="tree-container">
        <div class="tree current" ref="tree">
            <FamilyMember
                v-if="user.family.father.node"
                class="parent-1"
                :member="user.family.father.node"
                @click.native="updateParent"
            />
            <FamilyMember
                v-if="user.family.mother.node"
                class="parent-2"
                :member="user.family.mother.node"
            />
            <div
                class="siblings"
                :class="{'is-oldest': isOldest, 'is-only-child': isOnlyChild, 'no-partner': noPartner, 'no-parents': noParents }"
                ref="siblings"
            >
                <FamilyMember
                    v-for="item in youngerSiblings"
                    :key="item.id"
                    :member="item.node"
                    @click.native="updateSibling"
                />
                <div class="user" ref="user">
                    <div
                        v-if="user.family.children.length"
                        class="link"
                        ref="link"
                        :style="{height: childrenLinkHeight + 'px'}"
                    ></div>
                    <FamilyMember class="selected-user" :member="user"/>
                    <FamilyMember
                        v-if="user.family.partner.node"
                        class="user-partner"
                        :member="user.family.partner.node"
                    />
                    <div v-if="user.family.children.length" class="user-children" ref="children">
                        <FamilyMember
                            v-for="item in user.family.children"
                            :key="item.id"
                            :member="item.node"
                            @click.native="updateChild"
                        />
                    </div>
                </div>
                <FamilyMember
                    v-for="item in olderSiblings"
                    :key="item.id"
                    :member="item.node"
                    @click.native="updateSibling"
                />
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
    },
    props: {
        user: Object
    },
    data: () => {
        return {
            isMounted: false,
            isUpdated: false,
            translateValueX: 0,
            nextUserId: null
        };
    },
    computed: {
        youngerSiblings () {
            const youngerSiblings = [];

            for (const sibling of this.user.family.fratery) {
                if (sibling.node.birth.date > this.user.birth.date) {
                    youngerSiblings.push(sibling);
                }
            }
            youngerSiblings.sort((a, b) => b.node.birth.date - a.node.birth.date);
            return youngerSiblings;
        },
        olderSiblings () {
            const olderSiblings = [];

            for (const sibling of this.user.family.fratery) {
                if (sibling.node.birth.date < this.user.birth.date) {
                    olderSiblings.push(sibling);
                }
            }
            olderSiblings.sort((a, b) => b.node.birth.date - a.node.birth.date);
            return olderSiblings;
        },
        isOldest () {
            return (
                this.olderSiblings.length === 0 &&
                this.user.family.fratery.length !== 0
            );
        },
        isOnlyChild () {
            return this.user.family.fratery.length === 0;
        },
        noPartner () {
            return !this.user.family.partner.node;
        },
        noParents () {
            return (!this.user.family.father.node && !this.user.family.mother.node)
        },
        childrenLinkHeight () {
            if (this.isUpdated) {
                return (
                    this.$refs.children.offsetTop -
                    this.$refs.link.offsetTop -
                    30
                );
            }
        }
    },
    methods: {
        moveTree () {
            if (this.$refs.children && this.$refs.siblings) {
                const childrenBoundingRect = this.$refs.children.getBoundingClientRect();
                const siblingsBoundingRect = this.$refs.siblings.getBoundingClientRect();
                console.log(siblingsBoundingRect.left);
                if (
                    childrenBoundingRect.left < 0 &&
                    siblingsBoundingRect.left < 0
                ) {
                    this.translateValueX =
                        siblingsBoundingRect.left < childrenBoundingRect.left
                            ? -siblingsBoundingRect.left
                            : -childrenBoundingRect.left;
                } else if (childrenBoundingRect.left < 0) {
                    this.translateValueX = -childrenBoundingRect.left;
                } else if (siblingsBoundingRect.left < 0) {
                    this.translateValueX = -siblingsBoundingRect.left;
                }
                console.log(this.translateValueX, "test");
                if (this.translateValueX !== 0) {
                    this.$refs.tree.style.transform = `translateX(${
                        this.translateValueX
                        }px)`;
                }
            } else if (this.$refs.children) {
                const childrenBoundingRect = this.$refs.children.getBoundingClientRect();
                if (childrenBoundingRect.left < 0) {
                    this.translateValueX = -childrenBoundingRect.left;
                    this.$refs.tree.style.transform = `translateX(${
                        this.translateValueX
                        }px)`;
                }
            } else if (this.$refs.siblings) {
                const siblingsBoundingRect = this.$refs.siblings.getBoundingClientRect();
                if (siblingsBoundingRect.left < 0) {
                    this.translateValueX = -siblingsBoundingRect.left;
                    this.$refs.tree.style.transform = `translateX(${
                        this.translateValueX
                        }px)`;
                }
            }
        },
        focusUser () {
            if (this.$refs.user) {

                const userBoundingRect = this.$refs.user.getBoundingClientRect();
                const scrollDistanceX =
                    userBoundingRect.left > window.screen.availWidth / 2
                        ? userBoundingRect.left + window.screen.availWidth / 2
                        : 0;
                window.setTimeout(() => {
                    window.scrollTo(scrollDistanceX, 0);
                }, 700);
            }
        },
        updateUser () {
            // this.translateValueX = 0;
            this.$refs.tree.style.transform = "translateX(0)";

        },
        updateParent () {
            // console.log(this.translateValueX);
            this.$refs.tree.style.transform = `translateX(${
                this.translateValueX
                }px) translateY(175px)`;
            window.setTimeout(() => {
                this.$refs.tree.style.opacity = "0";
            }, 200);
            window.setTimeout(() => {
                this.updateUser();
            }, 500);
            window.setTimeout(() => {
                this.moveTree();
                this.$refs.tree.style.opacity = "1";
            }, 800);
            // this.updateUser();
            // window.setTimeout(() => {
            // }, 300);
            this.focusUser();
        },
        updateChild () {
            this.$refs.tree.style.transform = `translateX(${
                this.translateValueX
                }px) translateY(-200px)`;
            window.setTimeout(() => {
                this.$refs.tree.style.opacity = "0";
            }, 200);
            window.setTimeout(() => {
                this.updateUser();
            }, 500);
            window.setTimeout(() => {
                this.moveTree();
                this.$refs.tree.style.opacity = "1";
            }, 800);
            this.focusUser();
        },
        updateSibling () {
            window.setTimeout(() => {
                this.$refs.tree.style.opacity = "0";
            }, 200);
            window.setTimeout(() => {
                this.updateUser();
            }, 500);
            window.setTimeout(() => {
                this.moveTree();
                this.$refs.tree.style.opacity = "1";
            }, 800);
            this.focusUser();
        }
    },
    mounted () {
        this.isMounted = true;
    },
    updated () {
        if (this.user) {
            this.isUpdated = true
            this.moveTree();
            this.focusUser();
            console.log(this.nextUserId);

        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.tree-container {
    overflow: scroll;
    width: 100vw;
    height: 130vh;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    position: relative;
    &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 100%;
        width: 50px;
        height: 100%;
    }
}
.tree {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 30%;
    left: 50%;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease;
    color: #fff;
    .parent-1 {
        position: absolute;
        top: -220px;
        right: 25px;
        &::after {
            content: '';
            position: absolute;
            top: 48px;
            left: 100%;
            width: 50px;
            height: 4px;
            background: #fff;
        }
    }
    .parent-2 {
        position: absolute;
        top: -220px;
        left: 25px;
        &::after {
            content: '';
            position: absolute;
            top: 48px;
            right: 100%;
            width: 50px;
            height: 4px;
            background: #fff;
        }
    }
    .siblings {
        position: absolute;
        top: -25px;
        display: flex;
        justify-content: space-between;
        &::before {
            content: '';
            position: absolute;
            top: -30px;
            left: 50%;
            transform: translateX(-50%);
            width: calc(100% - 100px);
            height: 4px;
            background: #fff;
        }
        &.is-oldest::before {
            width: calc(100% - 210px);
            transform: translateX(0);
            left: 50px;
        }
        &.is-only-child {
            &::before {
                left: 50px;
                width: 56px;
                transform: none;
            }
            &.no-partner {
                &::before {
                    display: none;
                }
                .user .family-member {
                    margin-right: 0;
                }
            }
        }
        &.no-partner {
            .user {
                .family-member {
                    margin-right: 0;
                }
                .link {
                    left: 48px;
                    opacity: 0.3;
                }
            }
        }
        &::after {
            content: '';
            position: absolute;
            top: -145px;
            left: 50%;
            transform: translateX(-50%);
            width: 4px;
            height: 115px;
            background: #fff;
        }
        &.no-parents {
            &::after {
                display: none;
            }
            & > .user > .family-member:not(.user-partner)::before {
                display: none;
            }
        }
        & > div {
            margin-right: 20px;
            &:last-child {
                margin-right: 0;
            }
        }
        .family-member:not(.user-partner)::before {
            content: '';
            position: absolute;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            width: 4px;
            height: 30px;
            background: #fff;
        }
        .user {
            position: relative;
            display: flex;
            justify-content: center;
            .link {
                position: absolute;
                top: 50px;
                left: 103px;
                width: 4px;
                height: 40px;
                background: #fff;
            }
            .family-member {
                margin-right: 10px;
                &.user-partner {
                    margin-right: 0;
                    &::before {
                        content: '';
                        position: absolute;
                        top: 48px;
                        right: 100%;
                        height: 4px;
                        width: 10px;
                        background: #fff;
                    }
                }
            }
            .user-children {
                position: absolute;
                top: calc(100% + 20px);
                left: 50%;
                transform: translateX(-50%);
                display: flex;
                justify-content: space-between;
                &::before {
                    content: '';
                    position: absolute;
                    top: -30px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: calc(100% - 100px);
                    height: 4px;
                    background: #fff;
                }
                // &::after {
                //     content: '';
                //     position: absolute;
                //     top: -151px;
                //     left: 50%;
                //     transform: translateX(-50%);
                //     width: 2px;
                //     height: 142px;
                //     background: #FFF;
                // }
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
