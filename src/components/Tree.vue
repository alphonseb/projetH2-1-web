<template>
    <div class="tree-container">
        <div class="tree" ref="tree">
            <FamilyMember class="parent-1" :member="user.father"/>
            <FamilyMember class="parent-2" :member="user.mother"/>
            <div
                class="siblings"
                :class="{'is-oldest': isOldest, 'is-only-child': isOnlyChild, 'no-partner': noPartner }"
                ref="siblings"
            >
                <FamilyMember v-for="item in youngerSiblings" :key="item.id" :member="item"/>
                <div class="user" ref="user">
                    <FamilyMember :member="user"/>
                    <FamilyMember
                        v-if="this.user.children.length !== 0"
                        class="user-partner"
                        :member="user.partner"
                    />
                    <div
                        v-if="this.user.children.length !== 0"
                        class="user-children"
                        ref="children"
                    >
                        <FamilyMember v-for="item in user.children" :key="item.id" :member="item"/>
                    </div>
                </div>
                <FamilyMember v-for="item in olderSiblings" :key="item.id" :member="item"/>
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
    data: () => {
        return {
            user: {
                firstName: "User",
                age: 14,
                father: {
                    firstName: "Father"
                },
                mother: {
                    firstName: "Mother"
                },
                partner: {
                    firstName: "Partner"
                },
                siblings: [
                    // {
                    //     firstName: "Brother",
                    //     age: 12
                    // },
                    // {
                    //     firstName: "Little Brother",
                    //     age: 10
                    // },
                    // {
                    //     firstName: "Older Sister",
                    //     age: 18
                    // },
                    // {
                    //     firstName: "Sister",
                    //     age: 15
                    // }
                ],
                children: [
                    {
                        firstName: "Child 1"
                    },
                    {
                        firstName: "Child 2"
                    },
                    {
                        firstName: "Child 3"
                    }
                ]
            }
        };
    },
    computed: {
        youngerSiblings() {
            const youngerSiblings = [];

            for (const sibling of this.user.siblings) {
                if (sibling.age < this.user.age) {
                    youngerSiblings.push(sibling);
                }
            }
            youngerSiblings.sort((a, b) => a.age - b.age);
            return youngerSiblings;
        },
        olderSiblings() {
            const olderSiblings = [];

            for (const sibling of this.user.siblings) {
                if (sibling.age > this.user.age) {
                    olderSiblings.push(sibling);
                }
            }
            olderSiblings.sort((a, b) => a.age - b.age);
            return olderSiblings;
        },
        isOldest() {
            return (
                this.olderSiblings.length === 0 &&
                this.user.siblings.length !== 0
            );
        },
        isOnlyChild() {
            return this.user.siblings.length === 0;
        },
        noPartner() {
            return !this.user.partner;
        }
    },
    methods: {
        moveTree() {
            if (this.$refs.children && this.$refs.siblings) {
                const childrenBoundingRect = this.$refs.children.getBoundingClientRect();
                const siblingsBoundingRect = this.$refs.siblings.getBoundingClientRect();
                const translateValueX =
                    siblingsBoundingRect.left < childrenBoundingRect.left
                        ? -siblingsBoundingRect.left
                        : -childrenBoundingRect.left;
                this.$refs.tree.style.transform = `translateX(${translateValueX}px)`;
            } else if (this.$refs.children) {
                const childrenBoundingRect = this.$refs.children.getBoundingClientRect();
                if (childrenBoundingRect.left < 0) {
                    const translateValueX = -childrenBoundingRect.left;
                    this.$refs.tree.style.transform = `translateX(${translateValueX}px)`;
                }
            } else if (this.$refs.siblings) {
                const siblingsBoundingRect = this.$refs.siblings.getBoundingClientRect();
                if (siblingsBoundingRect.left < 0) {
                    const translateValueX = -siblingsBoundingRect.left;
                    this.$refs.tree.style.transform = `translateX(${translateValueX}px)`;
                }
            }
        },
        focusUser() {
            const userBoundingRect = this.$refs.user.getBoundingClientRect();
            const scrollDistanceX =
                userBoundingRect.left > window.screen.availWidth / 2
                    ? userBoundingRect.left + window.screen.availWidth / 2
                    : 0;
            window.setTimeout(() => {
                window.scrollTo(scrollDistanceX, 0);
            }, 500);
        }
    },
    mounted() {
        this.moveTree();
        this.focusUser();
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
        &::after {
            content: "";
            position: absolute;
            top: 50px;
            left: 100%;
            width: 50px;
            height: 2px;
            background: #000;
        }
    }
    .parent-2 {
        position: absolute;
        top: -200px;
        left: 25px;
        &::after {
            content: "";
            position: absolute;
            top: 50px;
            right: 100%;
            width: 50px;
            height: 2px;
            background: #000;
        }
    }
    .siblings {
        position: absolute;
        top: -25px;
        display: flex;
        justify-content: space-between;
        &::before {
            content: "";
            position: absolute;
            top: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: calc(100% - 100px);
            height: 2px;
            background: #000;
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
        &::after {
            content: "";
            position: absolute;
            top: -125px;
            left: 50%;
            transform: translateX(-50%);
            width: 2px;
            height: 115px;
            background: #000;
        }
        & > div {
            margin-right: 20px;
            &:last-child {
                margin-right: 0;
            }
        }
        .family-member:not(.user-partner)::before {
            content: "";
            position: absolute;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            width: 2px;
            height: 10px;
            background: #000;
        }
        .user {
            position: relative;
            display: flex;
            justify-content: center;
            .family-member {
                margin-right: 10px;
                &.user-partner {
                    margin-right: 0;
                    &::before {
                        content: "";
                        position: absolute;
                        top: 50px;
                        right: 100%;
                        height: 2px;
                        width: 10px;
                        background: #000;
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
                    content: "";
                    position: absolute;
                    top: -10px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: calc(100% - 100px);
                    height: 2px;
                    background: #000;
                }
                &::after {
                    content: "";
                    position: absolute;
                    top: -151px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 2px;
                    height: 142px;
                    background: #000;
                }
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
