<template>
    <div class="profileEdit">
        <div class="profileHeader">
            <img
                class="profilePic"
                :src="datas.profilePicture.length ? datas.profilePicture.length : currentUser.profilePicture.src"
                alt="profilePic"
            >

            <h2>Editez votre profil</h2>
        </div>
        <div class="profileContent">
            <div class="profileEditable">
                <div class="flexContainer">
                    <p class="customPic">
                        <label for="new-pic">Modifier la photo</label>
                        <input
                            type="file"
                            name="new-pic"
                            id="new-pic"
                            ref="pictureFile"
                            @change="updatePicture"
                        >
                    </p>
                </div>
                <form action="submit">
                    <div class="names">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            minlength="4"
                            maxlength="28"
                            size="10"
                            placeholder="Prénom"
                            :value="currentUser.name.split(' ')[0]"
                        >
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            minlength="4"
                            maxlength="28"
                            size="10"
                            placeholder="Nom"
                            :value="currentUser.name.split(' ')[1]"
                        >
                    </div>
                    <div class="genders">
                        <div class="checkboxContainer">
                            <input
                                type="radio"
                                name="gender"
                                id="man"
                                :checked="currentUser.gender ==='Homme'"
                            >
                            <label for="man">Homme</label>
                        </div>
                        <div class="checkboxContainer">
                            <input
                                type="radio"
                                name="gender"
                                id="woman"
                                :checked="currentUser.gender ==='Femme'"
                            >
                            <label for="woman">Femme</label>
                        </div>
                    </div>
                    <div class="birth">
                        <p>Date de naissance</p>
                        <div class="birthInputs">
                            <input
                                class="birthDate"
                                type="text"
                                maxlength="2"
                                placeholder="JJ"
                                :value="currentUser.birth.date.split('T')[0].split('-')[2]"
                            >
                            <input
                                class="birthDate"
                                type="text"
                                maxlength="2"
                                placeholder="MM"
                                :value="currentUser.birth.date.split('T')[0].split('-')[1]"
                            >
                            <input
                                class="birthDate"
                                type="text"
                                maxlength="4"
                                placeholder="AAAA"
                                :value="currentUser.birth.date.split('T')[0].split('-')[0]"
                            >
                        </div>
                    </div>

                    <div class="informations">
                        <input type="text" placeholder="Votre E-mail" :value="currentUser.mail">
                    </div>
                    <div class="informations">
                        <input
                            type="text"
                            placeholder="Lieu de naissance"
                            :value="currentUser.birth.place"
                        >
                    </div>
                    <div class="informations">
                        <input
                            type="text"
                            id="home"
                            placeholder="Où habitez-vous ?"
                            :value="currentUser.city"
                        >
                    </div>
                    <div class="informations">
                        <input
                            type="text"
                            placeholder="Où étudiez-vous / Travaillez-vous ?"
                            :value="currentUser.work"
                        >
                    </div>
                    <div class="informations">
                        <input
                            type="text"
                            placeholder="Vos hobbies"
                            :value="currentUser.hobbies.join(' ')"
                        >
                    </div>
                    <div class="informations">
                        <input
                            type="text"
                            placeholder="Quel(s) sport(s) pratiquez vous?"
                            :value="currentUser.sports.join(' ')"
                        >
                    </div>

                    <div class="familyRelation">
                        <div>
                            <p>Mon père est :</p>
                            <search familyType="father"/>
                        </div>
                        <div>
                            <p>Ma mère est :</p>
                            <search familyType="mother"/>
                        </div>
                        <div>
                            <p>Je suis le/la frère/soeur de :</p>
                            <search familyType="fratery"/>
                        </div>
                        <div>
                            <p>Je suis le/la conjoint(e) de :</p>
                            <search familyType="partner"/>
                        </div>
                        <div>
                            <p>Mes enfants sont:</p>
                            <search familyType="children"/>
                        </div>
                    </div>
                    <div class="bottomButton">
                        <span>Enregistrer</span>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import search from "@/components/search.vue";

