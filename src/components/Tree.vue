<template>
    <div class="tree-container">
        <div class="tree current" ref="tree">
            <FamilyMember class="parent-1" :member="user.father" @click.native="updateParent"/>
            <FamilyMember class="parent-2" :member="user.mother"/>
            <div
                class="siblings"
                :class="{'is-oldest': isOldest, 'is-only-child': isOnlyChild, 'no-partner': noPartner }"
                ref="siblings"
            >
                <FamilyMember
                    v-for="item in youngerSiblings"
                    :key="item.id"
                    :member="item"
                    @click.native="updateSibling"
                />
                <div class="user" ref="user">
                    <div class="link" ref="link" :style="{height: childrenLinkHeight + 'px'}"></div>
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
                        <FamilyMember
                            v-for="item in user.children"
                            :key="item.id"
                            :member="item"
                            @click.native="updateChild"
                        />
                    </div>
                </div>
                <FamilyMember
                    v-for="item in olderSiblings"
                    :key="item.id"
                    :member="item"
                    @click.native="updateSibling"
                />
            </div>
        </div>
    </div>
</template>

<script>
import FamilyMember from './FamilyMember.vue';

export default {
    name: 'Tree',
    components: {
        FamilyMember
    },
    data: () => {
        return {
            isMounted: false,
            translateValueX: 0,
            user: {
                firstName: 'User',
                age: 14,
                father: {
                    firstName: 'Father'
                },
                mother: {
                    firstName: 'Mother'
                },
                partner: {
                    firstName: 'Partner'
                },
                siblings: [
                    {
                        firstName: 'Brother',
                        age: 12
                    },
                    {
                        firstName: 'Little Brother',
                        age: 10
                    },
                    {
                        firstName: 'Older Sister',
                        age: 18
                    },
                    {
                        firstName: 'Sister',
                        age: 15
                    }
                ],
                children: [
                    {
                        firstName: 'Child1'
                    },
                    {
                        firstName: 'Child 2'
                    },
                    {
                        firstName: 'Child 3'
                    }
                ]
            },
            oldUser: {}
        };
    },
    computed: {
        youngerSiblings () {
            const youngerSiblings = [];

            for (const sibling of this.user.siblings) {
                if (sibling.age < this.user.age) {
                    youngerSiblings.push(sibling);
                }
            }
            youngerSiblings.sort((a, b) => a.age - b.age);
            return youngerSiblings;
        },
        olderSiblings () {
            const olderSiblings = [];

            for (const sibling of this.user.siblings) {
                if (sibling.age > this.user.age) {
                    olderSiblings.push(sibling);
                }
            }
            olderSiblings.sort((a, b) => a.age - b.age);
            return olderSiblings;
        },
        isOldest () {
            return (
                this.olderSiblings.length === 0 &&
                this.user.siblings.length !== 0
            );
        },
        isOnlyChild () {
            return this.user.siblings.length === 0;
        },
        noPartner () {
            return !this.user.partner;
        },
        childrenLinkHeight () {
            if (this.isMounted) {
                return this.$refs.children.offsetTop - this.$refs.link.offsetTop
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
                console.log(this.translateValueX, 'test');
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
            const userBoundingRect = this.$refs.user.getBoundingClientRect();
            const scrollDistanceX =
                userBoundingRect.left > window.screen.availWidth / 2
                    ? userBoundingRect.left + window.screen.availWidth / 2
                    : 0;
            window.setTimeout(() => {
                window.scrollTo(scrollDistanceX, 0);
            }, 700);
        },
        updateUser () {
            // this.translateValueX = 0;
            this.$refs.tree.style.transform = 'translateX(0)';

            this.user = {
                firstName: 'User',
                age: 14,
                father: {
                    firstName: 'Updated Father'
                },
                mother: {
                    firstName: 'Updated Mother'
                },
                partner: {
                    firstName: 'Updated Partner'
                },
                siblings: [
                    {
                        firstName: 'Brother',
                        age: 12
                    },
                    // {
                    //     firstName: "Little Brother",
                    //     age: 10
                    // },
                    // {
                    //     firstName: "Older Sister",
                    //     age: 18
                    // },
                    {
                        firstName: 'Sister',
                        age: 15
                    }
                ],
                children: [
                    {
                        firstName: 'Child 1'
                    }
                    // {
                    //     firstName: "Child 2"
                    // },
                    // {
                    //     firstName: "Child 3"
                    // }
                ]
            };
        },
        updateParent () {
            // console.log(this.translateValueX);
            this.$refs.tree.style.transform = `translateX(${
                this.translateValueX
                }px) translateY(175px)`;
            window.setTimeout(() => {
                this.$refs.tree.style.opacity = '0';
            }, 200);
            window.setTimeout(() => {
                this.updateUser();
            }, 500);
            window.setTimeout(() => {
                this.moveTree();
                this.$refs.tree.style.opacity = '1';
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
                this.$refs.tree.style.opacity = '0';
            }, 200);
            window.setTimeout(() => {
                this.updateUser();
            }, 500);
            window.setTimeout(() => {
                this.moveTree();
                this.$refs.tree.style.opacity = '1';
            }, 800);
            this.focusUser();
        },
        updateSibling () {
            window.setTimeout(() => {
                this.$refs.tree.style.opacity = '0';
            }, 200);
            window.setTimeout(() => {
                this.updateUser();
            }, 500);
            window.setTimeout(() => {
                this.moveTree();
                this.$refs.tree.style.opacity = '1';
            }, 800);
            this.focusUser();
        }
    },
    mounted () {
        this.moveTree();
        this.focusUser();
        this.isMounted = true
    },
    updated () {
        // this.moveTree();
        // this.focusUser();
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
    transition: transform 0.3s ease-in-out, opacity 0.3s ease;
    .parent-1 {
        position: absolute;
        top: -200px;
        right: 25px;
        &::after {
            content: '';
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
            content: '';
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
            content: '';
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
            content: '';
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
            content: '';
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
            .link {
                position: absolute;
                top: 50px;
                left: 104px;
                width: 2px;
                height: 40px;
                background: #000;
            }
            .family-member {
                margin-right: 10px;
                &.user-partner {
                    margin-right: 0;
                    &::before {
                        content: '';
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
                    content: '';
                    position: absolute;
                    top: -10px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: calc(100% - 100px);
                    height: 2px;
                    background: #000;
                }
                // &::after {
                //     content: '';
                //     position: absolute;
                //     top: -151px;
                //     left: 50%;
                //     transform: translateX(-50%);
                //     width: 2px;
                //     height: 142px;
                //     background: #000;
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
