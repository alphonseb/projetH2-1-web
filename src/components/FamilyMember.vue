<template>
    <div class="family-member">
        <img src="../assets/testImages/pexels-photo-220453.jpeg" alt="Photo de profil">
        <h4>{{firstName}} {{lastName}}</h4>
    </div>
</template>

<script>
export default {
    name: "FamilyMember",
    props: {
        relation: String,
        firstName: String,
        lastName: String,
        profileImgUrl: String
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.family-member {
    position: relative;
    img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 100%;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
}
</style>