export default {
    name: "profileEdit",
    components: {
        search
    },
    data: () => {
        return {
            datas: {
                profilePicture: ""
            },
            reader: new FileReader()
        };
    },
    computed: {
        ...mapState({
            currentUser: state => state.me
        })
    },
    methods: {
        updatePicture() {
            if (!this.$refs.pictureFile.files[0]) return;

            this.reader.readAsDataURL(this.$refs.pictureFile.files[0]);
            this.datas.profilePicture = this.$refs.pictureFile.files[0];
        }
    }
};
</script>

<style lang="scss" scoped>
.familyRelation {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 10%;
    p {
        font-size: 1.2em;
    }
    ul {
        position: relative;
        padding: 0;
        margin: 0;
        z-index: 1;
        li {
            list-style: none;
            margin-top: 5px;
        }
    }
}
.flexContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10%;
}

.flexContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10%;
}

.profileEdit {
    width: 100%;
    height: 150vh;
    overflow: hidden;
    margin: 0;
    font-family: Roboto;
    box-sizing: border-box;
    color: white;

    .profileHeader {
        height: 50vh;
        position: fixed;
        width: 100%;
        .goBack {
            position: relative;
            box-sizing: border-box;
            position: absolute;
            width: 80%;
            align-items: center;
            justify-content: flex-start;
            margin: 3% 8%;

            .arrow {
                position: absolute;
                margin-top: 5.5%;
                left: 3%;
                width: 15px;
                height: 15px;
                border-top: solid white 3px;
                border-left: solid white 3px;
                transform: rotate(-45deg);
            }

            p {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                color: white;
            }
        }
    }

    h2 {
        width: 80vw;
        position: absolute;
        top: 15%;
        left: 50%;
        transform: translate(-50%);
        margin-top: 7%;
        text-align: center;
        font-size: 2em;
        font-weight: bold;
    }

    .profilePic {
        width: 100%;
    }
}

.profileContent {
    background: linear-gradient(
        180deg,
        #7abed300 2.19%,
        #79bdd2 24.36%,
        #476fb5 100%
    );
    position: absolute;
    top: 20vh;
    width: 100%;
    z-index: 3;
    padding-top: 30vh;
    padding-bottom: 50px;
    .customPic {
        z-index: 2;
        text-align: center;
        input {
            display: none;
        }
    }
    .profileEditable {
        width: 90%;
        margin: auto;
        form {
            width: 100%;
            .inscription {
                width: 100%;
                text-align: center;
            }
            ::placeholder {
                color: white;
                opacity: 0.5;
            }
            @mixin flex_style {
                width: 100%;
                height: 10%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-top: 3%;
            }
            @mixin input_style {
                color: white;
                border: 2px solid white;
                border-width: 0 0 1px 0;
                background: transparent;
                font-size: 1.2em;
            }
            .names {
                @include flex_style;
                input {
                    width: 45%;
                    @include input_style;
                }
            }
            .genders {
                @include flex_style;
                .checkboxContainer {
                    width: 45%;
                    margin-top: 5%;
                }
            }
            .birth {
                margin-top: 10%;
                .birthInputs {
                    width: 35%;
                    display: flex;
                    align-items: left;
                    justify-content: space-between;
                }
                input {
                    width: 28%;
                    height: 1.5em;
                    border: none;
                    border-radius: 0.3em;
                    text-align: center;
                }
            }
            .informations {
                margin-top: 40px;
                input {
                    @include input_style;
                    width: 90%;
                }
            }
            .bottomButton {
                width: 100%;
                height: 3em;
                margin-top: 5%;
                border: 1px solid white;
                border-radius: 0.8em;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 20%;
                span {
                    height: 1.5em;
                    font-size: 1.5em;
                    font-weight: 400;
                }
            }
        }
    }
}
</style>

