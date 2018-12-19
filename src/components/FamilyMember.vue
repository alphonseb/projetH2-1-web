<template>
    <div class="family-member" @click="getId">
        <img src="../assets/testImages/pexels-photo-220453.jpeg" alt="Photo de profil">
        <h4>
            <span class="first-name">{{member.name}}</span>
            <br>
            <span class="last-name">{{member.name}}</span>
        </h4>
    </div>
</template>

<script>
export default {
    name: "FamilyMember",
    props: {
        member: Object
    },
    methods: {
        getId () {
            this.$parent.nextUserId = this.member.id;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.family-member {
    position: relative;
    &.connected-user {
        img {
            box-shadow: 0 0 3pt 2pt #77ffce;
        }
    }
    &.selected-user {
        img {
            box-shadow: 0 0 3pt 2pt #bf51e5;
        }
    }
    &.has-notifications {
        &::after {
            content: '';
            position: absolute;
            top: 0px;
            left: 75px;
            width: 20px;
            height: 20px;
            background: #cf0000;
            border-radius: 100%;
        }
    }
    img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 100%;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    h4 {
        margin-top: 0.5em;
        text-align: center;
        .first-name {
            font-weight: 400;
        }
        .last-name {
            font-weight: 600;
        }
    }
}
</style>
